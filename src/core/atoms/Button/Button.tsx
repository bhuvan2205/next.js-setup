import React, { ButtonHTMLAttributes } from "react";

const Button = ({
  buttonName,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { buttonName: string }) => {
  return <button {...rest}>{buttonName}</button>;
};

export default Button;
