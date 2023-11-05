export const colors = {
  gray100: '#4D565D',
  gray200: '#72818D',
  gray300: '#9DADBB',
  gray400: '#B2C1CD',
  gray500: '#757575',
  gray600: '#CDD6DE',
  gray700: '#ECEFF1',
  gray800: '#72818B',

  blue100: '#004876',
  blue200: '#006CB2',
  blue300: '#0096ED',
  blue400: '#00AEF3',
  blue500: '#6CC8F7',
  blue600: '#289AEF',
  blue700: '#3D8CD8',

  green100: '#005F56',
  green200: '#009182',
  green300: '#1FBFAE',
  green400: '#1FD1C2',
  green500: '#7DE1D6',

  yellow100: '#845C1E',
  yellow200: '#C68B2E',
  yellow300: '#FFB748',
  yellow400: '#FFCB71',
  yellow500: '#FFDDA0',

  red100: '#870017',
  red200: '#CB0026',
  red300: '#FF003A',
  red400: '#FF3569',
  red500: '#FF7D9C',

  white: '#FFFFFF',
  black: '#000000',
};

const semanticColors = {
  primaryBackground: colors.white,
  primaryNavigationBackground: colors.green300,
  inputPlaceholder: colors.gray500,
  inputLabel: colors.gray500,
  inputText: colors.gray500,
  primaryButton: colors.blue600,
};

const sizes = {
  components: {
    headerheight: '50px',
    navigationheight: '50px',
  },
  screen: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  borderRadius: {
    regular: '5px',
    rounded: '50%',
  },
};

const typography = {
  fontWeight: {
    light: '300',
    regular: '400',
    semibold: '600',
    bold: '700',
  },
  fontSize: {
    regular: '1rem',
    small: '0.875rem',
  },
};

const base = {
  colors,
  semanticColors,
  sizes,
  typography,
};

export default base;
