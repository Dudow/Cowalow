import { toast } from 'react-toastify';

interface IShowToastProps {
  message: string;
  status: string;
}

const ShowToast = ({ message, status }: IShowToastProps) => {
  const toastConfig = {
    position: toast.POSITION.TOP_RIGHT,
    className: 'toast-error',
    progressClassName: 'error-progress-bar',
    autoClose: 4000,
    toastId: 2,
  };

  switch (status) {
    case 'error': {
      return toast.error(message, toastConfig);
    }

    case 'success': {
      return toast.success(message, toastConfig);
    }

    case 'warn': {
      return toast.warn(message, toastConfig);
    }

    default: {
      return toast.error('Something went wrong', toastConfig);
    }
  }

  toast.error(message, toastConfig);
};

export default ShowToast;
