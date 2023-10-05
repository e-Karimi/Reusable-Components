/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import Table from './Table'
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'
import useSort from '../Hooks/useSort';

export default function SortableTable(props) {
  const { columnConfig, rowData } = props
  const  { sortBy, sortOrder,handleSortedColumn,sortedRowData } = useSort(rowData, columnConfig)

  const updatedColumnConfig = columnConfig.map(column => {
    if (!column.sortValue) {
      return column;
    } else {
      return {
        ...column,
        clickableHeader: () => (
          <th onClick={() => handleSortedColumn(column.label)}
            className='py-2 px-3 flex items-center justify-between gap-x-2 cursor-pointer ml-1 '>
            <span className="flex flex-col justify-between text-[10px] text-slate-500">
              {getIcons(column.label, sortBy, sortOrder)}
            </span>
            <span className="text-sm">{column.label}</span>
          </th>
        )
      }
    }
  })

  return (
      <Table {...props} columnConfig={updatedColumnConfig} rowData={sortedRowData} />
  )
}


//show icons in a right time and place
const getIcons = (columnLabel, sortBy, sortOrder) => {

  if (columnLabel !== sortBy) {
    return (
      <Fragment>
        <BiSolidUpArrow />
        <BiSolidDownArrow />
      </Fragment>
    )
  }

  if (sortOrder === 'asc') {
    return (
      <Fragment>
        <BiSolidUpArrow />
      </Fragment>
    )
  } else if (sortOrder === 'desc') {
    return (
      <Fragment>
        <BiSolidDownArrow />
      </Fragment>
    )
  }

}
