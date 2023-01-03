import React from "react";

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <button style={{padding: 12, backgroundColor: '#066858', color: 'white', borderRadius: 8, border: 'none', fontWeight: 600}}>{props.label}</button>;
};

export default Button