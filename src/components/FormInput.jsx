import React, { useState } from 'react'

const FormInput = ({label,name,type,defaultValue, value,styles,labelStyle,change,ref,min,max}) => {

  return (
    <label className='flex flex-col'>

        {label && <div className={`label capitalize ${labelStyle&&labelStyle}`} >
            <span className='text-[12px]'>{label}</span>
        </div>}
        <input ref={ref&&ref} type={type} name={name}   defaultValue={defaultValue} className={styles} onChange={change&&change} min={min&&min} max={max&&max}/>

    </label>
  )
}

export default FormInput
