import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

interface IValidationReturn {
  message: string;
  status: string;
}

const Validation = async (
  formRef: React.RefObject<FormHandles>,
): Promise<IValidationReturn> => {
  try {
    if (!formRef.current) {
      return {
        message: 'Something went wrong!',
        status: 'error',
      };
    }

    const data = formRef.current.getData();

    const schema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must contain at least 3 characters'),
      profession: Yup.string()
        .required('Profession is required')
        .min(2, 'Profession must contain at least 3 characters'),
      phone: Yup.string()
        .required('A valid phone is required')
        .min(14, 'Phone must contain at least 8  characters'),
      ip: Yup.string().required('IP is required'),
    });

    await schema.validate(data, {
      abortEarly: true,
    });

    localStorage.setItem('user', JSON.stringify(data));

    formRef.current.reset();

    return {
      message: 'Success',
      status: 'success',
    };
  } catch (err) {
    console.log(err);
    if (err instanceof Yup.ValidationError) {
      return {
        message: err.message,
        status: 'warn',
      };
    }
  }

  return {
    message: 'Something went wrong!',
    status: 'error',
  };
};

export default Validation;
