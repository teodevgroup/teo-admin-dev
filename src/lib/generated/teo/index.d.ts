import Decimal from "decimal.js"

export type ExistKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

type HasSelect = {
    select: any
}

type HasInclude = {
    include: any
}

export type CheckSelectInclude<T, S, U> = T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

export type SelectSubset<T, U> = U extends HasSelect
    ? {
        [K in ExistKeys<U['select']>]: K extends keyof T ? T[K] : never
    }
    : T

export type Enumerable<T> = T | Array<T>

export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
}

export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
} : never

type Teo__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Teo__Pick<T, MaybeTupleToUnion<K>>

export type Boolean = True | False

export type True = 1

export type False = 0

export type Not<B extends Boolean> = {
  0: 1
  1: 0
}[B]

type NoExpand<T> = T extends unknown ? T : never;

type Key = string | number | symbol;
type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];

export type IntersectOf<U extends Union> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};

type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;

export type ComputeRaw<A extends any> = A extends Function ? A : {
  [K in keyof A]: A[K];
} & {};

export type OptionalFlat<O> = {
  [K in keyof O]?: O[K];
} & {};

type _Record<K extends keyof any, T> = {
  [P in K]: T;
};

type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
  ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
    | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
  : never>;

type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

export type Strict<U extends object> = ComputeRaw<_Strict<U>>;

export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

export type Union = any

export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
  ? 0 // anything `never` is false
  : A1 extends A2
  ? 1
  : 0

export type Has<U extends Union, U1 extends Union> = Not<
  Extends<Exclude<U1, U>, U1>
>

export type Or<B1 extends Boolean, B2 extends Boolean> = {
  0: {
    0: 0
    1: 1
  }
  1: {
    0: 1
    1: 1
  }
}[B1][B2]

export type Keys<U extends Union> = U extends unknown ? keyof U : never

type Cast<A, B> = A extends B ? A : B;

type IsObject<T extends any> = T extends Array<any>
? False
: T extends Date
? False
: T extends Uint8Array
? False
: T extends object
? True
: False

type FieldPaths<
  T,
  U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
> = IsObject<T> extends True ? U : T

type GetHavingFields<T> = {
  [K in keyof T]: Or<
    Or<Extends<'OR', K>, Extends<'AND', K>>,
    Extends<'NOT', K>
  > extends True
    ? // infer is only needed to not hit TS limit
      // based on the brilliant idea of Pierre-Antoine Mills
      // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
      T[K] extends infer TK
      ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
      : never
    : {} extends FieldPaths<T[K]>
    ? never
    : K
}[keyof T]

export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

export type SubsetIntersection<T, U, K> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} & K

type _TupleToUnion<T> = T extends (infer E)[] ? E : never
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

export declare class TeoError extends Error {
    type: string

    fields: {[key: string]: string} | null

    constructor(responseError: std.ResponseError)

    get name(): string
}

/**
 * **Admin scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type AdminScalarFields = "email" | "id" | "password" | "phoneNo"

/**
 * **Admin serializable scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type AdminSerializableScalarFields = "email" | "id" | "phoneNo"

/**
 * **Admin relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type AdminRelations = undefined

/**
 * **Admin direct relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type AdminDirectRelations = undefined

/**
 * **Admin indirect relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type AdminIndirectRelations = undefined

/**
 * **Category scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type CategoryScalarFields = "id" | "name"

/**
 * **Category serializable scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type CategorySerializableScalarFields = "id" | "name"

/**
 * **Category relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type CategoryRelations = "products"

/**
 * **Category direct relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type CategoryDirectRelations = "products"

/**
 * **Category indirect relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type CategoryIndirectRelations = undefined

/**
 * **Item scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type ItemScalarFields = "id" | "name"

/**
 * **Item serializable scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type ItemSerializableScalarFields = "id" | "name"

/**
 * **Item relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type ItemRelations = undefined

/**
 * **Item direct relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type ItemDirectRelations = undefined

/**
 * **Item indirect relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type ItemIndirectRelations = undefined

/**
 * **Product scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type ProductScalarFields = "categoryId" | "id" | "name" | "stock"

/**
 * **Product serializable scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type ProductSerializableScalarFields = "categoryId" | "id" | "name" | "stock"

/**
 * **Product relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type ProductRelations = "category"

/**
 * **Product direct relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type ProductDirectRelations = "category"

/**
 * **Product indirect relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type ProductIndirectRelations = undefined

/**
 * **Record scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type RecordScalarFields = "bool" | "date" | "dateTime" | "decimal" | "float" | "id" | "int" | "string"

/**
 * **Record serializable scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type RecordSerializableScalarFields = "bool" | "date" | "dateTime" | "decimal" | "float" | "id" | "int" | "string"

/**
 * **Record relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type RecordRelations = undefined

/**
 * **Record direct relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type RecordDirectRelations = undefined

/**
 * **Record indirect relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type RecordIndirectRelations = undefined

/**
 * **Root scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type RootScalarFields = "email" | "id" | "password"

/**
 * **Root serializable scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type RootSerializableScalarFields = "email" | "id"

/**
 * **Root relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type RootRelations = undefined

/**
 * **Root direct relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type RootDirectRelations = undefined

/**
 * **Root indirect relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type RootIndirectRelations = undefined

/// ## Admin scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum AdminScalarFieldsEnumType {

    /// ### Email
    ///
    /// This synthesized enum member doesn't have a description.
    email = "email",

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Password
    ///
    /// This synthesized enum member doesn't have a description.
    password = "password",

    /// ### Phone no
    ///
    /// This synthesized enum member doesn't have a description.
    phoneNo = "phoneNo",
}

/// ## Admin serializable scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum AdminSerializableScalarFieldsEnumType {

    /// ### Email
    ///
    /// This synthesized enum member doesn't have a description.
    email = "email",

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Phone no
    ///
    /// This synthesized enum member doesn't have a description.
    phoneNo = "phoneNo",
}

/// ## Admin relations
///
/// This synthesized enum doesn't have a description.
export const enum AdminRelationsEnumType {
}

/// ## Admin direct relations
///
/// This synthesized enum doesn't have a description.
export const enum AdminDirectRelationsEnumType {
}

/// ## Admin indirect relations
///
/// This synthesized enum doesn't have a description.
export const enum AdminIndirectRelationsEnumType {
}

/// ## Category scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum CategoryScalarFieldsEnumType {

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Name
    ///
    /// This synthesized enum member doesn't have a description.
    name = "name",
}

/// ## Category serializable scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum CategorySerializableScalarFieldsEnumType {

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Name
    ///
    /// This synthesized enum member doesn't have a description.
    name = "name",
}

/// ## Category relations
///
/// This synthesized enum doesn't have a description.
export const enum CategoryRelationsEnumType {

    /// ### Products
    ///
    /// This synthesized enum member doesn't have a description.
    products = "products",
}

/// ## Category direct relations
///
/// This synthesized enum doesn't have a description.
export const enum CategoryDirectRelationsEnumType {

    /// ### Products
    ///
    /// This synthesized enum member doesn't have a description.
    products = "products",
}

/// ## Category indirect relations
///
/// This synthesized enum doesn't have a description.
export const enum CategoryIndirectRelationsEnumType {
}

/// ## Item scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum ItemScalarFieldsEnumType {

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Name
    ///
    /// This synthesized enum member doesn't have a description.
    name = "name",
}

/// ## Item serializable scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum ItemSerializableScalarFieldsEnumType {

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Name
    ///
    /// This synthesized enum member doesn't have a description.
    name = "name",
}

/// ## Item relations
///
/// This synthesized enum doesn't have a description.
export const enum ItemRelationsEnumType {
}

/// ## Item direct relations
///
/// This synthesized enum doesn't have a description.
export const enum ItemDirectRelationsEnumType {
}

/// ## Item indirect relations
///
/// This synthesized enum doesn't have a description.
export const enum ItemIndirectRelationsEnumType {
}

/// ## Product scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum ProductScalarFieldsEnumType {

    /// ### Category id
    ///
    /// This synthesized enum member doesn't have a description.
    categoryId = "categoryId",

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Name
    ///
    /// This synthesized enum member doesn't have a description.
    name = "name",

    /// ### Stock
    ///
    /// This synthesized enum member doesn't have a description.
    stock = "stock",
}

/// ## Product serializable scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum ProductSerializableScalarFieldsEnumType {

    /// ### Category id
    ///
    /// This synthesized enum member doesn't have a description.
    categoryId = "categoryId",

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Name
    ///
    /// This synthesized enum member doesn't have a description.
    name = "name",

    /// ### Stock
    ///
    /// This synthesized enum member doesn't have a description.
    stock = "stock",
}

/// ## Product relations
///
/// This synthesized enum doesn't have a description.
export const enum ProductRelationsEnumType {

    /// ### Category
    ///
    /// This synthesized enum member doesn't have a description.
    category = "category",
}

/// ## Product direct relations
///
/// This synthesized enum doesn't have a description.
export const enum ProductDirectRelationsEnumType {

    /// ### Category
    ///
    /// This synthesized enum member doesn't have a description.
    category = "category",
}

/// ## Product indirect relations
///
/// This synthesized enum doesn't have a description.
export const enum ProductIndirectRelationsEnumType {
}

/// ## Record scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum RecordScalarFieldsEnumType {

    /// ### Bool
    ///
    /// This synthesized enum member doesn't have a description.
    bool = "bool",

    /// ### Date
    ///
    /// This synthesized enum member doesn't have a description.
    date = "date",

    /// ### Date time
    ///
    /// This synthesized enum member doesn't have a description.
    dateTime = "dateTime",

    /// ### Decimal
    ///
    /// This synthesized enum member doesn't have a description.
    decimal = "decimal",

    /// ### Float
    ///
    /// This synthesized enum member doesn't have a description.
    float = "float",

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Int
    ///
    /// This synthesized enum member doesn't have a description.
    int = "int",

    /// ### String
    ///
    /// This synthesized enum member doesn't have a description.
    string = "string",
}

/// ## Record serializable scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum RecordSerializableScalarFieldsEnumType {

    /// ### Bool
    ///
    /// This synthesized enum member doesn't have a description.
    bool = "bool",

    /// ### Date
    ///
    /// This synthesized enum member doesn't have a description.
    date = "date",

    /// ### Date time
    ///
    /// This synthesized enum member doesn't have a description.
    dateTime = "dateTime",

    /// ### Decimal
    ///
    /// This synthesized enum member doesn't have a description.
    decimal = "decimal",

    /// ### Float
    ///
    /// This synthesized enum member doesn't have a description.
    float = "float",

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Int
    ///
    /// This synthesized enum member doesn't have a description.
    int = "int",

    /// ### String
    ///
    /// This synthesized enum member doesn't have a description.
    string = "string",
}

/// ## Record relations
///
/// This synthesized enum doesn't have a description.
export const enum RecordRelationsEnumType {
}

/// ## Record direct relations
///
/// This synthesized enum doesn't have a description.
export const enum RecordDirectRelationsEnumType {
}

/// ## Record indirect relations
///
/// This synthesized enum doesn't have a description.
export const enum RecordIndirectRelationsEnumType {
}

/// ## Root scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum RootScalarFieldsEnumType {

    /// ### Email
    ///
    /// This synthesized enum member doesn't have a description.
    email = "email",

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",

    /// ### Password
    ///
    /// This synthesized enum member doesn't have a description.
    password = "password",
}

/// ## Root serializable scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum RootSerializableScalarFieldsEnumType {

    /// ### Email
    ///
    /// This synthesized enum member doesn't have a description.
    email = "email",

    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",
}

/// ## Root relations
///
/// This synthesized enum doesn't have a description.
export const enum RootRelationsEnumType {
}

/// ## Root direct relations
///
/// This synthesized enum doesn't have a description.
export const enum RootDirectRelationsEnumType {
}

/// ## Root indirect relations
///
/// This synthesized enum doesn't have a description.
export const enum RootIndirectRelationsEnumType {
}


/**
 * **Admin select**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminSelect = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: boolean
    
}


/**
 * **Admin include**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminInclude = {
    
}


/**
 * **Admin where input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminWhereInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: AdminWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: AdminWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: AdminWhereInput[]
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string | std.StringFilter
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.Filter<number>
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string | std.StringFilter
    
}


/**
 * **Admin where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminWhereUniqueInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string
    
}


/**
 * **Admin scalar where with aggregates input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminScalarWhereWithAggregatesInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: AdminWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: AdminWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: AdminWhereInput[]
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string | std.StringWithAggregatesFilter
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.IntNumberWithAggregatesFilter<number>
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string | std.StringWithAggregatesFilter
    
}


/**
 * **Admin relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminRelationFilter = {
    
    /**
     * **Is**
     *
     * This synthesized field doesn't have a description.
     */
     is?: AdminWhereInput
    
    /**
     * **Is Not**
     *
     * This synthesized field doesn't have a description.
     */
     isNot?: AdminWhereInput
    
}


/**
 * **Admin list relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminListRelationFilter = {
    
    /**
     * **Every**
     *
     * This synthesized field doesn't have a description.
     */
     every?: AdminWhereInput
    
    /**
     * **None**
     *
     * This synthesized field doesn't have a description.
     */
     none?: AdminWhereInput
    
    /**
     * **Some**
     *
     * This synthesized field doesn't have a description.
     */
     some?: AdminWhereInput
    
}


/**
 * **Admin order by input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminOrderByInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: std.Sort
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: std.Sort
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: std.Sort
    
}


/**
 * **Admin count aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCountAggregateInputType = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: boolean
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: boolean
    
}


/**
 * **Admin sum aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminSumAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Admin avg aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminAvgAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Admin min aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminMinAggregateInputType = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: boolean
    
}


/**
 * **Admin max aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminMaxAggregateInputType = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: boolean
    
}


/**
 * **Admin create input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCreateInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email: string
    
    /**
     * **Password**
     *
     * This synthesized field doesn't have a description.
     */
     password: string
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo: string
    
}


/**
 * **Admin update input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminUpdateInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Password**
     *
     * This synthesized field doesn't have a description.
     */
     password?: string
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string
    
}


/**
 * **Admin create nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCreateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: AdminWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: AdminConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: AdminCreateInput
    
}


/**
 * **Admin create nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCreateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<AdminWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<AdminConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<AdminCreateInput>
    
}


/**
 * **Admin update nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminUpdateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: AdminWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: AdminConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: AdminCreateInput
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: boolean
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: boolean
    
    /**
     * **Set**
     *
     * This synthesized field doesn't have a description.
     */
     set?: AdminWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: AdminUpdateWithWhereUniqueInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: AdminUpsertWithWhereUniqueInput
    
}


/**
 * **Admin update nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminUpdateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<AdminWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<AdminConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<AdminCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<AdminWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<AdminWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<AdminWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<AdminUpdateWithWhereUniqueInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<AdminUpdateManyWithWhereInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<AdminUpsertWithWhereUniqueInput>
    
}


/**
 * **Admin connect or create input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminConnectOrCreateInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: AdminCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereUniqueInput
    
}


/**
 * **Admin update with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminUpdateWithWhereUniqueInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: AdminUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereUniqueInput
    
}


/**
 * **Admin upsert with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminUpsertWithWhereUniqueInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: AdminCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: AdminUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereUniqueInput
    
}


/**
 * **Admin update many with where input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminUpdateManyWithWhereInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: AdminUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereInput
    
}


/**
 * **Admin**
 *
 * This synthesized interface doesn't have a description
 */
export type Admin = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo: string
    
}
export type AdminGetPayload<S extends boolean | null | undefined | AdminArgs, U = keyof S> = S extends true
    ? Admin
    : S extends undefined
        ? never
        : S extends AdminArgs | AdminFindManyArgs
            ? 'include' extends U
                ? SelectSubset<Admin, S> & {
                    [P in ExistKeys<S['include']>]:
                    never
                }
                : SelectSubset<Admin, S>
            : Admin

export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
    [P in keyof T & keyof AdminAggregateResult]: P extends '_count' | 'count'
  ? T[P] extends true
    ? number
    : GetScalarType<T[P], AdminAggregateResult[P]>
  : GetScalarType<T[P], AdminAggregateResult[P]>
}

export type GetAdminGroupByPayload<T extends AdminGroupByArgs> =
  Array<
    PickEnumerable<AdminGroupByResult, T['by']> &
      {
        [P in ((keyof T) & (keyof AdminGroupByResult))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AdminGroupByResult[P]>
          : GetScalarType<T[P], AdminGroupByResult[P]>
      }
    >


/**
 * **Admin count aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCountAggregateResult = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: number
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: number
    
}


/**
 * **Admin sum aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminSumAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Admin avg aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminAvgAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Admin min aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminMinAggregateResult = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string
    
}


/**
 * **Admin max aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminMaxAggregateResult = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string
    
}


/**
 * **Admin aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminAggregateResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: AdminAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: AdminCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: AdminMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: AdminMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: AdminSumAggregateResult
    
}


/**
 * **Admin group by result**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminGroupByResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: AdminAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: AdminCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: AdminMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: AdminMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: AdminSumAggregateResult
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string
    
}


/**
 * **Admin args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
}


/**
 * **Admin find many args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminFindManyArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: AdminWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: AdminSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<AdminOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: AdminWhereInput
    
}


/**
 * **Admin find first args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminFindFirstArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: AdminWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: AdminSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<AdminOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: AdminWhereInput
    
}


/**
 * **Admin find unique args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminFindUniqueArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereUniqueInput
    
}


/**
 * **Admin create args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCreateArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: AdminCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
}


/**
 * **Admin update args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminUpdateArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: AdminUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereUniqueInput
    
}


/**
 * **Admin upsert args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminUpsertArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: AdminCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: AdminUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereUniqueInput
    
}


/**
 * **Admin copy args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCopyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: AdminUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereUniqueInput
    
}


/**
 * **Admin delete args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminDeleteArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereUniqueInput
    
}


/**
 * **Admin create many args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCreateManyArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: Enumerable<AdminCreateInput>
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
}


/**
 * **Admin update many args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminUpdateManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: AdminUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereInput
    
}


/**
 * **Admin delete many args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminDeleteManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereInput
    
}


/**
 * **Admin copy many args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCopyManyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: AdminUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: AdminWhereInput
    
}


/**
 * **Admin count args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminCountArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: AdminWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: AdminSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<AdminOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminCountAggregateInputType
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: AdminWhereInput
    
}


/**
 * **Admin aggregate args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminAggregateArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: AdminAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: AdminCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: AdminMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: AdminMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: AdminSumAggregateInputType
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: AdminWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: AdminSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<AdminOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: AdminWhereInput
    
}


/**
 * **Admin group by args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminGroupByArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: AdminAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: AdminCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: AdminMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: AdminMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: AdminSumAggregateInputType
    
    /**
     * **By**
     *
     * This synthesized field doesn't have a description.
     */
     by: Enumerable<AdminSerializableScalarFields>
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: AdminWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: AdminSerializableScalarFields
    
    /**
     * **Having**
     *
     * This synthesized field doesn't have a description.
     */
     having?: AdminScalarWhereWithAggregatesInput
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<AdminOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: AdminWhereInput
    
}


/**
 * **Admin scalar update input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminScalarUpdateInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Password**
     *
     * This synthesized field doesn't have a description.
     */
     password?: string
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string
    
}


/**
 * **Admin sign in checker ids**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminSignInCheckerIds = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string
    
}


/**
 * **Admin sign in checker companions**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminSignInCheckerCompanions = {
    
}


/**
 * **Admin sign in input**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminSignInInput = {
    
    /**
     * **Credentials**
     *
     * This synthesized field doesn't have a description.
     */
     credentials: AdminSignInArgs
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: AdminInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: AdminSelect
    
}


/**
 * **Admin sign in args**
 *
 * This synthesized interface doesn't have a description
 */
export type AdminSignInArgs = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Password**
     *
     * This synthesized field doesn't have a description.
     */
     password?: string
    
    /**
     * **Phone No**
     *
     * This synthesized field doesn't have a description.
     */
     phoneNo?: string
    
}


/**
 * **Category select**
 *
 * This synthesized interface doesn't have a description
 */
export type CategorySelect = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
}


/**
 * **Category include**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryInclude = {
    
    /**
     * **Products**
     *
     * This synthesized field doesn't have a description.
     */
     products?: ProductFindManyArgs | boolean
    
}


/**
 * **Category where input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryWhereInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: CategoryWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: CategoryWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: CategoryWhereInput[]
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.Filter<number>
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string | std.StringFilter
    
    /**
     * **Products**
     *
     * This synthesized field doesn't have a description.
     */
     products?: ProductListRelationFilter
    
}


/**
 * **Category where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryWhereUniqueInput = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
}


/**
 * **Category scalar where with aggregates input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryScalarWhereWithAggregatesInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: CategoryWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: CategoryWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: CategoryWhereInput[]
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.IntNumberWithAggregatesFilter<number>
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string | std.StringWithAggregatesFilter
    
}


/**
 * **Category relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryRelationFilter = {
    
    /**
     * **Is**
     *
     * This synthesized field doesn't have a description.
     */
     is?: CategoryWhereInput
    
    /**
     * **Is Not**
     *
     * This synthesized field doesn't have a description.
     */
     isNot?: CategoryWhereInput
    
}


/**
 * **Category list relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryListRelationFilter = {
    
    /**
     * **Every**
     *
     * This synthesized field doesn't have a description.
     */
     every?: CategoryWhereInput
    
    /**
     * **None**
     *
     * This synthesized field doesn't have a description.
     */
     none?: CategoryWhereInput
    
    /**
     * **Some**
     *
     * This synthesized field doesn't have a description.
     */
     some?: CategoryWhereInput
    
}


/**
 * **Category order by input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryOrderByInput = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: std.Sort
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: std.Sort
    
}


/**
 * **Category count aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCountAggregateInputType = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
}


/**
 * **Category sum aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type CategorySumAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Category avg aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryAvgAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Category min aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryMinAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
}


/**
 * **Category max aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryMaxAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
}


/**
 * **Category create input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCreateInput = {
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name: string
    
    /**
     * **Products**
     *
     * This synthesized field doesn't have a description.
     */
     products?: ProductCreateNestedManyWithoutCategoryInput
    
}


/**
 * **Category create without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCreateWithoutProductsInput = {
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name: string
    
}


/**
 * **Category update input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateInput = {
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
    /**
     * **Products**
     *
     * This synthesized field doesn't have a description.
     */
     products?: ProductUpdateNestedManyWithoutCategoryInput
    
}


/**
 * **Category update without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateWithoutProductsInput = {
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Category create nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCreateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: CategoryWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: CategoryConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: CategoryCreateInput
    
}


/**
 * **Category create nested one without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCreateNestedOneWithoutProductsInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: CategoryWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: CategoryConnectOrCreateWithoutProductsInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: CategoryCreateInput
    
}


/**
 * **Category create nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCreateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<CategoryWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<CategoryConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<CategoryCreateInput>
    
}


/**
 * **Category create nested many without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCreateNestedManyWithoutProductsInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<CategoryWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<CategoryConnectOrCreateWithoutProductsInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<CategoryCreateInput>
    
}


/**
 * **Category update nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: CategoryWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: CategoryConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: CategoryCreateInput
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: boolean
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: boolean
    
    /**
     * **Set**
     *
     * This synthesized field doesn't have a description.
     */
     set?: CategoryWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: CategoryUpdateWithWhereUniqueInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: CategoryUpsertWithWhereUniqueInput
    
}


/**
 * **Category update nested one without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateNestedOneWithoutProductsInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: CategoryWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: CategoryConnectOrCreateWithoutProductsInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: CategoryCreateInput
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: boolean
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: boolean
    
    /**
     * **Set**
     *
     * This synthesized field doesn't have a description.
     */
     set?: CategoryWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: CategoryUpdateWithWhereUniqueWithoutProductsInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: CategoryUpsertWithWhereUniqueWithoutProductsInput
    
}


/**
 * **Category update nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<CategoryWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<CategoryConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<CategoryCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<CategoryWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<CategoryWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<CategoryWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<CategoryUpdateWithWhereUniqueInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<CategoryUpdateManyWithWhereInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<CategoryUpsertWithWhereUniqueInput>
    
}


/**
 * **Category update nested many without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateNestedManyWithoutProductsInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<CategoryWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<CategoryConnectOrCreateWithoutProductsInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<CategoryCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<CategoryWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<CategoryWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<CategoryWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutProductsInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutProductsInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutProductsInput>
    
}


/**
 * **Category connect or create input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryConnectOrCreateInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: CategoryCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category connect or create without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryConnectOrCreateWithoutProductsInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: CategoryCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category update with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateWithWhereUniqueInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: CategoryUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category update with where unique without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateWithWhereUniqueWithoutProductsInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: CategoryUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category upsert with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpsertWithWhereUniqueInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: CategoryCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: CategoryUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category upsert with where unique without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpsertWithWhereUniqueWithoutProductsInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: CategoryCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: CategoryUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category update many with where input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateManyWithWhereInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: CategoryUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereInput
    
}


/**
 * **Category update many with where without products input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateManyWithWhereWithoutProductsInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: CategoryUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereInput
    
}


/**
 * **Category**
 *
 * This synthesized interface doesn't have a description
 */
export type Category = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name: string
    
    /**
     * **Products**
     *
     * This synthesized field doesn't have a description.
     */
     products: Product[]
    
}
export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs, U = keyof S> = S extends true
    ? Category
    : S extends undefined
        ? never
        : S extends CategoryArgs | CategoryFindManyArgs
            ? 'include' extends U
                ? SelectSubset<Category, S> & {
                    [P in ExistKeys<S['include']>]:
                        P extends 'products' ? ProductGetPayload<S['include'][P]>[] :
                    never
                }
                : SelectSubset<Category, S>
            : Category

export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof CategoryAggregateResult]: P extends '_count' | 'count'
  ? T[P] extends true
    ? number
    : GetScalarType<T[P], CategoryAggregateResult[P]>
  : GetScalarType<T[P], CategoryAggregateResult[P]>
}

export type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
  Array<
    PickEnumerable<CategoryGroupByResult, T['by']> &
      {
        [P in ((keyof T) & (keyof CategoryGroupByResult))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CategoryGroupByResult[P]>
          : GetScalarType<T[P], CategoryGroupByResult[P]>
      }
    >


/**
 * **Category count aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCountAggregateResult = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: number
    
}


/**
 * **Category sum aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type CategorySumAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Category avg aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryAvgAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Category min aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryMinAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Category max aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryMaxAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Category aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryAggregateResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: CategoryAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: CategoryCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: CategoryMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: CategoryMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: CategorySumAggregateResult
    
}


/**
 * **Category group by result**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryGroupByResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: CategoryAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: CategoryCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: CategoryMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: CategoryMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: CategorySumAggregateResult
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Category args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
}


/**
 * **Category find many args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryFindManyArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: CategoryWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: CategorySerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<CategoryOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: CategoryWhereInput
    
}


/**
 * **Category find first args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryFindFirstArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: CategoryWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: CategorySerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<CategoryOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: CategoryWhereInput
    
}


/**
 * **Category find unique args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryFindUniqueArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category create args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCreateArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: CategoryCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
}


/**
 * **Category update args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: CategoryUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category upsert args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpsertArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: CategoryCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: CategoryUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category copy args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCopyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: CategoryUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category delete args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryDeleteArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereUniqueInput
    
}


/**
 * **Category create many args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCreateManyArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: Enumerable<CategoryCreateInput>
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
}


/**
 * **Category update many args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryUpdateManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: CategoryUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereInput
    
}


/**
 * **Category delete many args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryDeleteManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereInput
    
}


/**
 * **Category copy many args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCopyManyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: CategoryUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: CategoryWhereInput
    
}


/**
 * **Category count args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryCountArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: CategoryWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: CategorySerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<CategoryOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategoryCountAggregateInputType
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: CategoryWhereInput
    
}


/**
 * **Category aggregate args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryAggregateArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: CategoryAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: CategoryCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: CategoryMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: CategoryMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: CategorySumAggregateInputType
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: CategoryWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: CategorySerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<CategoryOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: CategoryWhereInput
    
}


/**
 * **Category group by args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryGroupByArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: CategoryAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: CategoryCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: CategoryMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: CategoryMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: CategorySumAggregateInputType
    
    /**
     * **By**
     *
     * This synthesized field doesn't have a description.
     */
     by: Enumerable<CategorySerializableScalarFields>
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: CategoryWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: CategorySerializableScalarFields
    
    /**
     * **Having**
     *
     * This synthesized field doesn't have a description.
     */
     having?: CategoryScalarWhereWithAggregatesInput
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<CategoryOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: CategoryWhereInput
    
}


/**
 * **Category scalar update input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategoryScalarUpdateInput = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Category sign in checker ids**
 *
 * This synthesized interface doesn't have a description
 */
export type CategorySignInCheckerIds = {
    
}


/**
 * **Category sign in checker companions**
 *
 * This synthesized interface doesn't have a description
 */
export type CategorySignInCheckerCompanions = {
    
}


/**
 * **Category sign in input**
 *
 * This synthesized interface doesn't have a description
 */
export type CategorySignInInput = {
    
    /**
     * **Credentials**
     *
     * This synthesized field doesn't have a description.
     */
     credentials: CategorySignInArgs
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: CategoryInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: CategorySelect
    
}


/**
 * **Category sign in args**
 *
 * This synthesized interface doesn't have a description
 */
export type CategorySignInArgs = {
    
}


/**
 * **Item select**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemSelect = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
}


/**
 * **Item include**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemInclude = {
    
}


/**
 * **Item where input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemWhereInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: ItemWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: ItemWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: ItemWhereInput[]
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.Filter<number>
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string | std.StringFilter
    
}


/**
 * **Item where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemWhereUniqueInput = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
}


/**
 * **Item scalar where with aggregates input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemScalarWhereWithAggregatesInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: ItemWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: ItemWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: ItemWhereInput[]
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.IntNumberWithAggregatesFilter<number>
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string | std.StringWithAggregatesFilter
    
}


/**
 * **Item relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemRelationFilter = {
    
    /**
     * **Is**
     *
     * This synthesized field doesn't have a description.
     */
     is?: ItemWhereInput
    
    /**
     * **Is Not**
     *
     * This synthesized field doesn't have a description.
     */
     isNot?: ItemWhereInput
    
}


/**
 * **Item list relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemListRelationFilter = {
    
    /**
     * **Every**
     *
     * This synthesized field doesn't have a description.
     */
     every?: ItemWhereInput
    
    /**
     * **None**
     *
     * This synthesized field doesn't have a description.
     */
     none?: ItemWhereInput
    
    /**
     * **Some**
     *
     * This synthesized field doesn't have a description.
     */
     some?: ItemWhereInput
    
}


/**
 * **Item order by input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemOrderByInput = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: std.Sort
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: std.Sort
    
}


/**
 * **Item count aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCountAggregateInputType = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
}


/**
 * **Item sum aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemSumAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Item avg aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemAvgAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Item min aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemMinAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
}


/**
 * **Item max aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemMaxAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
}


/**
 * **Item create input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCreateInput = {
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name: string
    
}


/**
 * **Item update input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemUpdateInput = {
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Item create nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCreateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: ItemWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: ItemConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: ItemCreateInput
    
}


/**
 * **Item create nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCreateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<ItemWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<ItemConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<ItemCreateInput>
    
}


/**
 * **Item update nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemUpdateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: ItemWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: ItemConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: ItemCreateInput
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: boolean
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: boolean
    
    /**
     * **Set**
     *
     * This synthesized field doesn't have a description.
     */
     set?: ItemWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: ItemUpdateWithWhereUniqueInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: ItemUpsertWithWhereUniqueInput
    
}


/**
 * **Item update nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemUpdateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<ItemWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<ItemConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<ItemCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<ItemWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<ItemWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<ItemWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<ItemUpdateWithWhereUniqueInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<ItemUpdateManyWithWhereInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<ItemUpsertWithWhereUniqueInput>
    
}


/**
 * **Item connect or create input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemConnectOrCreateInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ItemCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereUniqueInput
    
}


/**
 * **Item update with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemUpdateWithWhereUniqueInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ItemUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereUniqueInput
    
}


/**
 * **Item upsert with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemUpsertWithWhereUniqueInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ItemCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ItemUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereUniqueInput
    
}


/**
 * **Item update many with where input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemUpdateManyWithWhereInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ItemUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereInput
    
}


/**
 * **Item**
 *
 * This synthesized interface doesn't have a description
 */
export type Item = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name: string
    
}
export type ItemGetPayload<S extends boolean | null | undefined | ItemArgs, U = keyof S> = S extends true
    ? Item
    : S extends undefined
        ? never
        : S extends ItemArgs | ItemFindManyArgs
            ? 'include' extends U
                ? SelectSubset<Item, S> & {
                    [P in ExistKeys<S['include']>]:
                    never
                }
                : SelectSubset<Item, S>
            : Item

export type GetItemAggregateType<T extends ItemAggregateArgs> = {
    [P in keyof T & keyof ItemAggregateResult]: P extends '_count' | 'count'
  ? T[P] extends true
    ? number
    : GetScalarType<T[P], ItemAggregateResult[P]>
  : GetScalarType<T[P], ItemAggregateResult[P]>
}

export type GetItemGroupByPayload<T extends ItemGroupByArgs> =
  Array<
    PickEnumerable<ItemGroupByResult, T['by']> &
      {
        [P in ((keyof T) & (keyof ItemGroupByResult))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ItemGroupByResult[P]>
          : GetScalarType<T[P], ItemGroupByResult[P]>
      }
    >


/**
 * **Item count aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCountAggregateResult = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: number
    
}


/**
 * **Item sum aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemSumAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Item avg aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemAvgAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Item min aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemMinAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Item max aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemMaxAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Item aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemAggregateResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ItemAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ItemCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ItemMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ItemMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ItemSumAggregateResult
    
}


/**
 * **Item group by result**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemGroupByResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ItemAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ItemCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ItemMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ItemMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ItemSumAggregateResult
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Item args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
}


/**
 * **Item find many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemFindManyArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ItemWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ItemSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ItemOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ItemWhereInput
    
}


/**
 * **Item find first args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemFindFirstArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ItemWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ItemSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ItemOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ItemWhereInput
    
}


/**
 * **Item find unique args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemFindUniqueArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereUniqueInput
    
}


/**
 * **Item create args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCreateArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ItemCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
}


/**
 * **Item update args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemUpdateArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ItemUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereUniqueInput
    
}


/**
 * **Item upsert args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemUpsertArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ItemCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ItemUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereUniqueInput
    
}


/**
 * **Item copy args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCopyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: ItemUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereUniqueInput
    
}


/**
 * **Item delete args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemDeleteArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereUniqueInput
    
}


/**
 * **Item create many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCreateManyArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: Enumerable<ItemCreateInput>
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
}


/**
 * **Item update many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemUpdateManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ItemUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereInput
    
}


/**
 * **Item delete many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemDeleteManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereInput
    
}


/**
 * **Item copy many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCopyManyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: ItemUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ItemWhereInput
    
}


/**
 * **Item count args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemCountArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ItemWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ItemSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ItemOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemCountAggregateInputType
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ItemWhereInput
    
}


/**
 * **Item aggregate args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemAggregateArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ItemAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ItemCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ItemMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ItemMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ItemSumAggregateInputType
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ItemWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ItemSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ItemOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ItemWhereInput
    
}


/**
 * **Item group by args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemGroupByArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ItemAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ItemCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ItemMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ItemMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ItemSumAggregateInputType
    
    /**
     * **By**
     *
     * This synthesized field doesn't have a description.
     */
     by: Enumerable<ItemSerializableScalarFields>
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ItemWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ItemSerializableScalarFields
    
    /**
     * **Having**
     *
     * This synthesized field doesn't have a description.
     */
     having?: ItemScalarWhereWithAggregatesInput
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ItemOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ItemWhereInput
    
}


/**
 * **Item scalar update input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemScalarUpdateInput = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
}


/**
 * **Item sign in checker ids**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemSignInCheckerIds = {
    
}


/**
 * **Item sign in checker companions**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemSignInCheckerCompanions = {
    
}


/**
 * **Item sign in input**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemSignInInput = {
    
    /**
     * **Credentials**
     *
     * This synthesized field doesn't have a description.
     */
     credentials: ItemSignInArgs
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ItemInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ItemSelect
    
}


/**
 * **Item sign in args**
 *
 * This synthesized interface doesn't have a description
 */
export type ItemSignInArgs = {
    
}


/**
 * **Product select**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductSelect = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: boolean
    
}


/**
 * **Product include**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductInclude = {
    
    /**
     * **Category**
     *
     * This synthesized field doesn't have a description.
     */
     category?: CategoryArgs | boolean
    
}


/**
 * **Product where input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductWhereInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: ProductWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: ProductWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: ProductWhereInput[]
    
    /**
     * **Category**
     *
     * This synthesized field doesn't have a description.
     */
     category?: CategoryRelationFilter
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number | std.Filter<number>
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.Filter<number>
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string | std.StringFilter
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number | std.Filter<number>
    
}


/**
 * **Product where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductWhereUniqueInput = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
}


/**
 * **Product scalar where with aggregates input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductScalarWhereWithAggregatesInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: ProductWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: ProductWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: ProductWhereInput[]
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number | std.IntNumberWithAggregatesFilter<number>
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.IntNumberWithAggregatesFilter<number>
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string | std.StringWithAggregatesFilter
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number | std.IntNumberWithAggregatesFilter<number>
    
}


/**
 * **Product relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductRelationFilter = {
    
    /**
     * **Is**
     *
     * This synthesized field doesn't have a description.
     */
     is?: ProductWhereInput
    
    /**
     * **Is Not**
     *
     * This synthesized field doesn't have a description.
     */
     isNot?: ProductWhereInput
    
}


/**
 * **Product list relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductListRelationFilter = {
    
    /**
     * **Every**
     *
     * This synthesized field doesn't have a description.
     */
     every?: ProductWhereInput
    
    /**
     * **None**
     *
     * This synthesized field doesn't have a description.
     */
     none?: ProductWhereInput
    
    /**
     * **Some**
     *
     * This synthesized field doesn't have a description.
     */
     some?: ProductWhereInput
    
}


/**
 * **Product order by input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductOrderByInput = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: std.Sort
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: std.Sort
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: std.Sort
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: std.Sort
    
}


/**
 * **Product count aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCountAggregateInputType = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: boolean
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: boolean
    
}


/**
 * **Product sum aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductSumAggregateInputType = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: boolean
    
}


/**
 * **Product avg aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductAvgAggregateInputType = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: boolean
    
}


/**
 * **Product min aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductMinAggregateInputType = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: boolean
    
}


/**
 * **Product max aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductMaxAggregateInputType = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: boolean
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: boolean
    
}


/**
 * **Product create input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCreateInput = {
    
    /**
     * **Category**
     *
     * This synthesized field doesn't have a description.
     */
     category?: CategoryCreateNestedOneWithoutProductsInput
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name: string
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock: number
    
}


/**
 * **Product create without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCreateWithoutCategoryInput = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name: string
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock: number
    
}


/**
 * **Product update input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateInput = {
    
    /**
     * **Category**
     *
     * This synthesized field doesn't have a description.
     */
     category?: CategoryUpdateNestedOneWithoutProductsInput
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number
    
}


/**
 * **Product update without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateWithoutCategoryInput = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number
    
}


/**
 * **Product create nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCreateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: ProductWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: ProductConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: ProductCreateInput
    
}


/**
 * **Product create nested one without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCreateNestedOneWithoutCategoryInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: ProductWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: ProductConnectOrCreateWithoutCategoryInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: ProductCreateInput
    
}


/**
 * **Product create nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCreateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<ProductWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<ProductConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<ProductCreateInput>
    
}


/**
 * **Product create nested many without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCreateNestedManyWithoutCategoryInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<ProductWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<ProductConnectOrCreateWithoutCategoryInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<ProductCreateInput>
    
}


/**
 * **Product update nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: ProductWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: ProductConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: ProductCreateInput
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: boolean
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: boolean
    
    /**
     * **Set**
     *
     * This synthesized field doesn't have a description.
     */
     set?: ProductWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: ProductUpdateWithWhereUniqueInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: ProductUpsertWithWhereUniqueInput
    
}


/**
 * **Product update nested one without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateNestedOneWithoutCategoryInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: ProductWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: ProductConnectOrCreateWithoutCategoryInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: ProductCreateInput
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: boolean
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: boolean
    
    /**
     * **Set**
     *
     * This synthesized field doesn't have a description.
     */
     set?: ProductWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: ProductUpdateWithWhereUniqueWithoutCategoryInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput
    
}


/**
 * **Product update nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<ProductWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<ProductConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<ProductCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<ProductWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<ProductWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<ProductWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<ProductUpdateWithWhereUniqueInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<ProductUpdateManyWithWhereInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<ProductUpsertWithWhereUniqueInput>
    
}


/**
 * **Product update nested many without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateNestedManyWithoutCategoryInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<ProductWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<ProductConnectOrCreateWithoutCategoryInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<ProductCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<ProductWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<ProductWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<ProductWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    
}


/**
 * **Product connect or create input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductConnectOrCreateInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ProductCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product connect or create without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductConnectOrCreateWithoutCategoryInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ProductCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product update with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateWithWhereUniqueInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ProductUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product update with where unique without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ProductUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product upsert with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpsertWithWhereUniqueInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ProductCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ProductUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product upsert with where unique without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ProductCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ProductUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product update many with where input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateManyWithWhereInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ProductUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereInput
    
}


/**
 * **Product update many with where without category input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ProductUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereInput
    
}


/**
 * **Product**
 *
 * This synthesized interface doesn't have a description
 */
export type Product = {
    
    /**
     * **Category**
     *
     * This synthesized field doesn't have a description.
     */
     category: Category
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name: string
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock: number
    
}
export type ProductGetPayload<S extends boolean | null | undefined | ProductArgs, U = keyof S> = S extends true
    ? Product
    : S extends undefined
        ? never
        : S extends ProductArgs | ProductFindManyArgs
            ? 'include' extends U
                ? SelectSubset<Product, S> & {
                    [P in ExistKeys<S['include']>]:
                        P extends 'category' ? CategoryGetPayload<S['include'][P]> :
                    never
                }
                : SelectSubset<Product, S>
            : Product

export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof ProductAggregateResult]: P extends '_count' | 'count'
  ? T[P] extends true
    ? number
    : GetScalarType<T[P], ProductAggregateResult[P]>
  : GetScalarType<T[P], ProductAggregateResult[P]>
}

export type GetProductGroupByPayload<T extends ProductGroupByArgs> =
  Array<
    PickEnumerable<ProductGroupByResult, T['by']> &
      {
        [P in ((keyof T) & (keyof ProductGroupByResult))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProductGroupByResult[P]>
          : GetScalarType<T[P], ProductGroupByResult[P]>
      }
    >


/**
 * **Product count aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCountAggregateResult = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: number
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: number
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number
    
}


/**
 * **Product sum aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductSumAggregateResult = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number
    
}


/**
 * **Product avg aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductAvgAggregateResult = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number
    
}


/**
 * **Product min aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductMinAggregateResult = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number
    
}


/**
 * **Product max aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductMaxAggregateResult = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number
    
}


/**
 * **Product aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductAggregateResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ProductAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ProductCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ProductMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ProductMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ProductSumAggregateResult
    
}


/**
 * **Product group by result**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductGroupByResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ProductAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ProductCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ProductMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ProductMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ProductSumAggregateResult
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number
    
}


/**
 * **Product args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
}


/**
 * **Product find many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductFindManyArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ProductWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ProductSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ProductOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ProductWhereInput
    
}


/**
 * **Product find first args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductFindFirstArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ProductWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ProductSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ProductOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ProductWhereInput
    
}


/**
 * **Product find unique args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductFindUniqueArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product create args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCreateArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ProductCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
}


/**
 * **Product update args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ProductUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product upsert args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpsertArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ProductCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ProductUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product copy args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCopyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: ProductUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product delete args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductDeleteArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereUniqueInput
    
}


/**
 * **Product create many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCreateManyArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: Enumerable<ProductCreateInput>
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
}


/**
 * **Product update many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductUpdateManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ProductUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereInput
    
}


/**
 * **Product delete many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductDeleteManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereInput
    
}


/**
 * **Product copy many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCopyManyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: ProductUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ProductWhereInput
    
}


/**
 * **Product count args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductCountArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ProductWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ProductSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ProductOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductCountAggregateInputType
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ProductWhereInput
    
}


/**
 * **Product aggregate args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductAggregateArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ProductAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ProductCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ProductMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ProductMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ProductSumAggregateInputType
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ProductWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ProductSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ProductOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ProductWhereInput
    
}


/**
 * **Product group by args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductGroupByArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ProductAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ProductCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ProductMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ProductMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ProductSumAggregateInputType
    
    /**
     * **By**
     *
     * This synthesized field doesn't have a description.
     */
     by: Enumerable<ProductSerializableScalarFields>
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ProductWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ProductSerializableScalarFields
    
    /**
     * **Having**
     *
     * This synthesized field doesn't have a description.
     */
     having?: ProductScalarWhereWithAggregatesInput
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ProductOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ProductWhereInput
    
}


/**
 * **Product scalar update input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductScalarUpdateInput = {
    
    /**
     * **Category Id**
     *
     * This synthesized field doesn't have a description.
     */
     categoryId?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Name**
     *
     * This synthesized field doesn't have a description.
     */
     name?: string
    
    /**
     * **Stock**
     *
     * This synthesized field doesn't have a description.
     */
     stock?: number
    
}


/**
 * **Product sign in checker ids**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductSignInCheckerIds = {
    
}


/**
 * **Product sign in checker companions**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductSignInCheckerCompanions = {
    
}


/**
 * **Product sign in input**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductSignInInput = {
    
    /**
     * **Credentials**
     *
     * This synthesized field doesn't have a description.
     */
     credentials: ProductSignInArgs
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ProductInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ProductSelect
    
}


/**
 * **Product sign in args**
 *
 * This synthesized interface doesn't have a description
 */
export type ProductSignInArgs = {
    
}


/**
 * **Record select**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordSelect = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: boolean
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: boolean
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: boolean
    
}


/**
 * **Record include**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordInclude = {
    
}


/**
 * **Record where input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordWhereInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: RecordWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: RecordWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: RecordWhereInput[]
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean | std.BoolFilter
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: string | std.Filter<string>
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: Date | std.Filter<Date>
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: Decimal | std.Filter<Decimal>
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number | std.Filter<number>
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.Filter<number>
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number | std.Filter<number>
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string | std.StringFilter
    
}


/**
 * **Record where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordWhereUniqueInput = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
}


/**
 * **Record scalar where with aggregates input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordScalarWhereWithAggregatesInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: RecordWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: RecordWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: RecordWhereInput[]
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean | std.BoolWithAggregatesFilter
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: string | std.AggregatesFilter<string>
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: Date | std.AggregatesFilter<Date>
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: Decimal | std.DecimalWithAggregatesFilter<Decimal>
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number | std.FloatNumberWithAggregatesFilter<number>
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.IntNumberWithAggregatesFilter<number>
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number | std.IntNumberWithAggregatesFilter<number>
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string | std.StringWithAggregatesFilter
    
}


/**
 * **Record relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordRelationFilter = {
    
    /**
     * **Is**
     *
     * This synthesized field doesn't have a description.
     */
     is?: RecordWhereInput
    
    /**
     * **Is Not**
     *
     * This synthesized field doesn't have a description.
     */
     isNot?: RecordWhereInput
    
}


/**
 * **Record list relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordListRelationFilter = {
    
    /**
     * **Every**
     *
     * This synthesized field doesn't have a description.
     */
     every?: RecordWhereInput
    
    /**
     * **None**
     *
     * This synthesized field doesn't have a description.
     */
     none?: RecordWhereInput
    
    /**
     * **Some**
     *
     * This synthesized field doesn't have a description.
     */
     some?: RecordWhereInput
    
}


/**
 * **Record order by input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordOrderByInput = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: std.Sort
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: std.Sort
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: std.Sort
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: std.Sort
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: std.Sort
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: std.Sort
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: std.Sort
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: std.Sort
    
}


/**
 * **Record count aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCountAggregateInputType = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: boolean
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: boolean
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: boolean
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: boolean
    
}


/**
 * **Record sum aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordSumAggregateInputType = {
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
}


/**
 * **Record avg aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordAvgAggregateInputType = {
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
}


/**
 * **Record min aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordMinAggregateInputType = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: boolean
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: boolean
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: boolean
    
}


/**
 * **Record max aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordMaxAggregateInputType = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: boolean
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: boolean
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: boolean
    
}


/**
 * **Record create input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCreateInput = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date: string
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime: Date
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal: Decimal
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string: string
    
}


/**
 * **Record update input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordUpdateInput = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: string
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: Date
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: Decimal
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}


/**
 * **Record create nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCreateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: RecordWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: RecordConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: RecordCreateInput
    
}


/**
 * **Record create nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCreateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<RecordWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<RecordConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<RecordCreateInput>
    
}


/**
 * **Record update nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordUpdateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: RecordWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: RecordConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: RecordCreateInput
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: boolean
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: boolean
    
    /**
     * **Set**
     *
     * This synthesized field doesn't have a description.
     */
     set?: RecordWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: RecordUpdateWithWhereUniqueInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: RecordUpsertWithWhereUniqueInput
    
}


/**
 * **Record update nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordUpdateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<RecordWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<RecordConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<RecordCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<RecordWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<RecordWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<RecordWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<RecordUpdateWithWhereUniqueInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<RecordUpdateManyWithWhereInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<RecordUpsertWithWhereUniqueInput>
    
}


/**
 * **Record connect or create input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordConnectOrCreateInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: RecordCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereUniqueInput
    
}


/**
 * **Record update with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordUpdateWithWhereUniqueInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RecordUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereUniqueInput
    
}


/**
 * **Record upsert with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordUpsertWithWhereUniqueInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: RecordCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RecordUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereUniqueInput
    
}


/**
 * **Record update many with where input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordUpdateManyWithWhereInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RecordUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereInput
    
}


/**
 * **Record**
 *
 * This synthesized interface doesn't have a description
 */
export type Record = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date: string
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime: Date
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal: Decimal
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string: string
    
}
export type RecordGetPayload<S extends boolean | null | undefined | RecordArgs, U = keyof S> = S extends true
    ? Record
    : S extends undefined
        ? never
        : S extends RecordArgs | RecordFindManyArgs
            ? 'include' extends U
                ? SelectSubset<Record, S> & {
                    [P in ExistKeys<S['include']>]:
                    never
                }
                : SelectSubset<Record, S>
            : Record

export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
    [P in keyof T & keyof RecordAggregateResult]: P extends '_count' | 'count'
  ? T[P] extends true
    ? number
    : GetScalarType<T[P], RecordAggregateResult[P]>
  : GetScalarType<T[P], RecordAggregateResult[P]>
}

export type GetRecordGroupByPayload<T extends RecordGroupByArgs> =
  Array<
    PickEnumerable<RecordGroupByResult, T['by']> &
      {
        [P in ((keyof T) & (keyof RecordGroupByResult))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RecordGroupByResult[P]>
          : GetScalarType<T[P], RecordGroupByResult[P]>
      }
    >


/**
 * **Record count aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCountAggregateResult = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: number
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: number
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: number
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: number
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: number
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: number
    
}


/**
 * **Record sum aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordSumAggregateResult = {
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: Decimal
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
}


/**
 * **Record avg aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordAvgAggregateResult = {
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: Decimal
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
}


/**
 * **Record min aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordMinAggregateResult = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: string
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: Date
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: Decimal
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}


/**
 * **Record max aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordMaxAggregateResult = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: string
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: Date
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: Decimal
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}


/**
 * **Record aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordAggregateResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: RecordAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: RecordCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: RecordMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: RecordMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: RecordSumAggregateResult
    
}


/**
 * **Record group by result**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordGroupByResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: RecordAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: RecordCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: RecordMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: RecordMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: RecordSumAggregateResult
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: string
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: Date
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: Decimal
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}


/**
 * **Record args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
}


/**
 * **Record find many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordFindManyArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RecordWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RecordSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RecordOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RecordWhereInput
    
}


/**
 * **Record find first args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordFindFirstArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RecordWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RecordSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RecordOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RecordWhereInput
    
}


/**
 * **Record find unique args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordFindUniqueArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereUniqueInput
    
}


/**
 * **Record create args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCreateArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: RecordCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
}


/**
 * **Record update args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordUpdateArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RecordUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereUniqueInput
    
}


/**
 * **Record upsert args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordUpsertArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: RecordCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RecordUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereUniqueInput
    
}


/**
 * **Record copy args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCopyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: RecordUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereUniqueInput
    
}


/**
 * **Record delete args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordDeleteArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereUniqueInput
    
}


/**
 * **Record create many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCreateManyArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: Enumerable<RecordCreateInput>
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
}


/**
 * **Record update many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordUpdateManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RecordUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereInput
    
}


/**
 * **Record delete many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordDeleteManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereInput
    
}


/**
 * **Record copy many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCopyManyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: RecordUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RecordWhereInput
    
}


/**
 * **Record count args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordCountArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RecordWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RecordSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RecordOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordCountAggregateInputType
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RecordWhereInput
    
}


/**
 * **Record aggregate args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordAggregateArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: RecordAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: RecordCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: RecordMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: RecordMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: RecordSumAggregateInputType
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RecordWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RecordSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RecordOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RecordWhereInput
    
}


/**
 * **Record group by args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordGroupByArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: RecordAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: RecordCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: RecordMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: RecordMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: RecordSumAggregateInputType
    
    /**
     * **By**
     *
     * This synthesized field doesn't have a description.
     */
     by: Enumerable<RecordSerializableScalarFields>
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RecordWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RecordSerializableScalarFields
    
    /**
     * **Having**
     *
     * This synthesized field doesn't have a description.
     */
     having?: RecordScalarWhereWithAggregatesInput
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RecordOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RecordWhereInput
    
}


/**
 * **Record scalar update input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordScalarUpdateInput = {
    
    /**
     * **Bool**
     *
     * This synthesized field doesn't have a description.
     */
     bool?: boolean
    
    /**
     * **Date**
     *
     * This synthesized field doesn't have a description.
     */
     date?: string
    
    /**
     * **Date Time**
     *
     * This synthesized field doesn't have a description.
     */
     dateTime?: Date
    
    /**
     * **Decimal**
     *
     * This synthesized field doesn't have a description.
     */
     decimal?: Decimal
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}


/**
 * **Record sign in checker ids**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordSignInCheckerIds = {
    
}


/**
 * **Record sign in checker companions**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordSignInCheckerCompanions = {
    
}


/**
 * **Record sign in input**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordSignInInput = {
    
    /**
     * **Credentials**
     *
     * This synthesized field doesn't have a description.
     */
     credentials: RecordSignInArgs
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RecordInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RecordSelect
    
}


/**
 * **Record sign in args**
 *
 * This synthesized interface doesn't have a description
 */
export type RecordSignInArgs = {
    
}


/**
 * **Root select**
 *
 * This synthesized interface doesn't have a description
 */
export type RootSelect = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Root include**
 *
 * This synthesized interface doesn't have a description
 */
export type RootInclude = {
    
}


/**
 * **Root where input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootWhereInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: RootWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: RootWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: RootWhereInput[]
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string | std.StringFilter
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.Filter<number>
    
}


/**
 * **Root where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootWhereUniqueInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Root scalar where with aggregates input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootScalarWhereWithAggregatesInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: RootWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: RootWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: RootWhereInput[]
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string | std.StringWithAggregatesFilter
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.IntNumberWithAggregatesFilter<number>
    
}


/**
 * **Root relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type RootRelationFilter = {
    
    /**
     * **Is**
     *
     * This synthesized field doesn't have a description.
     */
     is?: RootWhereInput
    
    /**
     * **Is Not**
     *
     * This synthesized field doesn't have a description.
     */
     isNot?: RootWhereInput
    
}


/**
 * **Root list relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type RootListRelationFilter = {
    
    /**
     * **Every**
     *
     * This synthesized field doesn't have a description.
     */
     every?: RootWhereInput
    
    /**
     * **None**
     *
     * This synthesized field doesn't have a description.
     */
     none?: RootWhereInput
    
    /**
     * **Some**
     *
     * This synthesized field doesn't have a description.
     */
     some?: RootWhereInput
    
}


/**
 * **Root order by input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootOrderByInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: std.Sort
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: std.Sort
    
}


/**
 * **Root count aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCountAggregateInputType = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: boolean
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Root sum aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RootSumAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Root avg aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RootAvgAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Root min aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RootMinAggregateInputType = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Root max aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type RootMaxAggregateInputType = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **Root create input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCreateInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email: string
    
    /**
     * **Password**
     *
     * This synthesized field doesn't have a description.
     */
     password: string
    
}


/**
 * **Root update input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootUpdateInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Password**
     *
     * This synthesized field doesn't have a description.
     */
     password?: string
    
}


/**
 * **Root create nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCreateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: RootWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: RootConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: RootCreateInput
    
}


/**
 * **Root create nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCreateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<RootWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<RootConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<RootCreateInput>
    
}


/**
 * **Root update nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootUpdateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: RootWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: RootConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: RootCreateInput
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: boolean
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: boolean
    
    /**
     * **Set**
     *
     * This synthesized field doesn't have a description.
     */
     set?: RootWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: RootUpdateWithWhereUniqueInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: RootUpsertWithWhereUniqueInput
    
}


/**
 * **Root update nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootUpdateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<RootWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<RootConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<RootCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<RootWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<RootWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<RootWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<RootUpdateWithWhereUniqueInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<RootUpdateManyWithWhereInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<RootUpsertWithWhereUniqueInput>
    
}


/**
 * **Root connect or create input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootConnectOrCreateInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: RootCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereUniqueInput
    
}


/**
 * **Root update with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootUpdateWithWhereUniqueInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RootUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereUniqueInput
    
}


/**
 * **Root upsert with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootUpsertWithWhereUniqueInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: RootCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RootUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereUniqueInput
    
}


/**
 * **Root update many with where input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootUpdateManyWithWhereInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RootUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereInput
    
}


/**
 * **Root**
 *
 * This synthesized interface doesn't have a description
 */
export type Root = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
}
export type RootGetPayload<S extends boolean | null | undefined | RootArgs, U = keyof S> = S extends true
    ? Root
    : S extends undefined
        ? never
        : S extends RootArgs | RootFindManyArgs
            ? 'include' extends U
                ? SelectSubset<Root, S> & {
                    [P in ExistKeys<S['include']>]:
                    never
                }
                : SelectSubset<Root, S>
            : Root

export type GetRootAggregateType<T extends RootAggregateArgs> = {
    [P in keyof T & keyof RootAggregateResult]: P extends '_count' | 'count'
  ? T[P] extends true
    ? number
    : GetScalarType<T[P], RootAggregateResult[P]>
  : GetScalarType<T[P], RootAggregateResult[P]>
}

export type GetRootGroupByPayload<T extends RootGroupByArgs> =
  Array<
    PickEnumerable<RootGroupByResult, T['by']> &
      {
        [P in ((keyof T) & (keyof RootGroupByResult))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RootGroupByResult[P]>
          : GetScalarType<T[P], RootGroupByResult[P]>
      }
    >


/**
 * **Root count aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCountAggregateResult = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: number
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Root sum aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RootSumAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Root avg aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RootAvgAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Root min aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RootMinAggregateResult = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Root max aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RootMaxAggregateResult = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Root aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type RootAggregateResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: RootAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: RootCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: RootMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: RootMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: RootSumAggregateResult
    
}


/**
 * **Root group by result**
 *
 * This synthesized interface doesn't have a description
 */
export type RootGroupByResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: RootAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: RootCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: RootMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: RootMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: RootSumAggregateResult
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **Root args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
}


/**
 * **Root find many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootFindManyArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RootWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RootSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RootOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RootWhereInput
    
}


/**
 * **Root find first args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootFindFirstArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RootWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RootSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RootOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RootWhereInput
    
}


/**
 * **Root find unique args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootFindUniqueArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereUniqueInput
    
}


/**
 * **Root create args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCreateArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: RootCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
}


/**
 * **Root update args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootUpdateArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RootUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereUniqueInput
    
}


/**
 * **Root upsert args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootUpsertArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: RootCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RootUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereUniqueInput
    
}


/**
 * **Root copy args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCopyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: RootUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereUniqueInput
    
}


/**
 * **Root delete args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootDeleteArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereUniqueInput
    
}


/**
 * **Root create many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCreateManyArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: Enumerable<RootCreateInput>
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
}


/**
 * **Root update many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootUpdateManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: RootUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereInput
    
}


/**
 * **Root delete many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootDeleteManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereInput
    
}


/**
 * **Root copy many args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCopyManyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: RootUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: RootWhereInput
    
}


/**
 * **Root count args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootCountArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RootWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RootSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RootOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootCountAggregateInputType
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RootWhereInput
    
}


/**
 * **Root aggregate args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootAggregateArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: RootAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: RootCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: RootMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: RootMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: RootSumAggregateInputType
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RootWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RootSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RootOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RootWhereInput
    
}


/**
 * **Root group by args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootGroupByArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: RootAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: RootCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: RootMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: RootMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: RootSumAggregateInputType
    
    /**
     * **By**
     *
     * This synthesized field doesn't have a description.
     */
     by: Enumerable<RootSerializableScalarFields>
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: RootWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: RootSerializableScalarFields
    
    /**
     * **Having**
     *
     * This synthesized field doesn't have a description.
     */
     having?: RootScalarWhereWithAggregatesInput
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<RootOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: RootWhereInput
    
}


/**
 * **Root scalar update input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootScalarUpdateInput = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Password**
     *
     * This synthesized field doesn't have a description.
     */
     password?: string
    
}


/**
 * **Root sign in checker ids**
 *
 * This synthesized interface doesn't have a description
 */
export type RootSignInCheckerIds = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
}


/**
 * **Root sign in checker companions**
 *
 * This synthesized interface doesn't have a description
 */
export type RootSignInCheckerCompanions = {
    
}


/**
 * **Root sign in input**
 *
 * This synthesized interface doesn't have a description
 */
export type RootSignInInput = {
    
    /**
     * **Credentials**
     *
     * This synthesized field doesn't have a description.
     */
     credentials: RootSignInArgs
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: RootInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: RootSelect
    
}


/**
 * **Root sign in args**
 *
 * This synthesized interface doesn't have a description
 */
export type RootSignInArgs = {
    
    /**
     * **Email**
     *
     * This synthesized field doesn't have a description.
     */
     email?: string
    
    /**
     * **Password**
     *
     * This synthesized field doesn't have a description.
     */
     password?: string
    
}



export namespace std {


    /**
     * **Sort**
     *
     * @name Sort Order Represents the sort order
     */
    export type Sort = "asc" | "desc"

    /**
     * **String match mode**
     *
     * @name String Match Mode Whether the string query is case sensitive or not
     */
    export type StringMatchMode = "default" | "caseInsensitive"

    /// ## Sort
    ///
    /// @name Sort Order Represents the sort order
    export const enum SortEnumType {

        /// ### Asc
        ///
        /// This enum member doesn't have a description.
        asc = "asc",

        /// ### Desc
        ///
        /// This enum member doesn't have a description.
        desc = "desc",
    }

    /// ## String match mode
    ///
    /// @name String Match Mode Whether the string query is case sensitive or not
    export const enum StringMatchModeEnumType {

        /// ### Default
        ///
        /// This enum member doesn't have a description.
        default = "default",

        /// ### Case insensitive
        ///
        /// This enum member doesn't have a description.
        caseInsensitive = "caseInsensitive",
    }


    /**
     * **Empty**
     *
     * @name Empty The empty interface
     */
    export type Empty = {
        
    }


    /**
     * **Data**
     *
     * @name Data This interface is common for action output
     */
    export type Data<T> = {
        
        /**
         * **Data**
         *
         * This interface field doesn't have a description.
         */
         data: T
        
    }


    /**
     * **Data meta**
     *
     * @name Data and Meta This interface is common for action output with meta information
     */
    export type DataMeta<T, U> = {
        
        /**
         * **Data**
         *
         * This interface field doesn't have a description.
         */
         data: T
        
        /**
         * **Meta**
         *
         * This interface field doesn't have a description.
         */
         meta: U
        
    }


    /**
     * **Paging info**
     *
     * This interface doesn't have a description.
     */
    export type PagingInfo = {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         count: number
        
        /**
         * **Number of pages**
         *
         * This interface field doesn't have a description.
         */
         numberOfPages?: number
        
    }


    /**
     * **Response error**
     *
     * This interface doesn't have a description.
     */
    export type ResponseError = {
        
        /**
         * **Fields**
         *
         * This interface field doesn't have a description.
         */
         fields: {[key: string]: string} | null
        
        /**
         * **Message**
         *
         * This interface field doesn't have a description.
         */
         message: string
        
        /**
         * **Type**
         *
         * This interface field doesn't have a description.
         */
         type: string
        
    }


    /**
     * **Bool filter**
     *
     * This interface doesn't have a description.
     */
    export type BoolFilter = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: boolean
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: boolean | std.BoolFilter
        
    }


    /**
     * **Bool nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type BoolNullableFilter = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: boolean | null
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: boolean | null | std.BoolNullableFilter
        
    }


    /**
     * **Filter**
     *
     * This interface doesn't have a description.
     */
    export type Filter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T
        
        /**
         * **Gt**
         *
         * This interface field doesn't have a description.
         */
         gt?: T
        
        /**
         * **Gte**
         *
         * This interface field doesn't have a description.
         */
         gte?: T
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: T[]
        
        /**
         * **Lt**
         *
         * This interface field doesn't have a description.
         */
         lt?: T
        
        /**
         * **Lte**
         *
         * This interface field doesn't have a description.
         */
         lte?: T
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: T | std.Filter<T>
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: T[]
        
    }


    /**
     * **Nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type NullableFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T | null
        
        /**
         * **Gt**
         *
         * This interface field doesn't have a description.
         */
         gt?: T
        
        /**
         * **Gte**
         *
         * This interface field doesn't have a description.
         */
         gte?: T
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: (T | null)[]
        
        /**
         * **Lt**
         *
         * This interface field doesn't have a description.
         */
         lt?: T
        
        /**
         * **Lte**
         *
         * This interface field doesn't have a description.
         */
         lte?: T
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: T | null | std.NullableFilter<T>
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: (T | null)[]
        
    }


    /**
     * **String filter**
     *
     * This interface doesn't have a description.
     */
    export type StringFilter = {
        
        /**
         * **Contains**
         *
         * This interface field doesn't have a description.
         */
         contains?: string
        
        /**
         * **Ends with**
         *
         * This interface field doesn't have a description.
         */
         endsWith?: string
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: string
        
        /**
         * **Gt**
         *
         * This interface field doesn't have a description.
         */
         gt?: string
        
        /**
         * **Gte**
         *
         * This interface field doesn't have a description.
         */
         gte?: string
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: string[]
        
        /**
         * **Lt**
         *
         * This interface field doesn't have a description.
         */
         lt?: string
        
        /**
         * **Lte**
         *
         * This interface field doesn't have a description.
         */
         lte?: string
        
        /**
         * **Matches**
         *
         * This interface field doesn't have a description.
         */
         matches?: string
        
        /**
         * **Mode**
         *
         * This interface field doesn't have a description.
         */
         mode?: std.StringMatchMode
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: string | std.StringFilter
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: string[]
        
        /**
         * **Starts with**
         *
         * This interface field doesn't have a description.
         */
         startsWith?: string
        
    }


    /**
     * **String nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type StringNullableFilter = {
        
        /**
         * **Contains**
         *
         * This interface field doesn't have a description.
         */
         contains?: string
        
        /**
         * **Ends with**
         *
         * This interface field doesn't have a description.
         */
         endsWith?: string
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: string | null
        
        /**
         * **Gt**
         *
         * This interface field doesn't have a description.
         */
         gt?: string
        
        /**
         * **Gte**
         *
         * This interface field doesn't have a description.
         */
         gte?: string
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: (string | null)[]
        
        /**
         * **Lt**
         *
         * This interface field doesn't have a description.
         */
         lt?: string
        
        /**
         * **Lte**
         *
         * This interface field doesn't have a description.
         */
         lte?: string
        
        /**
         * **Matches**
         *
         * This interface field doesn't have a description.
         */
         matches?: string
        
        /**
         * **Mode**
         *
         * This interface field doesn't have a description.
         */
         mode?: std.StringMatchMode
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: string | null | std.StringNullableFilter
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: (string | null)[]
        
        /**
         * **Starts with**
         *
         * This interface field doesn't have a description.
         */
         startsWith?: string
        
    }


    /**
     * **Enum filter**
     *
     * This interface doesn't have a description.
     */
    export type EnumFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: T[]
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: T | std.EnumFilter<T>
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: T[]
        
    }


    /**
     * **Enum nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type EnumNullableFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T | null
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: (T | null)[]
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: T | null | std.EnumNullableFilter<T>
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: (T | null)[]
        
    }


    /**
     * **Array filter**
     *
     * This interface doesn't have a description.
     */
    export type ArrayFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T[]
        
        /**
         * **Has**
         *
         * This interface field doesn't have a description.
         */
         has?: T
        
        /**
         * **Has every**
         *
         * This interface field doesn't have a description.
         */
         hasEvery?: T[]
        
        /**
         * **Has some**
         *
         * This interface field doesn't have a description.
         */
         hasSome?: T[]
        
        /**
         * **Is empty**
         *
         * This interface field doesn't have a description.
         */
         isEmpty?: boolean
        
        /**
         * **Length**
         *
         * This interface field doesn't have a description.
         */
         length?: number
        
    }


    /**
     * **Array nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type ArrayNullableFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T[] | null
        
        /**
         * **Has**
         *
         * This interface field doesn't have a description.
         */
         has?: T
        
        /**
         * **Has every**
         *
         * This interface field doesn't have a description.
         */
         hasEvery?: T[]
        
        /**
         * **Has some**
         *
         * This interface field doesn't have a description.
         */
         hasSome?: T[]
        
        /**
         * **Is empty**
         *
         * This interface field doesn't have a description.
         */
         isEmpty?: boolean
        
        /**
         * **Length**
         *
         * This interface field doesn't have a description.
         */
         length?: number
        
    }


    /**
     * **Bool with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type BoolWithAggregatesFilter = std.BoolFilter & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.BoolFilter
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.BoolFilter
        
    }


    /**
     * **Bool nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type BoolNullableWithAggregatesFilter = std.BoolNullableFilter & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.BoolNullableFilter
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.BoolNullableFilter
        
    }


    /**
     * **Int number with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type IntNumberWithAggregatesFilter<T> = std.Filter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.Filter<number>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.Filter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.Filter<T>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.Filter<number>
        
    }


    /**
     * **Int number nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type IntNumberNullableWithAggregatesFilter<T> = std.NullableFilter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.NullableFilter<number>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.NullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.NullableFilter<T>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.NullableFilter<number>
        
    }


    /**
     * **Float number with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type FloatNumberWithAggregatesFilter<T> = std.Filter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.Filter<number>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.Filter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.Filter<T>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.Filter<number>
        
    }


    /**
     * **Float number nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type FloatNumberNullableWithAggregatesFilter<T> = std.NullableFilter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.NullableFilter<number>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.NullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.NullableFilter<T>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.NullableFilter<number>
        
    }


    /**
     * **Decimal with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type DecimalWithAggregatesFilter = std.Filter<Decimal> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.Filter<Decimal>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.Filter<Decimal>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.Filter<Decimal>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.Filter<Decimal>
        
    }


    /**
     * **Decimal nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type DecimalNullableWithAggregatesFilter<T> = std.NullableFilter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.NullableFilter<Decimal>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.NullableFilter<Decimal>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.NullableFilter<Decimal>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.NullableFilter<Decimal>
        
    }


    /**
     * **Aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type AggregatesFilter<T> = std.Filter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.Filter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.Filter<T>
        
    }


    /**
     * **Nullable aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type NullableAggregatesFilter<T> = std.NullableFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.NullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.NullableFilter<T>
        
    }


    /**
     * **String with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type StringWithAggregatesFilter = std.StringFilter & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.StringFilter
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.StringFilter
        
    }


    /**
     * **String nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type StringNullableWithAggregatesFilter = std.StringNullableFilter & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.StringNullableFilter
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.StringNullableFilter
        
    }


    /**
     * **Enum with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type EnumWithAggregatesFilter<T> = std.EnumFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.EnumFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.EnumFilter<T>
        
    }


    /**
     * **Enum nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type EnumNullableWithAggregatesFilter<T> = std.EnumNullableFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.EnumNullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.EnumNullableFilter<T>
        
    }


    /**
     * **Array with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type ArrayWithAggregatesFilter<T> = std.ArrayFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.ArrayFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.ArrayFilter<T>
        
    }


    /**
     * **Array nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type ArrayNullableWithAggregatesFilter<T> = std.ArrayNullableFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.ArrayNullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.ArrayNullableFilter<T>
        
    }


    /**
     * **Number atomic update operation input**
     *
     * This interface doesn't have a description.
     */
    export type NumberAtomicUpdateOperationInput<T> = {
        
        /**
         * **Decrement**
         *
         * This interface field doesn't have a description.
         */
         decrement?: T
        
        /**
         * **Divide**
         *
         * This interface field doesn't have a description.
         */
         divide?: T
        
        /**
         * **Increment**
         *
         * This interface field doesn't have a description.
         */
         increment?: T
        
        /**
         * **Multiply**
         *
         * This interface field doesn't have a description.
         */
         multiply?: T
        
    }


    /**
     * **Array atomic update operation input**
     *
     * This interface doesn't have a description.
     */
    export type ArrayAtomicUpdateOperationInput<T> = {
        
        /**
         * **Push**
         *
         * This interface field doesn't have a description.
         */
         push?: T
        
    }



    export namespace admin {







        export interface AdminNamespaceDelegate {

            

            

            

            /**
             * Get a new client altered with `headers`.
             * @param {headers?} headers - The new headers.
             */
            $headers(headers?: {[key: string]: string} | undefined): Teo
        }





    }

    export namespace bcrypt {







        export interface BcryptNamespaceDelegate {

            

            

            

            /**
             * Get a new client altered with `headers`.
             * @param {headers?} headers - The new headers.
             */
            $headers(headers?: {[key: string]: string} | undefined): Teo
        }





    }

    export namespace identity {



        /**
         * **Token info**
         *
         * This interface doesn't have a description.
         */
        export type TokenInfo = {
            
            /**
             * **Token**
             *
             * This interface field doesn't have a description.
             */
             token: string
            
        }






        export interface IdentityNamespaceDelegate {

            

            

            

            /**
             * Get a new client altered with `headers`.
             * @param {headers?} headers - The new headers.
             */
            $headers(headers?: {[key: string]: string} | undefined): Teo
        }





    }




    export interface StdNamespaceDelegate {

        

        
        admin: std.admin.AdminNamespaceDelegate
        
        bcrypt: std.bcrypt.BcryptNamespaceDelegate
        
        identity: std.identity.IdentityNamespaceDelegate
        

        

        /**
         * Get a new client altered with `headers`.
         * @param {headers?} headers - The new headers.
         */
        $headers(headers?: {[key: string]: string} | undefined): Teo
    }





}




export interface AdminDelegate {

    
    findUnique<T extends AdminFindUniqueArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Admin, AdminGetPayload<T>>>>
    
    findFirst<T extends AdminFindFirstArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Admin, AdminGetPayload<T>>>>
    
    findMany<T extends AdminFindManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Admin, AdminGetPayload<T>>[], std.PagingInfo>>
    
    create<T extends AdminCreateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Admin, AdminGetPayload<T>>>>
    
    update<T extends AdminUpdateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Admin, AdminGetPayload<T>>>>
    
    upsert<T extends AdminUpsertArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Admin, AdminGetPayload<T>>>>
    
    copy<T extends AdminCopyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Admin, AdminGetPayload<T>>>>
    
    delete<T extends AdminDeleteArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Admin, AdminGetPayload<T>>>>
    
    createMany<T extends AdminCreateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Admin, AdminGetPayload<T>>[], std.PagingInfo>>
    
    updateMany<T extends AdminUpdateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Admin, AdminGetPayload<T>>[], std.PagingInfo>>
    
    copyMany<T extends AdminCopyManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Admin, AdminGetPayload<T>>[], std.PagingInfo>>
    
    deleteMany<T extends AdminDeleteManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Admin, AdminGetPayload<T>>[], std.PagingInfo>>
    
    count<T extends AdminCountArgs>(body: Subset<T, AdminCountArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<T extends Record<'select', any>
       ? T['select'] extends true
         ? number
         : GetScalarType<T['select'], AdminCountAggregateResult>
       : number>>
    
    aggregate<T extends AdminAggregateArgs>(body: Subset<T, AdminAggregateArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<GetAdminAggregateType<T>>>
    
    groupBy<T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(body: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<{} extends InputErrors ? GetAdminGroupByPayload<T> : InputErrors>>
    
    identity<T extends AdminArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Admin, AdminGetPayload<T>>>>
    
    signIn<T extends AdminSignInInput>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Admin, AdminGetPayload<T>>, std.identity.TokenInfo>>
    

    

    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}

export interface CategoryDelegate {

    
    findUnique<T extends CategoryFindUniqueArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Category, CategoryGetPayload<T>>>>
    
    findFirst<T extends CategoryFindFirstArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Category, CategoryGetPayload<T>>>>
    
    findMany<T extends CategoryFindManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Category, CategoryGetPayload<T>>[], std.PagingInfo>>
    
    create<T extends CategoryCreateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Category, CategoryGetPayload<T>>>>
    
    update<T extends CategoryUpdateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Category, CategoryGetPayload<T>>>>
    
    upsert<T extends CategoryUpsertArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Category, CategoryGetPayload<T>>>>
    
    copy<T extends CategoryCopyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Category, CategoryGetPayload<T>>>>
    
    delete<T extends CategoryDeleteArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Category, CategoryGetPayload<T>>>>
    
    createMany<T extends CategoryCreateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Category, CategoryGetPayload<T>>[], std.PagingInfo>>
    
    updateMany<T extends CategoryUpdateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Category, CategoryGetPayload<T>>[], std.PagingInfo>>
    
    copyMany<T extends CategoryCopyManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Category, CategoryGetPayload<T>>[], std.PagingInfo>>
    
    deleteMany<T extends CategoryDeleteManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Category, CategoryGetPayload<T>>[], std.PagingInfo>>
    
    count<T extends CategoryCountArgs>(body: Subset<T, CategoryCountArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<T extends Record<'select', any>
       ? T['select'] extends true
         ? number
         : GetScalarType<T['select'], CategoryCountAggregateResult>
       : number>>
    
    aggregate<T extends CategoryAggregateArgs>(body: Subset<T, CategoryAggregateArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<GetCategoryAggregateType<T>>>
    
    groupBy<T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(body: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<{} extends InputErrors ? GetCategoryGroupByPayload<T> : InputErrors>>
    

    

    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}

export interface ItemDelegate {

    
    findUnique<T extends ItemFindUniqueArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Item, ItemGetPayload<T>>>>
    
    findFirst<T extends ItemFindFirstArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Item, ItemGetPayload<T>>>>
    
    findMany<T extends ItemFindManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Item, ItemGetPayload<T>>[], std.PagingInfo>>
    
    create<T extends ItemCreateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Item, ItemGetPayload<T>>>>
    
    update<T extends ItemUpdateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Item, ItemGetPayload<T>>>>
    
    upsert<T extends ItemUpsertArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Item, ItemGetPayload<T>>>>
    
    copy<T extends ItemCopyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Item, ItemGetPayload<T>>>>
    
    delete<T extends ItemDeleteArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Item, ItemGetPayload<T>>>>
    
    createMany<T extends ItemCreateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Item, ItemGetPayload<T>>[], std.PagingInfo>>
    
    updateMany<T extends ItemUpdateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Item, ItemGetPayload<T>>[], std.PagingInfo>>
    
    copyMany<T extends ItemCopyManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Item, ItemGetPayload<T>>[], std.PagingInfo>>
    
    deleteMany<T extends ItemDeleteManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Item, ItemGetPayload<T>>[], std.PagingInfo>>
    
    count<T extends ItemCountArgs>(body: Subset<T, ItemCountArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<T extends Record<'select', any>
       ? T['select'] extends true
         ? number
         : GetScalarType<T['select'], ItemCountAggregateResult>
       : number>>
    
    aggregate<T extends ItemAggregateArgs>(body: Subset<T, ItemAggregateArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<GetItemAggregateType<T>>>
    
    groupBy<T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(body: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<{} extends InputErrors ? GetItemGroupByPayload<T> : InputErrors>>
    

    

    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}

export interface ProductDelegate {

    
    findUnique<T extends ProductFindUniqueArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Product, ProductGetPayload<T>>>>
    
    findFirst<T extends ProductFindFirstArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Product, ProductGetPayload<T>>>>
    
    findMany<T extends ProductFindManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Product, ProductGetPayload<T>>[], std.PagingInfo>>
    
    create<T extends ProductCreateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Product, ProductGetPayload<T>>>>
    
    update<T extends ProductUpdateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Product, ProductGetPayload<T>>>>
    
    upsert<T extends ProductUpsertArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Product, ProductGetPayload<T>>>>
    
    copy<T extends ProductCopyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Product, ProductGetPayload<T>>>>
    
    delete<T extends ProductDeleteArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Product, ProductGetPayload<T>>>>
    
    createMany<T extends ProductCreateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Product, ProductGetPayload<T>>[], std.PagingInfo>>
    
    updateMany<T extends ProductUpdateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Product, ProductGetPayload<T>>[], std.PagingInfo>>
    
    copyMany<T extends ProductCopyManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Product, ProductGetPayload<T>>[], std.PagingInfo>>
    
    deleteMany<T extends ProductDeleteManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Product, ProductGetPayload<T>>[], std.PagingInfo>>
    
    count<T extends ProductCountArgs>(body: Subset<T, ProductCountArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<T extends Record<'select', any>
       ? T['select'] extends true
         ? number
         : GetScalarType<T['select'], ProductCountAggregateResult>
       : number>>
    
    aggregate<T extends ProductAggregateArgs>(body: Subset<T, ProductAggregateArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<GetProductAggregateType<T>>>
    
    groupBy<T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(body: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<{} extends InputErrors ? GetProductGroupByPayload<T> : InputErrors>>
    

    

    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}

export interface RecordDelegate {

    
    findUnique<T extends RecordFindUniqueArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Record, RecordGetPayload<T>>>>
    
    findFirst<T extends RecordFindFirstArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Record, RecordGetPayload<T>>>>
    
    findMany<T extends RecordFindManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Record, RecordGetPayload<T>>[], std.PagingInfo>>
    
    create<T extends RecordCreateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Record, RecordGetPayload<T>>>>
    
    update<T extends RecordUpdateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Record, RecordGetPayload<T>>>>
    
    upsert<T extends RecordUpsertArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Record, RecordGetPayload<T>>>>
    
    copy<T extends RecordCopyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Record, RecordGetPayload<T>>>>
    
    delete<T extends RecordDeleteArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Record, RecordGetPayload<T>>>>
    
    createMany<T extends RecordCreateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Record, RecordGetPayload<T>>[], std.PagingInfo>>
    
    updateMany<T extends RecordUpdateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Record, RecordGetPayload<T>>[], std.PagingInfo>>
    
    copyMany<T extends RecordCopyManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Record, RecordGetPayload<T>>[], std.PagingInfo>>
    
    deleteMany<T extends RecordDeleteManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Record, RecordGetPayload<T>>[], std.PagingInfo>>
    
    count<T extends RecordCountArgs>(body: Subset<T, RecordCountArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<T extends Record<'select', any>
       ? T['select'] extends true
         ? number
         : GetScalarType<T['select'], RecordCountAggregateResult>
       : number>>
    
    aggregate<T extends RecordAggregateArgs>(body: Subset<T, RecordAggregateArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<GetRecordAggregateType<T>>>
    
    groupBy<T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs['orderBy'] }
        : { orderBy?: RecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(body: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<{} extends InputErrors ? GetRecordGroupByPayload<T> : InputErrors>>
    

    

    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}

export interface RootDelegate {

    
    findUnique<T extends RootFindUniqueArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Root, RootGetPayload<T>>>>
    
    findFirst<T extends RootFindFirstArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Root, RootGetPayload<T>>>>
    
    findMany<T extends RootFindManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Root, RootGetPayload<T>>[], std.PagingInfo>>
    
    create<T extends RootCreateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Root, RootGetPayload<T>>>>
    
    update<T extends RootUpdateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Root, RootGetPayload<T>>>>
    
    upsert<T extends RootUpsertArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Root, RootGetPayload<T>>>>
    
    copy<T extends RootCopyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Root, RootGetPayload<T>>>>
    
    delete<T extends RootDeleteArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Root, RootGetPayload<T>>>>
    
    createMany<T extends RootCreateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Root, RootGetPayload<T>>[], std.PagingInfo>>
    
    updateMany<T extends RootUpdateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Root, RootGetPayload<T>>[], std.PagingInfo>>
    
    copyMany<T extends RootCopyManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Root, RootGetPayload<T>>[], std.PagingInfo>>
    
    deleteMany<T extends RootDeleteManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Root, RootGetPayload<T>>[], std.PagingInfo>>
    
    count<T extends RootCountArgs>(body: Subset<T, RootCountArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<T extends Record<'select', any>
       ? T['select'] extends true
         ? number
         : GetScalarType<T['select'], RootCountAggregateResult>
       : number>>
    
    aggregate<T extends RootAggregateArgs>(body: Subset<T, RootAggregateArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<GetRootAggregateType<T>>>
    
    groupBy<T extends RootGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RootGroupByArgs['orderBy'] }
        : { orderBy?: RootGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(body: SubsetIntersection<T, RootGroupByArgs, OrderByArg> & InputErrors,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<{} extends InputErrors ? GetRootGroupByPayload<T> : InputErrors>>
    
    identity<T extends RootArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Root, RootGetPayload<T>>>>
    
    signIn<T extends RootSignInInput>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Root, RootGetPayload<T>>, std.identity.TokenInfo>>
    

    

    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}

export interface Teo {

    

    
    std: std.StdNamespaceDelegate
    

    
    admin: AdminDelegate
    
    category: CategoryDelegate
    
    item: ItemDelegate
    
    product: ProductDelegate
    
    record: RecordDelegate
    
    root: RootDelegate
    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}



/**
 * ## Teo API Client
 *
 * Teo API client for TypeScript & javaScript. It supports both browser and
 * node.js. It's generated by the fantastic Teo framework.
 *
 */
export const teo: Teo


