import { styled } from "@mui/material/styles";
import { Button as ButtonMUI } from "@mui/material";

export const Button = styled(ButtonMUI)(({ theme }) => ({
  "&.btn-custom": {
    borderRadius: "12px",
    padding: "12px 20px",
    fontWeight: 600,
    textTransform: "none",
    fontFamily: "Inter",
  },
  "&.btn-warning": {
    background: theme.palette.warning.main,
    "&.MuiButton-outlined": {
      background: "transparent",
      color: theme.palette.warning.main,
    },
    "&.MuiButton-text": {
      background: "transparent",
      color: theme.palette.warning.main,
    },
  },
  "&.btn-primary": {
    background: theme.palette.primary.main,
    "&.MuiButton-outlined": {
      color: theme.palette.text.secondary,
      background: "transparent",
    },
    "&.MuiButton-text": {
      background: "transparent",
    },
  },
  "&.btn-success": {
    background: theme.palette.success.main,
    "&.MuiButton-outlined": {
      color: theme.palette.success.main,
      background: "transparent",
    },
    "&.MuiButton-text": {
      background: "transparent",
      color: theme.palette.success.main,
    },
  },
  "&.Mui-disabled": {
    opacity: 0.5,
  },
  "&.MuiButton-sizeMedium": {
    fontSize: "15px",
  },
  "&.MuiButton-outlined": {
    border: `3px solid ${theme.palette.grey[300]}`,
  },
}));
