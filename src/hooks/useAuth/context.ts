import { createContext } from 'react';
import useHooks from './hooks';

export const Context = createContext<ReturnType<typeof useHooks>>({
  currentUser: undefined
});
