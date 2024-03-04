import { styled } from "@mui/material";
import { InputBase, Paper } from "@mui/material";

export const Input = styled(InputBase)(() => ({
  padding: "12px",
  width: "100%",
}));

export const Wrapper = styled(Paper)(({ theme }) => ({
  "&.input-default": {
    background: theme.palette.grey[100],
  },
  "&.input-outlined": {
    background: "transparent",
    border: `2px solid ${theme.palette.grey[200]}`,
  },
  "&.input-error": {
    background: theme.palette.warning.main,
    "& .MuiInputBase-input": {
      color: theme.palette.warning.dark,
    },
  },
  "&.input-success": {
    background: theme.palette.background.default,
    border: `2px solid ${theme.palette.grey[300]}`,
  },
  "&.icon-left": {
    "& .MuiInputBase-root": {
      paddingLeft: 0,
    },
  },
  "&.icon-right": {
    "& .MuiInputBase-root": {
      paddingRight: 0,
    },
  },
  display: "flex",
  alignItems: "center",
  boxShadow: "none",
  borderRadius: "12px",
  position: "relative",
  "& .MuiInputBase-input": {
    padding: "0",
  },
}));
