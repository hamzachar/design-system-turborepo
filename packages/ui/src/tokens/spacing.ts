export const spacing = {
  0: "0",
  px: "1px",
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px
  11: "2.75rem", // 44px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  60: "15rem", // 240px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
} as const;

export type Spacing = keyof typeof spacing;

// Size presets for common component sizes
export const sizes = {
  icon: {
    sm: spacing[4], // 16px
    md: spacing[5], // 20px
    lg: spacing[6], // 24px
    xl: spacing[8], // 32px
  },
  button: {
    sm: spacing[8], // h-8 (32px)
    md: spacing[10], // h-10 (40px)
    lg: spacing[12], // h-12 (48px)
    xl: spacing[14], // h-14 (56px)
  },
  input: {
    sm: spacing[8], // h-8 (32px)
    md: spacing[10], // h-10 (40px)
    lg: spacing[12], // h-12 (48px)
  },
  border: {
    thin: "1px",
    default: "2px",
    thick: "3px",
  },
  radius: {
    sm: spacing[1], // 4px
    md: spacing[2], // 8px (rounded-lg in Tailwind)
    lg: spacing[3], // 12px
    xl: spacing[4], // 16px
    full: "9999px",
  },
  stroke: {
    thin: "1",
    default: "1.5",
    thick: "2",
    bold: "3",
    extraBold: "4",
  },
} as const;

// Numeric values for SVG attributes (width, height, strokeWidth)
export const svgSizes = {
  icon: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  },
} as const;
