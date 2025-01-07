export const COLOR = {
  Primary100: '#307DB8',
  Primary80: '#5997C6',
  Primary70: '#6EA4CD',
  Primary60: '#83B1D4',
  Primary10: '#EAF2F8',

  White100: '#fff',

  Gray100: '#F1F4F5', // FIXME 이거 100 이아니라 10에 해당하는 값인것 같네요. GRAY_1~9 는 Gray10~90 으로 통일시키죠 다른 값처럼.
  Gray60: '#7A7B7D',

  Red100: '#EB3C3C',

  Black100: '#252525',
} as const

export const FONT_SIZE = {
  xLarge: '28px',
  xsLarge: '24px',
  xxsLarge: '20px',
  Large: '16px',
  medium: '14px',
  small: '12px',
} as const

export type ColorType = keyof typeof COLOR

export type FontSizeType = keyof typeof FONT_SIZE
