import React from 'react';
import styled from 'styled-components';
import useApi from 'useApi';
import Spinner from 'components/presentational/atoms/Spinner';
import Calendar from 'components/container/organisms/Calendar/index';

// ______________________________________________________
//
// @ Types
type Props = {
  className?: string;
};

const App: React.FC<Props> = props => {
  const [query, setQuery] = React.useState('');
  const { state, setUrl } = useApi('', {
    code: '',
    data: []
  });

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(
        e.currentTarget.value
          .replace(/[０-９]/g, s =>
            String.fromCharCode(s.charCodeAt(0) - 0xfee0)
          )
          .slice(0, 7)
      );
    },
    []
  );

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setUrl(query);
      e.preventDefault();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query]
  );

  return (
    <div className={props.className}>
      {state.isLoading && <Spinner />}
      <h1>カレンダー</h1>
      <div className="container">
        <Calendar />
      </div>
    </div>
  );
};

export default styled(App)`
  padding: 8px 0;
  margin: 0 auto;

  > h1 {
    font-size: 20px;
    padding: 0 8px;
    font-weight: 700;
  }

  > .container {
    padding: 0 8px;
  }
`;
