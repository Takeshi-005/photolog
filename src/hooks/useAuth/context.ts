import { createContext } from 'react';
import useAuth from './useAuth';

export const Context = createContext<ReturnType<typeof useAuth>>({
  currentUser: undefined
});
