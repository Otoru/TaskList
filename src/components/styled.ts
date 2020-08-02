import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
`;

interface Shadow {
  basic: string;
  hover: string;
}

interface Text {
  default: string;
  title: string;
}

interface Colors {
  primary: string;
  secondary: string;
  info: string;
  text: Text;
  success: string;
  warning: string;
  danger: string;
  light: string;
  dark: string;
  grey: string;
}

export interface Theme {
  title: string;
  colors: Colors;
  shadow: Shadow;
}

const light = {
  title: 'light',
  colors: {
    primary: '#ae5cd1',
    secondary: '#fafafa',
    info: '#3298dc',
    text: {
      default: '#363636',
      title: '#ae5cd1',
    },
    success: '#2ecc71',
    warning: '#ff7518',
    danger: '#e74c3c',
    light: '#f5f5f5',
    dark: '#363636',
    grey: '#dbdbdb',
  },
  shadow: {
    basic:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12)',
    hover:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12)',
  },
};

const dark = {
  title: 'dark',
  colors: {
    primary: '#FF00FF',
    secondary: '#303030',
    text: {
      default: '#f5f5f5',
      title: '#EE82EE',
    },
    info: '#3298dc',
    success: '#2ecc71',
    warning: '#ff7518',
    danger: '#e74c3c',
    light: '#f5f5f5',
    dark: '#363636',
    grey: '#4a4a4a',
  },
  shadow: {
    basic:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12)',
    hover:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12)',
  },
};

export const themes = { light, dark };
