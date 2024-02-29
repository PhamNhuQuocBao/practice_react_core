import { styled } from "@mui/material/styles";
import { Button as ButtonMUI } from "@mui/material";

export const Button = styled(ButtonMUI)(({ theme }) => ({
  "&.btn-custom": {
    borderRadius: "12px",
    padding: "12px 20px",
  },
  "&.btn-warning": {
    background: theme.palette.warning.main,
  },
  "&.btn-primary": {
    background: theme.palette.primary.main,
  },
  "&.btn-success": {
    background: theme.palette.success.main,
  },
  "&.Mui-disabled": {
    opacity: 0.5,
  },
  "&.MuiButton-sizeMedium": {
    fontSize: "15px",
  },
}));
