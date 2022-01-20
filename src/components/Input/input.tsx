import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import InputBase from './inputStyle';

export default function Input({ name, placeholder, readOnly }: any) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <InputBase
      ref={inputRef}
      id={fieldName}
      defaultValue={defaultValue}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
}
