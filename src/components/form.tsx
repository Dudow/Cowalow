import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { Form as FormBase } from '@unform/web';
import { FormHandles } from '@unform/core';

import Button from './button';
import Flex from './flex';

import Validation from '../services/Validation';
import ShowToast from '../services/ShowToast';
import SearchIP from '../services/SearchIP';
import Input from './Input/input';

interface IFormProps extends InputHTMLAttributes<HTMLFormElement> {}

const Form: React.FC<IFormProps> = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    const data = localStorage?.getItem('user');
    if (data) formRef.current?.setData(JSON.parse(data));
  }, []);

  const handleSubmit = async () => {
    setSubmitting(true);

    await Validation(formRef).then((res) => {
      ShowToast(res);
    });

    setSubmitting(false);
  };

  const handleReset = () => {
    if (!localStorage.getItem('user')) {
      ShowToast({ message: 'No storage data to remove!', status: 'warn' });
    }

    formRef.current?.reset();

    localStorage.removeItem('user');

    ShowToast({ message: 'Data removed!', status: 'success' });
  };

  const handleSearch = async () => {
    const ipData = formRef.current?.getFieldValue('ip');

    if (ipData) {
      ShowToast({ message: 'IP already set!', status: 'warn' });
      return;
    }

    setSearching(true);

    await SearchIP(formRef);

    setSearching(false);
  };

  return (
    <FormBase onSubmit={handleSubmit} ref={formRef}>
      <Flex>
        <Input name="name" placeholder="Name" autoComplete="off" />
      </Flex>
      <Flex>
        <Input name="profession" placeholder="Profession" autoComplete="off" />
        <Input
          name="phone"
          mask="(99) 99999-9999"
          placeholder="Phone"
          autoComplete="off"
          type="tel"
        />
      </Flex>
      <Flex>
        <Input name="ip" placeholder="IP" readOnly />
        <Button type="button" onClick={handleSearch}>
          {searching ? 'Searching...' : 'Search IP'}
        </Button>
      </Flex>
      <Flex justifyContent="center">
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
        <Button type="submit">{submitting ? 'Loading...' : 'Save'}</Button>
      </Flex>
    </FormBase>
  );
};

export default Form;
