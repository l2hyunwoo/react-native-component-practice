import { FontSize, FontWeight } from "../info";

export type FontInfo = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
};

export type IFont = {
  Head: {
    m: FontInfo;
    s: FontInfo;
    xs: FontInfo;
  };
  Body: {
    m: FontInfo;
    s: FontInfo;
  };
  Caption: {
    m: FontInfo;
    s: FontInfo;
    xs: FontInfo;
  };
};

const Font: IFont = {
  Head: {
    m: {
      fontFamily: FontWeight.Bold,
      fontSize: FontSize.xl,
      lineHeight: 38,
    },
    s: {
      fontFamily: FontWeight.Bold,
      fontSize: FontSize.l,
      lineHeight: 32,
    },
    xs: {
      fontFamily: FontWeight.SemiBold,
      fontSize: FontSize.m,
      lineHeight: 28,
    },
  },
  Body: {
    m: {
      fontFamily: FontWeight.Medium,
      fontSize: FontSize.m,
      lineHeight: 28,
    },
    s: {
      fontFamily: FontWeight.Medium,
      fontSize: FontSize.s,
      lineHeight: 26,
    },
  },
  Caption: {
    m: {
      fontFamily: FontWeight.Medium,
      fontSize: FontSize.xs,
      lineHeight: 24,
    },
    s: {
      fontFamily: FontWeight.SemiBold,
      fontSize: FontSize.xxs,
      lineHeight: 22,
    },
    xs: {
      fontFamily: FontWeight.Medium,
      fontSize: FontSize.xxxs,
      lineHeight: 20,
    },
  },
};

export default Font;
