import styled from '@emotion/styled';
import { variant } from 'styled-system';

import { ColorVariant, SizeVariant } from '../types';

const colorVariantLabel = variant({
  variants: {
    primary: {
      color: '#292929',
    },
    secondary: {
      color: 'black',
    },
    danger: {
      color: 'danger',
    },
  },
});

const colorVariantContainer = variant({
  variants: {
    primary: {
      backgroundColor: '#ededed',
      borderColor: 'transparent',
      color: '#292929',
    },
    secondary: {
      backgroundColor: 'white',
      borderColor: '#B2B2B2',
      color: 'black',
    },
    danger: {
      borderColor: 'danger',
      backgroundColor: 'rgba(225, 85, 84, 0.1)',
      color: 'danger',
    },
  },
});

const sizeVariantWrapper = variant({
  prop: 'size',
  variants: {
    xs: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      height: '32px',
    },
    sm: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      height: '36px',
    },
    md: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      height: '40px',
    },
    lg: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      height: '44px',
    },
    xl: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      height: '52px',
    },
  },
});

const sizeVariantContainer = variant({
  prop: 'size',
  variants: {
    xs: {
      paddingTop: '5px',
      paddingBottom: '5px',
      paddingLeft: '4px',
      paddingRight: '4px',
    },
    sm: {
      paddingTop: '7px',
      paddingBottom: '7px',
      paddingLeft: '6px',
      paddingRight: '6px',
    },
    md: {
      paddingTop: '9px',
      paddingBottom: '9px',
      paddingLeft: '8px',
      paddingRight: '8px',
    },
    lg: {
      paddingTop: '11px',
      paddingBottom: '11px',
      paddingLeft: '12px',
      paddingRight: '12px',
    },
    xl: {
      paddingTop: '13px',
      paddingBottom: '13px',
      paddingLeft: '14px',
      paddingRight: '14px',
    },
  },
});

interface InputWrapperProps {
  size?: SizeVariant;
}

interface InputContainerProps {
  size?: SizeVariant;
  variant?: ColorVariant;
  outline?: boolean;
}

interface InputLabelProps {
  variant: ColorVariant;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${sizeVariantWrapper}
  display: flex;
  flex-direction: column;
  font-family: 'Avenir';
  size: 14px;
  /* background-color: rgba(255, 0, 0, 10%); */
`;

export const InputContainer = styled.div<InputContainerProps>`
  ${sizeVariantContainer}
  ${colorVariantContainer}
  border-width: 1px;
  border-style: solid;
  /* border-color: #B2B2B2;
  color: black;
  background-color: white; */
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputStyle = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  line-height: 22px;
  font-style: normal;
  font-size: 16px;
  margin-left: 16px;
  color: inherit;
`;

export const InputLabel = styled.div<InputLabelProps>`
  ${colorVariantLabel}
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const LeftAccessoryContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  margin-right: 16px;
`;
