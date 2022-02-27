import { createContext, useContext, useReducer } from 'react';
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from '../actions';
import reducer from '../reducer/appReducer';
import axios from 'axios';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

interface UserContextI {
  userId: string;
}

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token ? JSON.parse(token) : null,
  isLoading: false,
  isError: false,
};
// @ts-ignore
const AppContext = createContext();

//  @ts-ignore
const AppProvider = ({ children }) => {
  //  @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);

  //    @ts-ignore
  const registerUser = async (currentUser) => {
    //    @ts-ignore
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await axios.post(`/api/v1/register`, currentUser);
      const { user, token } = data;
      //    @ts-ignore
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } });
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));
    } catch (error) {
      dispatch({ type: REGISTER_USER_FAIL });
    }
  };

  return (
    <AppContext.Provider value={{ ...state, registerUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
