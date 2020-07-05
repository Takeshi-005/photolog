import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';
import { BaseInput } from 'styles/BaseInput';

//______________________________________________________
//
// @Types
type Props = {
  options: { [x: string]: string };
  value?: string;
  name?: string;
  className?: string;
  handleChange?: (name: string, value: string) => void;
};

//______________________________________________________
//
// @Component
export const Component: React.FC<Props> = React.memo(
  props => (
    <div className={props.className}>
      <BaseInput
        as="select"
        name={props.name}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          props.handleChange &&
          props.handleChange(e.currentTarget.name, e.currentTarget.value)
        }
      >
        {Object.entries(props.options).map(([key, value]) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </BaseInput>
    </div>
  ),
  (p, n) => p.value === n.value
);

//______________________________________________________
//
// @StyledComponent
export default styled(Component)`
  position: relative;

  &:before {
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
  }
  > select {
    cursor: pointer;
    min-width: 16px;
    user-select: none;
    border-radius: 0;
    appearance: none;
    border: 0;
    padding: 6px 0 7px;
    background: none;

    &:focus {
      background: ${COLOR.focus};
      outline: 0;
    }
  }
`;
