export enum Fonts {
  Regular = "SourceSansPro-Regular",
  SemiBold = "SourceSansPro-SemiBold",
  Bold = "SourceSansPro-Bold",
  Italic = "SourceSansPro-Italic",
}

const Typography = {
  h1: {
    fontFamily: Fonts.Bold,
    fontSize: 48,
    lineHeight: 48,
    letterSpacing: 0,
  },

  h2: {
    fontFamily: Fonts.Bold,
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
  },

  h3: {
    fontFamily: Fonts.Bold,
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: 0.1,
  },

  h4: {
    fontFamily: Fonts.Bold,
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0.1,
  },

  h5: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.1,
  },

  h6: {
    fontFamily: Fonts.Bold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
  },

  subHeading: {
    fontFamily: Fonts.Regular,
    fontSize: 20,
    lineHeight: 24,
  },

  bodyRegular: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },

  bodySemiBold: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontFamily: Fonts.SemiBold,
  },

  bodyItalic: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontFamily: Fonts.Italic,
  },

  subtextRegular: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.15,
  },

  subtextSemiBold: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.15,
    fontFamily: Fonts.SemiBold,
  },

  subtextBold: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.15,
    fontFamily: Fonts.Bold,
  },

  label: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.25,
  },
};

export const MaxFontSizeMultiplier: { [key in TypographyLiterals]: number } = {
  h1: 1.15,
  h2: 1.25,
  h3: 1.15,
  h4: 1.15,
  h5: 1.2,
  h6: 1.45,
  subHeading: 1.2,
  bodyRegular: 1.45,
  bodySemiBold: 1.45,
  bodyItalic: 1.45,
  subtextRegular: 1.5,
  subtextSemiBold: 1.5,
  subtextBold: 1.5,
  label: 1.6,
};

export type TypographyLiterals = keyof typeof Typography;
export default Typography;
