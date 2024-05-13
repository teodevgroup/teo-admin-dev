import Decimal from 'decimal.js'

let groupDelegateMap = [
    "Admin",
    "Category",
    "Item",
    "NullableRecord",
    "Product",
    "Record",
    "Root",
    "std",
    "std.DataSetRecord",
    "std.DataSetRelation",
    "std.admin",
    "std.bcrypt",
    "std.identity"
]
let customHandlerMap = {
    "Admin.identity":{ method: "POST", path: "Admin/identity", pathArguments: false },
    "Admin.signIn":{ method: "POST", path: "Admin/signIn", pathArguments: false },
    "Root.identity":{ method: "POST", path: "Root/identity", pathArguments: false },
    "Root.signIn":{ method: "POST", path: "Root/signIn", pathArguments: false }
}

async function request(method, path, body = undefined, headers = undefined, queryString = undefined) {
    let url = process.env.TEO_HOST + path
    if (queryString) {
        url = url + "?" + queryString
    }
    
    let response = await fetch(url, {
        method: method,
        headers: headers,
        body: body === undefined ? undefined : (body instanceof FormData ? body : JSON.stringify(body))
    })
    let response_text = await response.text()
    
    let response_json = JSON.parse(response_text, (key, value) => {
        if (typeof value === 'object' && value != null) {
            if (value['$datetime']) {
                return new Date(value['$datetime'])
            } else if (value['$decimal']) {
                return new Decimal(value['$decimal'])
            } else if (value['$date']) {
                return value['$date']
            } else {
                return value
            }
        } else {
            return value
        }
    })
    if (400 <= response.status) {
        throw new TeoError(response_json.error)
    }
    return response_json
}

function replacePathArguments(path, args) {
    let resultPath = path
    for (const [key, value] of Object.entries(args)) {
        resultPath = resultPath.replace(`{${key}}`, value)
    }
    return resultPath
}

function buildHeaders(currentHeaders, headers) {
    let newHeaders = currentHeaders
    if (headers && typeof headers === 'object') {
        if (newHeaders) {
            newHeaders = Object.assign({}, newHeaders, headers)
        } else {
            newHeaders = headers
        }
    }
    return newHeaders
}

function buildHeadersAndQueryString(currentHeaders, headers, queryString) {
    let newHeaders = buildHeaders(currentHeaders, headers)
    let qs = undefined
    if (typeof headers === 'string') {
        qs = headers
    } else if (typeof queryString === 'string') {
        qs = queryString
    }
    return [newHeaders, qs]
}

class TeoError extends Error {
    constructor(responseError) {
        super(responseError.message)
        this.type = responseError.type
        this.errors = responseError.errors
        Object.setPrototypeOf(this, TeoError.prototype)
    }

    get name() {
        return "TeoError"
    }
}

class GroupDelegate {
    constructor(path = []) {
        this._headers = undefined
        this._path = path
        let that = this
        return new Proxy(this, {
            get(target, name, receiver) {
                if (name === '$headers') {
                    return (headers) => {
                        let retval = new Teo()
                        retval._headers = headers
                        retval._path = that._path
                        return retval
                    }
                } else {
                    let path = that._path.slice()
                    path.push(name)
                    if (groupDelegateMap.includes(path.join("."))) {
                        return new GroupDelegate(path)
                    } else {
                        path.pop()
                        path.push(name[0].toUpperCase() + name.slice(1))
                        if (groupDelegateMap.includes(path.join("."))) {
                            return new GroupDelegate(path)
                        } else {
                            path.pop()
                            path.push(name)
                            let settings = customHandlerMap[path.join(".")]
                            if (!settings) {
                                return function(body, headers = undefined) {
                                    let newHeaders = buildHeaders(this._headers, headers)
                                    return request("POST", path.join("/"), body, newHeaders)
                                }
                            } else {
                                if (settings.pathArguments) {
                                    if (settings.method === 'GET' || settings.method === 'DELETE') {
                                        return function(pathArguments, headers = undefined, queryString = undefined) {
                                            let path = replacePathArguments(settings.path, pathArguments)
                                            let [newHeaders, newQueryString] = buildHeadersAndQueryString(this._headers, headers, queryString)
                                            return request(settings.method, path, undefined, newHeaders, newQueryString)
                                        }
                                    } else {
                                        return function(pathArguments, body, headers = undefined, queryString = undefined) {
                                            let path = replacePathArguments(settings.path, pathArguments)
                                            let [newHeaders, newQueryString] = buildHeadersAndQueryString(this._headers, headers, queryString)
                                            return request(settings.method, path, body, newHeaders, newQueryString)
                                        }
                                    }
                                } else {
                                    if (settings.method === 'GET' || settings.method === 'DELETE') {
                                        return function(headers = undefined, queryString = undefined) {
                                            let [newHeaders, newQueryString] = buildHeadersAndQueryString(this._headers, headers, queryString)
                                            return request(settings.method, settings.path, undefined, newHeaders, newQueryString)
                                        }
                                    } else {
                                        return function(body, headers = undefined, queryString = undefined) {
                                            let [newHeaders, newQueryString] = buildHeadersAndQueryString(this._headers, headers, queryString)
                                            return request(settings.method, settings.path, body, newHeaders, newQueryString)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        })
    }
}

const Teo = GroupDelegate
const teo = new Teo()
export { TeoError, Teo, teo }