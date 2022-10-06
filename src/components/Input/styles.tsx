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

const hoverVariant = variant({
  variants: {
    primary: {
      borderColor: '#28aaeb',
    },
    secondary: {
      borderColor: '#28aaeb',
    },
    danger: {
      borderColor: 'danger',
    },
  },
});

const focusVariant = variant({
  variants: {
    primary: {
      outlineColor: '#28aaeb60',
    },
    secondary: {
      outlineColor: '#28aaeb60',
    },
    danger: {
      outlineColor: 'danger20',
    },
  },
});

const colorVariantContainer = variant({
  variants: {
    primary: {
      backgroundColor: '#ededed',
      borderColor: 'transparent',
      color: '#292929',
      outline: '2px solid',
      outlineColor: '#28aaeb00',
    },
    secondary: {
      backgroundColor: 'white',
      borderColor: '#B2B2B2',
      color: 'black',
      outline: '2px solid',
      outlineColor: '#28aaeb00',
    },
    danger: {
      borderColor: 'danger20',
      backgroundColor: 'rgba(225, 85, 84, 0.1)',
      color: 'danger',
      outline: '2px solid',
      outlineColor: 'danger0',
    },
  },
});

const sizeVariantWrapper = variant({
  prop: 'size',
  variants: {
    xs: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    sm: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    md: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    lg: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    xl: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
});

const sizeVariantContainer = variant({
  prop: 'size',
  variants: {
    xs: {
      padding: '5px 4px 5px 4px',
    },
    sm: {
      padding: '7px 6px 7px 6px',
    },
    md: {
      padding: '9px 8px 9px 8px',
    },
    lg: {
      padding: '11px 12px 11px 12px',
    },
    xl: {
      padding: '13px 14px 13px 14px',
    },
  },
});

interface InputWrapperProps {
  size?: SizeVariant;
}

interface InputContainerProps {
  size?: SizeVariant;
  variant?: ColorVariant;
}

interface InputLabelProps {
  variant: ColorVariant;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${sizeVariantWrapper}
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Avenir';
  size: 14px;
`;

export const InputContainer = styled.div<InputContainerProps>`
  &:hover {
    ${hoverVariant}
  }
  &:focus-within {
    ${hoverVariant}
    ${focusVariant}
  }

  ${sizeVariantContainer}
  ${colorVariantContainer}

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition-property: border-color, outline;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
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
`;

export const LeftAccessoryContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export const RightAccessoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  justify-items: center;
`;
