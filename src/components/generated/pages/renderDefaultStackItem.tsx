// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactElement } from 'react'
import { PageStackItem } from "../pageStack/PageStackItem"
import _IndexPage from './_Index'
import AdminPage from './Admin'
import CategoryPage from './Category'
import ItemPage from './Item'
import NullableRecordPage from './NullableRecord'
import ProductPage from './Product'
import RecordPage from './Record'
import RootPage from './Root'
import AdminFormPage from './Admin/FormPage'
import CategoryFormPage from './Category/FormPage'
import ItemFormPage from './Item/FormPage'
import NullableRecordFormPage from './NullableRecord/FormPage'
import ProductFormPage from './Product/FormPage'
import RecordFormPage from './Record/FormPage'
import RootFormPage from './Root/FormPage'

export default function renderDefaultStackItem(item: PageStackItem): ReactElement | undefined {
    switch (item.key) {
        case "_Index":
            return <_IndexPage item={item} />
        case "Admin":
            return <AdminPage item={item} />
        case "Category":
            return <CategoryPage item={item} />
        case "Item":
            return <ItemPage item={item} />
        case "NullableRecord":
            return <NullableRecordPage item={item} />
        case "Product":
            return <ProductPage item={item} />
        case "Record":
            return <RecordPage item={item} />
        case "Root":
            return <RootPage item={item} />
        case "AdminForm":
            return <AdminFormPage item={item} />
        case "CategoryForm":
            return <CategoryFormPage item={item} />
        case "ItemForm":
            return <ItemFormPage item={item} />
        case "NullableRecordForm":
            return <NullableRecordFormPage item={item} />
        case "ProductForm":
            return <ProductFormPage item={item} />
        case "RecordForm":
            return <RecordFormPage item={item} />
        case "RootForm":
            return <RootFormPage item={item} />
    }
}