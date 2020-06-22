import { AxiosError } from 'axios';

type Action =
  | {
      type: 'start';
    }
  | {
      type: 'succeed';
      payload: {
        result: Result;
      };
    }
  | {
      type: 'fail';
      payload: {
        error: AxiosError;
      };
    };

export type Data = {
  prefcode: string;
  ja: {
    prefecture: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
  };
  en: {
    prefecture: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
  };
};

export type Result = {
  code: string;
  data: Data[];
};

export type State = {
  isLoading: boolean;
  result: Result;
  error: AxiosError | null;
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'start': {
      return {
        ...state,
        error: null,
        isLoading: true
      };
    }
    case 'succeed': {
      return {
        ...state,
        result: action.payload.result,
        isLoading: false
      };
    }
    case 'fail': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default:
      throw new Error();
  }
};
