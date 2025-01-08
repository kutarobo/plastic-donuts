import type { SerializedStyles } from '@emotion/react';

export interface Style {
  sx?: SerializedStyles | { readonly [key in string]: string };
}
