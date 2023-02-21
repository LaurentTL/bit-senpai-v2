import { toast } from 'react-toastify';

export interface IToastMessage {
    type: string;
}

const toastMessage = (type: string) => {
    const duration = 2000;
    if (type === 'unavailable') {
        toast.error('Sorry! We are working on this.', {
            position: 'top-right',
            autoClose: duration,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    }
    if (type === 'success') {
        toast.success('Operation succed!', {
            position: 'top-right',
            autoClose: duration,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    }
};

export default toastMessage;
