import { FC, ReactNode, memo } from "react";
import { ButtonProps } from "@mui/material";
import { Button as ButtonStyled } from "./style";
import { ButtonType } from "../../enums";

interface ButtonPropsCus extends ButtonProps {
  text?: string;
  children?: ReactNode;
  buttonType?: ButtonType;
}

export const Button: FC<ButtonPropsCus> = memo(
  ({ text, children, buttonType, ...rest }) => {
    return (
      <ButtonStyled
        {...rest}
        className={`btn-custom btn-${buttonType} flex align-center justify-center gap-2`}
      >
        {children}
        {text}
      </ButtonStyled>
    );
  }
);

Button.defaultProps = {
  buttonType: ButtonType.PRIMARY,
  variant: "contained",
};
