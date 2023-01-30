import React, { forwardRef, useId } from 'react';

function TextareaFiled({ description, placeholder }, ref) {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{description}</label>
      <textarea
        ref={ref}
        id={id}
        className='form-control'
        rows='3'
        placeholder={placeholder}
      />
    </>
  );
}

export default forwardRef(TextareaFiled);
