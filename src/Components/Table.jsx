import PropTypes from 'prop-types';
import { Fragment } from 'react';

const Table = ({ rowData, columnConfig }) => {

  return (
    <>
      <div className="text-base text-gray-700 font-bold my-5">
      click on the labels containing arrows to sort the data according to ascending, descending, unsorted :
      </div>
      <table className='table-auto border-spacing-2  text-center select-none '>
        <caption className="caption-bottom text-xs my-4">
          Table 3.1: Professional Fruits and their Scores.
        </caption>
        <thead className='border-b-2'>
          <tr className='flex  items-center gap-x-[2px]'>
            {
              columnConfig.map(column => {

                return column.sortValue ?

                  <Fragment key={column.label}>{column.clickableHeader()}</Fragment>
                  :
                  <th key={column.label}>
                    <span className='py-2 px-3 text-sm'> {column.label}</span>
                  </th>
              })
            }

          </tr>
        </thead>
        <tbody>
          {
            rowData.map(rowObj =>
              <tr key={rowObj.id} className='border-b text-sm flex items-center  gap-x-[2px]'>
                {
                  columnConfig.map(column =>
                    <td key={column.label} className="py-1 px-1 text-xs flex-1  line-clamp-1">
                      {column.renderValue(rowObj)}
                    </td>
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}


Table.propTypes = {
  rowData: PropTypes.array,
  columnConfig: PropTypes.array,
}

export default Table;

