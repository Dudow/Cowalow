import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import InputMask from 'react-input-mask';
import InputBase from './inputStyle';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask?: string;
}

const Input: React.FC<IInputProps> = ({
  name,
  placeholder,
  mask = '',
  ...props
}: IInputProps) => {
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
    <InputMask
      mask={mask}
      maskPlaceholder={null}
      value={props.value}
      {...props}
    >
      <InputBase
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={props.onChange}
      />
    </InputMask>
  );
};

export default Input;
