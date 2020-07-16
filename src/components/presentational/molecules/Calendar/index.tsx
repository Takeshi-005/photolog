import React from 'react';
import styled, { css } from 'styled-components';
import DayOfWeek from './DayOfWeek';
import DaysElement from './DaysElement';
import WeekElement from './WeekElement';
import { COLOR } from 'styles/style';

// ______________________________________________________
//
// @ Types
export type Type = 'input';

type Props = {
  dates: Date[][];
  currents: {
    year: number;
    month: number;
  };
  type?: Type;
  handleClick?: (date: Date) => void;
  className?: string;
};

//______________________________________________________
//
// @ Component
export const Component: React.FC<Props> = props => (
  <StyledComponent {...props}>
    <div className="inner">
      <DayOfWeek
        days={['日', '月', '火', '水', '木', '金', '土']}
        type={props.type}
      />
      {props.dates.map((days, i) => (
        <WeekElement
          key={`${props.currents.year}-${props.currents.month}-${i}`}
          type={props.type}
        >
          {days.map(date => (
            <DaysElement
              key={`${props.currents.year}-${props.currents.month}-${date}`}
              date={date}
              type={props.type}
              handleClick={props.handleClick}
            />
          ))}
        </WeekElement>
      ))}
    </div>
  </StyledComponent>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled.div<Props>`
  background: #fff;
  ${props =>
    props.type !== 'input' &&
    css`
      border: 1px solid ${COLOR.border};
      height: calc(100vh - 80px);
    `}

  > .inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    ${props =>
      props.type !== 'input' &&
      css`
        flex: 1 1 0%;
      `}
  }
`;

export default Component;
