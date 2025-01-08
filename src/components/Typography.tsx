import React from 'react';
import {
  forwardRef,
  useMemo,
  type PropsWithChildren,
  type MouseEventHandler,
} from 'react';
import styled from '@emotion/styled';
import type { Style } from '../types';

type ComponentType = keyof HTMLElementTagNameMap;

interface Props extends Style, PropsWithChildren {
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  component?: ComponentType;
  gutterSide?: boolean;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  size?: number;
  color?: string;
  weight?: string;
  verticalCenter?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}
/**
 * Typography 컴포넌트는 다양한 종류의 텍스트를 렌더링하는 컴포넌트입니다.
 * @param {Props} props - Typography 컴포넌트에서 사용되는 Props입니다.
 * @param {string} [props.align] - 텍스트의 정렬을 설정합니다. ('center', 'inherit', 'justify', 'left', 'right' 중 하나)
 * @param {React.ReactNode} props.children - 텍스트로 렌더링할 컨텐츠입니다.
 * @param {ComponentType} [props.component] - 텍스트를 렌더링할 HTML 엘리먼트를 설정합니다. (ex: 'h1', 'h2', 'p')
 * @param {boolean} [props.gutterBottom] - 하단 여백을 추가할지 여부를 설정합니다.
 * @param {boolean} [props.noWrap] - 텍스트가 한 줄을 넘어갈 경우 줄바꿈을 하지 않도록 설정합니다.
 * @param {boolean} [props.paragraph] - 단락 형태로 텍스트를 렌더링할지 여부를 설정합니다.
 * @param {() => void} [props.onClick] - 클릭 이벤트 핸들러 함수입니다.
 * @returns {JSX.Element} Typography 컴포넌트의 JSX.Element를 반환합니다.
 */
export const Typography = forwardRef<HTMLElement, Props>(
  (
    {
      align,
      children,
      component,
      sx,
      gutterBottom,
      noWrap,
      size,
      color,
      weight,
      gutterSide,
      paragraph,
      verticalCenter,
      onClick,
    },
    ref,
  ) => {
    const Component = useMemo(() => {
      return styled(component ?? 'p')`
        margin: 0;
        font-family: 'Pretendard';
        ${verticalCenter &&
        `display: flex;
				flex-direction: column;
				justify-content: center;`}

        ${component === 'a' &&
        'text-decoration: none; color: inherit; cursor: pointer;'}
				${gutterBottom && 'margin-bottom: 0.35em;'}
				${gutterSide && 'margin: 0 18px;'}
				${paragraph && 'display: block;'}
				${align && `text-align: ${align};`}
				${noWrap && 'white-space: nowrap;'}
				${size && `font-size: ${size}px;`}
				${color && `color: ${color};`}
				${weight && `font-weight: ${weight};`}
				${onClick && 'cursor: pointer; user-select: none;'}
				${sx}
      ` as React.ElementType;
    }, [component, gutterBottom, paragraph, align, noWrap, sx]);

    return (
      <Component
        ref={ref as React.Ref<HTMLElement>}
        gutterBottom={gutterBottom}
        paragraph={paragraph}
        align={align}
        noWrap={noWrap}
        sx={sx}
        onClick={onClick}
      >
        {children}
      </Component>
    );
  },
);
