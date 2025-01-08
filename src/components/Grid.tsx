import styled from '@emotion/styled';
import type { Style } from '../types';

interface Props extends Style {
  container?: boolean;
  gap?: number;
  colGap?: number;
  rowGap?: number;

  onSubmit?: () => void;
}

export const Grid = styled.div<Props>`
  box-sizing: border-box;
  display: grid;

  ${props => (props.gap ? `gap: ${props.gap}px;` : '')}
  ${props => (props.colGap ? `grid-column-gap: ${props.colGap}px;` : '')}
  ${props => (props.rowGap ? `grid-row-gap: ${props.rowGap}px;` : '')}
  ${props => props.sx}
`;
