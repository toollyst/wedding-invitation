/**
 * Wedding Theme Colors
 *
 * 웨딩 테마 색상을 중앙 관리합니다.
 * globals.css의 CSS 변수와 동일한 값입니다.
 */

export const WEDDING_COLORS = {
  // Background Colors
  bgBase: '#ffffff',
  bgColor: '#fff8f6',
  bgColorEmphasis: '#ffedea',

  // Primary Colors
  primary: '#e6a19c',
  secondary: '#eacbc7',

  // Text Colors
  textMain: '#5b4b45',
  textSub: '#a4938e',
  textWhite: '#ffffff',

  // Status Colors
  green: '#9cc9a3',
  blue: '#a5b8cc',
  yellow: '#f3c27b',
  red: '#d66e6e',

  // UI Colors
  line: '#eae2de',
} as const;

/**
 * Confetti에서 사용하는 색상 배열
 */
export const CONFETTI_COLORS = [
  WEDDING_COLORS.bgColor,
  WEDDING_COLORS.bgColorEmphasis,
  WEDDING_COLORS.primary,
  WEDDING_COLORS.secondary,
  WEDDING_COLORS.bgBase,
];
