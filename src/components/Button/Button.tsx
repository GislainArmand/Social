import React from "react";
import styled, { css } from "styled-components";

interface StyleProps {
  variant: 'plain' | 'filled' | 'outlined' | 'tinted'
}

const StyledButton = styled.button<StyleProps>`
  border-radius: 10px;
  border: none;
  color: #3D6545;  
  padding: 10px 20px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  background: none;
  border: 1px solid transparent;

  ${props => (props.variant === 'plain' || undefined) && css`
    &:hover {
      background-color: #DDF0E1;
    }
  `}

  ${props => (props.variant === 'filled') && css`
    background-color: #3D6545;
    color: white;
    &:hover {
      background-color: #2B4A32;
    }
  `}

  ${props => (props.variant === 'outlined') && css`
    border-color: #3D6545;
    &:hover {
      background-color: #DDF0E1;
    }
  `}

  ${props => (props.variant === 'tinted') && css`
    background-color: #DDF0E1;
    &:hover {
      background-color: #c9e4cf;
    }
  `}
`

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'plain' | 'filled' | 'outlined' | 'tinted'
  fullWidth?: boolean
}

const Button = ({ variant, fullWidth, ...props }: ButtonProps) => {
  return <StyledButton variant={variant} {...props} style={{width: fullWidth ? '100%' : undefined}} />
};

export default Button