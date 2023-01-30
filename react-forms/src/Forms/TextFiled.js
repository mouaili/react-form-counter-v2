import React, { forwardRef, useId } from 'react';

function TextFiled({ title, placeholder }, ref) {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        ref={ref}
        id={id}
        type='text'
        className='form-control'
        placeholder={placeholder}
      />
    </>
  );
}

export default forwardRef(TextFiled);
