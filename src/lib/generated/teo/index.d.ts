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
export type AdminScalarFields = "email" | "id" | "password"

/**
 * **Admin serializable scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type AdminSerializableScalarFields = "email" | "id"

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
 * **User scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type UserScalarFields = "email" | "id" | "password" | "phoneNo"

/**
 * **User serializable scalar fields**
 *
 * This synthesized enum doesn't have a description.
 */
export type UserSerializableScalarFields = "email" | "id" | "phoneNo"

/**
 * **User relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type UserRelations = undefined

/**
 * **User direct relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type UserDirectRelations = undefined

/**
 * **User indirect relations**
 *
 * This synthesized enum doesn't have a description.
 */
export type UserIndirectRelations = undefined

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

/// ## User scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum UserScalarFieldsEnumType {

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

/// ## User serializable scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum UserSerializableScalarFieldsEnumType {

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

/// ## User relations
///
/// This synthesized enum doesn't have a description.
export const enum UserRelationsEnumType {
}

/// ## User direct relations
///
/// This synthesized enum doesn't have a description.
export const enum UserDirectRelationsEnumType {
}

/// ## User indirect relations
///
/// This synthesized enum doesn't have a description.
export const enum UserIndirectRelationsEnumType {
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
    
}


/**
 * **User select**
 *
 * This synthesized interface doesn't have a description
 */
export type UserSelect = {
    
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
 * **User include**
 *
 * This synthesized interface doesn't have a description
 */
export type UserInclude = {
    
}


/**
 * **User where input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserWhereInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: UserWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: UserWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: UserWhereInput[]
    
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
 * **User where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserWhereUniqueInput = {
    
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
 * **User scalar where with aggregates input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserScalarWhereWithAggregatesInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: UserWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: UserWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: UserWhereInput[]
    
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
 * **User relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type UserRelationFilter = {
    
    /**
     * **Is**
     *
     * This synthesized field doesn't have a description.
     */
     is?: UserWhereInput
    
    /**
     * **Is Not**
     *
     * This synthesized field doesn't have a description.
     */
     isNot?: UserWhereInput
    
}


/**
 * **User list relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type UserListRelationFilter = {
    
    /**
     * **Every**
     *
     * This synthesized field doesn't have a description.
     */
     every?: UserWhereInput
    
    /**
     * **None**
     *
     * This synthesized field doesn't have a description.
     */
     none?: UserWhereInput
    
    /**
     * **Some**
     *
     * This synthesized field doesn't have a description.
     */
     some?: UserWhereInput
    
}


/**
 * **User order by input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserOrderByInput = {
    
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
 * **User count aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCountAggregateInputType = {
    
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
 * **User sum aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type UserSumAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **User avg aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type UserAvgAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}


/**
 * **User min aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type UserMinAggregateInputType = {
    
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
 * **User max aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type UserMaxAggregateInputType = {
    
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
 * **User create input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCreateInput = {
    
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
 * **User update input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserUpdateInput = {
    
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
 * **User create nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCreateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: UserWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: UserConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: UserCreateInput
    
}


/**
 * **User create nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCreateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<UserWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<UserConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<UserCreateInput>
    
}


/**
 * **User update nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserUpdateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: UserWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: UserConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: UserCreateInput
    
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
     set?: UserWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: UserUpdateWithWhereUniqueInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: UserUpsertWithWhereUniqueInput
    
}


/**
 * **User update nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserUpdateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<UserWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<UserConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<UserCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<UserWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<UserWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<UserWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<UserUpdateWithWhereUniqueInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<UserUpdateManyWithWhereInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<UserUpsertWithWhereUniqueInput>
    
}


/**
 * **User connect or create input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserConnectOrCreateInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: UserCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereUniqueInput
    
}


/**
 * **User update with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserUpdateWithWhereUniqueInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: UserUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereUniqueInput
    
}


/**
 * **User upsert with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserUpsertWithWhereUniqueInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: UserCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: UserUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereUniqueInput
    
}


/**
 * **User update many with where input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserUpdateManyWithWhereInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: UserUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereInput
    
}


/**
 * **User**
 *
 * This synthesized interface doesn't have a description
 */
export type User = {
    
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
export type UserGetPayload<S extends boolean | null | undefined | UserArgs, U = keyof S> = S extends true
    ? User
    : S extends undefined
        ? never
        : S extends UserArgs | UserFindManyArgs
            ? 'include' extends U
                ? SelectSubset<User, S> & {
                    [P in ExistKeys<S['include']>]:
                    never
                }
                : SelectSubset<User, S>
            : User

export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof UserAggregateResult]: P extends '_count' | 'count'
  ? T[P] extends true
    ? number
    : GetScalarType<T[P], UserAggregateResult[P]>
  : GetScalarType<T[P], UserAggregateResult[P]>
}

export type GetUserGroupByPayload<T extends UserGroupByArgs> =
  Array<
    PickEnumerable<UserGroupByResult, T['by']> &
      {
        [P in ((keyof T) & (keyof UserGroupByResult))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByResult[P]>
          : GetScalarType<T[P], UserGroupByResult[P]>
      }
    >


/**
 * **User count aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCountAggregateResult = {
    
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
 * **User sum aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type UserSumAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **User avg aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type UserAvgAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}


/**
 * **User min aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type UserMinAggregateResult = {
    
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
 * **User max aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type UserMaxAggregateResult = {
    
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
 * **User aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type UserAggregateResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: UserAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: UserCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: UserMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: UserMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: UserSumAggregateResult
    
}


/**
 * **User group by result**
 *
 * This synthesized interface doesn't have a description
 */
export type UserGroupByResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: UserAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: UserCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: UserMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: UserMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: UserSumAggregateResult
    
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
 * **User args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
}


/**
 * **User find many args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserFindManyArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: UserWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: UserSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<UserOrderByInput>
    
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
     select?: UserSelect
    
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
     where?: UserWhereInput
    
}


/**
 * **User find first args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserFindFirstArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: UserWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: UserSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<UserOrderByInput>
    
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
     select?: UserSelect
    
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
     where?: UserWhereInput
    
}


/**
 * **User find unique args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserFindUniqueArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereUniqueInput
    
}


/**
 * **User create args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCreateArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: UserCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
}


/**
 * **User update args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserUpdateArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: UserUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereUniqueInput
    
}


/**
 * **User upsert args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserUpsertArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: UserCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: UserUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereUniqueInput
    
}


/**
 * **User copy args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCopyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: UserUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereUniqueInput
    
}


/**
 * **User delete args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserDeleteArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereUniqueInput
    
}


/**
 * **User create many args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCreateManyArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: Enumerable<UserCreateInput>
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
}


/**
 * **User update many args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserUpdateManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: UserUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereInput
    
}


/**
 * **User delete many args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserDeleteManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereInput
    
}


/**
 * **User copy many args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCopyManyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: UserUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: UserWhereInput
    
}


/**
 * **User count args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserCountArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: UserWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: UserSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<UserOrderByInput>
    
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
     select?: UserCountAggregateInputType
    
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
     where?: UserWhereInput
    
}


/**
 * **User aggregate args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserAggregateArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: UserAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: UserCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: UserMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: UserMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: UserSumAggregateInputType
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: UserWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: UserSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<UserOrderByInput>
    
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
     where?: UserWhereInput
    
}


/**
 * **User group by args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserGroupByArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: UserAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: UserCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: UserMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: UserMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: UserSumAggregateInputType
    
    /**
     * **By**
     *
     * This synthesized field doesn't have a description.
     */
     by: Enumerable<UserSerializableScalarFields>
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: UserWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: UserSerializableScalarFields
    
    /**
     * **Having**
     *
     * This synthesized field doesn't have a description.
     */
     having?: UserScalarWhereWithAggregatesInput
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<UserOrderByInput>
    
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
     where?: UserWhereInput
    
}


/**
 * **User scalar update input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserScalarUpdateInput = {
    
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
 * **User sign in checker ids**
 *
 * This synthesized interface doesn't have a description
 */
export type UserSignInCheckerIds = {
    
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
 * **User sign in checker companions**
 *
 * This synthesized interface doesn't have a description
 */
export type UserSignInCheckerCompanions = {
    
}


/**
 * **User sign in input**
 *
 * This synthesized interface doesn't have a description
 */
export type UserSignInInput = {
    
    /**
     * **Credentials**
     *
     * This synthesized field doesn't have a description.
     */
     credentials: UserSignInArgs
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: UserInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: UserSelect
    
}


/**
 * **User sign in args**
 *
 * This synthesized interface doesn't have a description
 */
export type UserSignInArgs = {
    
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
    
    identity<T extends std.Empty>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Admin, AdminGetPayload<T>>>>
    
    signIn<T extends AdminSignInInput>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Admin, AdminGetPayload<T>>, std.identity.TokenInfo>>
    

    

    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}

export interface UserDelegate {

    
    findUnique<T extends UserFindUniqueArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, User, UserGetPayload<T>>>>
    
    findFirst<T extends UserFindFirstArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, User, UserGetPayload<T>>>>
    
    findMany<T extends UserFindManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, User, UserGetPayload<T>>[], std.PagingInfo>>
    
    create<T extends UserCreateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, User, UserGetPayload<T>>>>
    
    update<T extends UserUpdateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, User, UserGetPayload<T>>>>
    
    upsert<T extends UserUpsertArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, User, UserGetPayload<T>>>>
    
    copy<T extends UserCopyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, User, UserGetPayload<T>>>>
    
    delete<T extends UserDeleteArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, User, UserGetPayload<T>>>>
    
    createMany<T extends UserCreateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, User, UserGetPayload<T>>[], std.PagingInfo>>
    
    updateMany<T extends UserUpdateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, User, UserGetPayload<T>>[], std.PagingInfo>>
    
    copyMany<T extends UserCopyManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, User, UserGetPayload<T>>[], std.PagingInfo>>
    
    deleteMany<T extends UserDeleteManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, User, UserGetPayload<T>>[], std.PagingInfo>>
    
    count<T extends UserCountArgs>(body: Subset<T, UserCountArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<T extends Record<'select', any>
       ? T['select'] extends true
         ? number
         : GetScalarType<T['select'], UserCountAggregateResult>
       : number>>
    
    aggregate<T extends UserAggregateArgs>(body: Subset<T, UserAggregateArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<GetUserAggregateType<T>>>
    
    groupBy<T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
        }[OrderFields]>(body: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<{} extends InputErrors ? GetUserGroupByPayload<T> : InputErrors>>
    
    identity<T extends std.Empty>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, User, UserGetPayload<T>>>>
    
    signIn<T extends UserSignInInput>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, User, UserGetPayload<T>>, std.identity.TokenInfo>>
    

    

    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}

export interface Teo {

    

    
    std: std.StdNamespaceDelegate
    

    
    admin: AdminDelegate
    
    user: UserDelegate
    

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


