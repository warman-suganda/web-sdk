import styled from '@emotion/styled';
import { variant } from 'styled-system';

import { ColorVariant, SizeVariant } from '../types';

const colorVariant = (outline?: boolean) =>
  variant({
    variants: {
      primary: {
        borderColor: 'primary',
        backgroundColor: outline ? 'white' : 'primary',
        color: outline ? 'primary' : 'white',
      },
      secondary: {
        borderColor: 'secondary',
        backgroundColor: outline ? 'white' : 'secondary',
        color: outline ? 'secondary' : 'white',
      },
      success: {
        borderColor: 'success',
        backgroundColor: outline ? 'white' : 'success',
        color: outline ? 'success' : 'white',
      },
      danger: {
        borderColor: 'danger',
        backgroundColor: outline ? 'white' : 'danger',
        color: outline ? 'danger' : 'white',
      },
      warning: {
        borderColor: 'warning',
        backgroundColor: outline ? 'white' : 'warning',
        color: outline ? 'warning' : 'white',
      },
      info: {
        borderColor: 'info',
        backgroundColor: outline ? 'white' : 'info',
        color: outline ? 'info' : 'white',
      },
      light: {
        borderColor: 'light',
        backgroundColor: outline ? 'white' : 'light',
        color: 'black',
      },
      dark: {
        borderColor: 'dark',
        backgroundColor: outline ? 'white' : 'dark',
        color: outline ? 'dark' : 'white',
      },
      neutral: {
        borderColor: 'neutral',
        backgroundColor: outline ? 'white' : 'neutral',
        color: outline ? 'neutral' : 'white',
      },
    },
  });

const sizeVariant = variant({
  prop: 'size',
  variants: {
    xs: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      height: '32px',
      padding: '4px',
    },
    sm: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      height: '36px',
      padding: '6px',
    },
    md: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      height: '40px',
      padding: '12px',
    },
    lg: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      height: '44px',
      padding: '12px',
    },
    xl: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      height: '52px',
      padding: '12px',
    },
  },
});

export const ButtonStyle = styled.button`
  &:focus {
    outline: none;
  }
  border: none;
  color: #455a64;
  background: white;
  padding: 0;
  width: 100%;
`;

export const LinkStyle = styled.a`
  &:focus {
    outline: none;
  }
  border: none;
  color: #455a64;
  background: white;
  padding: 0;
  width: 100%;
`;

interface ButtonWrapperProps {
  size?: SizeVariant;
  variant?: ColorVariant;
  bold?: boolean;
  outline?: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${sizeVariant}
  ${(props) => colorVariant(props.outline)}
  
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: 100%;

  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  font-family: 'Avenir';

  ${(props) => (props.bold ? 'font-weight: bold;' : '')}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
