import { FC, ReactNode, memo } from "react";
import { IconButton } from "@mui/material";
import { InputBaseProps } from "@mui/material/InputBase";
import { InputFill } from "../../enums";
import { Input as InputStyled, Wrapper } from "./index.style";

interface InputPropsCus extends InputBaseProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fill?: InputFill;
}

export const Input: FC<InputPropsCus> = memo(
  ({ iconLeft, iconRight, fill, ...rest }) => {
    return (
      <Wrapper
        className={`input-${fill} ${iconLeft ? "icon-left" : ""} ${
          iconRight ? "icon-right" : ""
        }`}
      >
        {iconLeft ? <IconButton disabled>{iconLeft}</IconButton> : ""}
        <InputStyled {...rest} />
        {iconRight ? <IconButton disabled>{iconRight}</IconButton> : ""}
      </Wrapper>
    );
  }
);

Input.defaultProps = {
  fill: InputFill.DEFAULT,
  iconLeft: "",
  iconRight: "",
};
