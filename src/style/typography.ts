export enum Fonts {
  Regular = "source-sans-regular",
  SemiBold = "source-sans-semibold",
  Bold = "source-sans-bold",
  Italic = "source-sans-italic",
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
    fontWeight: "600",
  },

  bodyItalic: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontStyle: "italic",
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
    fontWeight: "600",
  },

  subtextBold: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.15,
    fontWeight: "bold",
  },
  label: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.25,
  },
};

export type TypographyLiterals = keyof typeof Typography;
export default Typography;
