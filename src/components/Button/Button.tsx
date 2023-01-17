import ButtonUnstyled, { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import React from "react";

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  100: '#eaeef2',
  300: '#afb8c1',
  900: '#24292f',
};

const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #3D6545;
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #2B4A32;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    background-color: #3D6545;
    opacity: 0.5;
    cursor: not-allowed;
  }
  `,
);

export interface ButtonProps {
  children?: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <CustomButton disabled>{children}</CustomButton>
};

export default Button