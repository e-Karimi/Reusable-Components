import { useState } from 'react';

export default function useSort(rowData, columnConfig) {
    const [sortBy, setSortBy] = useState(null)
    const [sortOrder, setSortOrder] = useState(null)

    const handleSortedColumn = (label) => {
        //*when click on another new label
        if (label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    // Only sort data if sortOrder && sortBy are not null
    // Find the correct sortValue function and use it for sorting
    let sortedRowData = rowData;

    if (sortBy && sortOrder) {

        const { sortValue } = columnConfig.find(column => column.label === sortBy)

        sortedRowData = [...rowData].sort((a, b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = (sortOrder === 'asc') ? 1 : -1

            if (typeof valueA === 'number') {
                return (valueA - valueB) * reverseOrder
            } else {
                return valueA.localeCompare(valueB) * reverseOrder
            }

        })

    }

    return { sortBy, sortOrder, handleSortedColumn, sortedRowData }

}
