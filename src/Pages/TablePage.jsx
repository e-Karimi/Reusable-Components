import SortableTable from './../Components/SortableTable'
// fruitsData : contains row data
import { fruitsData } from './../data'


export default function TablePage() {

  //*column Config :  Each object controls data of a td tag in one column
  const columnConfig = [
    {
      label: 'Name',
      renderValue: (rowObj) => rowObj.name,
      sortValue: (rowObj) => rowObj.name,
    },
    {
      label: 'Color',
      renderValue: (rowObj) => <span className={`block w-5 h-5 rounded mx-auto ${rowObj.color}`}></span>,
    },
    {
      label: 'Score',
      renderValue: (rowObj) => rowObj.score,
      sortValue: (rowObj) => rowObj.score,
    },
    {
      label: 'Price',
      renderValue: (rowObj) => <span>{`${rowObj.price} $`}</span>,
      sortValue: (rowObj) => rowObj.price,
    },
    {
      label: 'Count',
      renderValue: (rowObj) => rowObj.count,
      sortValue: (rowObj) => rowObj.count,
    },
    {
      label: 'Sum Price',
      renderValue: (rowObj) => <span className="text-gray-800 font-semibold">{`${rowObj.price * rowObj.count} $`}</span>,
    }

  ]

  return (
    <SortableTable rowData={fruitsData} columnConfig={columnConfig} />
  )
}
