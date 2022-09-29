import React, { forwardRef, Ref, ReactNode } from 'react';

import { ColorVariant, SizeVariant } from '../types';

import {
  ButtonWrapper,
  ButtonContainer,
  ButtonStyle,
  LinkStyle,
} from './styles';

export type TextElement = HTMLButtonElement | HTMLTextAreaElement;

export interface ButtonProps {
  id?: string;
  children?: ReactNode;
  leftAccessory?: ReactNode;
  rightAccessory?: ReactNode;
  disabled?: boolean;
  type?: 'link' | 'button';
  htmlType?: 'button' | 'submit' | 'reset';
  size?: SizeVariant;
  variant?: ColorVariant;
  bold?: boolean;
  outline?: boolean;
  onClick?: () => void;
  onKeyDown?: () => void;
}

const Button = forwardRef<TextElement, ButtonProps>(
  (
    {
      id,
      leftAccessory = null,
      rightAccessory = null,
      disabled = false,
      type = 'button',
      htmlType = 'button',
      size = 'md',
      variant = 'neutral',
      bold = true,
      onClick,
      onKeyDown,
      children,
      outline = false,
    }: ButtonProps,
    ref: Ref<TextElement>,
  ) => {
    const renderButton = () => (
      <ButtonWrapper
        variant={variant}
        size={size}
        bold={bold}
        outline={outline}
      >
        {leftAccessory}
        <ButtonContainer>{children}</ButtonContainer>
        {rightAccessory}
      </ButtonWrapper>
    );

    if (type === 'link') {
      return (
        <LinkStyle
          id={id}
          ref={ref as Ref<HTMLAnchorElement>}
          type={htmlType}
          onClick={onClick}
          onKeyDown={onKeyDown}
        >
          {renderButton()}
        </LinkStyle>
      );
    }

    return (
      <ButtonStyle
        id={id}
        ref={ref as Ref<HTMLButtonElement>}
        type={htmlType}
        disabled={disabled}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        {renderButton()}
      </ButtonStyle>
    );
  },
);

export default Button;
