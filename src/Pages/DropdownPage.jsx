import { options } from './../data'
import Dropdown from './../Components/Dropdown'
import Dropdown2 from './../Components/Dropdown2'
import { useState } from 'react'


export default function DropdownPage() {
  const [selectedValue, setSelectedValue] = useState(null)
  const [selectedValue2, setSelectedValue2] = useState(null)

  const handleSelect = (option) => {
    setSelectedValue(option)
  }
  const handleSelect2 = (option) => {
    setSelectedValue2(option)
  }

  return (
    <div className='p-5 flex gap-2 items-start'>
    
      <Dropdown options={options} />

      <Dropdown2
        options={options}
        value={selectedValue}
        onChange={handleSelect}
      />

      <Dropdown2
        options={options}
        value={selectedValue2}
        onChange={handleSelect2}
      />
    </div>
  )
}
