import styled from 'styled-components';
import { colors } from '../variables';

/**
 * Button
 *
 * Styled Component
 *
 * A UI button that displays either a primary or secondary state based off of params passed in
 *  through props.
 */
export default styled.button`
  background-color: ${({ primary }) => (primary ? colors.blue : 'transparent')};
  border: none;
  border-radius: 4px;
  color: ${({ primary }) => (primary ? colors.white : colors.gray)};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
`;
