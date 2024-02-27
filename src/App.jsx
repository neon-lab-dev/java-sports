// @ts-nocheck
import '@/index.css'
import toast, { Toaster } from 'react-hot-toast'
import RoutesContainer from './routes'
import { loadUser } from './redux/actions/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { message, error } = useSelector(state => state.login);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={ false }
        gutter={ 8 }
        containerClassName=""
        containerStyle={ {} }
        toastOptions={ {
          // Define default options
          className: '',
          duration: 2500,
          style: {
            background: '#856544',
            color: '#fff'
          },

          // Default options for specific types
          success: {
            duration: 2000,
            style: {
              background: 'green',
              color: '#fff'
            }
          },
          error: {
            duration: 2000,
            style: {
              background: 'red',
              color: '#fff'
            }
          }
        } }
      />
      <RoutesContainer />
    </div>
  )
}

export default App
