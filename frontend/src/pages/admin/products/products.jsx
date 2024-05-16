import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Table from '../../../components/admin/table/Table'

const Products = () => {
    const { data } = useContext(MainContext)
    return (
        <div>
            <Table items={data} />
        </div>

    )
}

export default Products