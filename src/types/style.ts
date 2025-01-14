import type { SerializedStyles } from '@emotion/react';
export type TSerializedStyle =
  | SerializedStyles
  | { readonly [key in string]: string };
export interface Style {
  sx?: TSerializedStyle;
}
