export type IFontWeight = {
  Bold: string;
  SemiBold: string;
  Medium: string;
};

export type IFontSize = {
  xxxs: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
};

export const FontWeight: IFontWeight = {
  Bold: 'Pretendard-Bold',
  SemiBold: 'Pretendard-SemiBold',
  Medium: 'Pretendard-Medium',
};

export const FontSize: IFontSize = {
  xxxs: 12,
  xxs: 14,
  xs: 15,
  s: 16,
  m: 17,
  l: 20,
  xl: 24,
  xxl: 28,
};
