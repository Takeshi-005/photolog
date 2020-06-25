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
  return (
    <div className={props.className}>
      {/* {state.isLoading && <Spinner />} */}
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
