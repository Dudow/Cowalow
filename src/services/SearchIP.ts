import axios from 'axios';
import { FormHandles } from '@unform/core';
import ShowToast from './ShowToast';

const SearchIP = async (formRef: React.RefObject<FormHandles>) => {
  await axios
    .get('https://ip-fast.com/api/ip/')
    .then((res) => {
      if (formRef.current) {
        formRef.current.setFieldValue('ip', res.data);
      }
      ShowToast({ message: 'IP found!', status: 'success' });
    })
    .catch(() => {
      ShowToast({ message: 'Something went wrong!', status: 'error' });
    });
};

export default SearchIP;
