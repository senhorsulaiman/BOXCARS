import React from 'react'
const FormSelect = ({ label, name, option, defaultValue, styles, change, ref }) => {
  return (
    <label className='flex flex-col'>
      {label && <div className='label capitalize text-neutral font-medium text-lg'>
        <span className='text-[12px]'>{label}</span>
      </div>}
      <select defaultValue={defaultValue} name={name} ref={ref} className={styles} onChange={change && change}>
        <option value='' selected disabled>Select {name}</option>

        {option && option.map((item, index) => { return <option className='' key={index} >{item}</option> })}

      </select>
    </label>
  )
}

export default FormSelect
