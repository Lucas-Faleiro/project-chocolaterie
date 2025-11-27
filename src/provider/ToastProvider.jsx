import toast, { Toaster } from "react-hot-toast";
import ToastContext from "../context/ToastContext";

const ToastProvider = ({ children }) => {
    const showToast = (message, type) => {
        type === 'error' ? toast.error(message) : toast.success(message);
    };


    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toaster position="bottom-left" toastOptions={toasterStyles} />
        </ToastContext.Provider>
    );
};

const toasterStyles = { error: 
    { style: 
        { background: '#333', color: '#fff' 
        } 
    },
    success: 
    { style: 
        { background: '#4BB543', color: '#fff'
        } 
    },
    style: 
    { fontSize: '18px', padding: '8px', minWidth: '450px'
    }
};

export default ToastProvider;