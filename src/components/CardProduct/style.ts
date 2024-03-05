import { styled } from "@mui/material";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 320,
  background: "transparent",
  boxShadow: "none",
  position: "relative",
  ":hover": {
    cursor: "pointer",
  },
  ":hover .MuiCardActions-root": {
    display: "flex",
  },
  "& .MuiCardMedia-root": {
    borderRadius: "12px",
    height: "200px",
    objectFit: "cover",
  },
  "& .MuiCardContent-root": {
    padding: 0,
    marginTop: "20px",
  },
  "& .MuiTypography-root": {
    fontSize: "15px",
    fontWeight: 600,
    color: theme.palette.text.secondary,
    fontFamily: "Inter",
  },
  "& .price": {
    background: theme.palette.success.main,
    padding: "4px 8px",
    borderRadius: "6px",
    "&__text": {
      color: theme.palette.text.secondary,
      fontSize: "15px",
      fontWeight: 600,
    },
  },
  "& .rating": {
    "&__text": {
      color: theme.palette.text.secondary,
      fontSize: "15px",
      fontWeight: 600,
    },
    "&__text--grey": {
      color: theme.palette.grey[200],
    },
  },
  "& .MuiCardActions-root": {
    position: "absolute",
    display: "none",
    boxSizing: "border-box",
    top: 0,
    right: 0,
    left: 0,
    height: "200px",
    borderRadius: "12px",
    backgroundColor: theme.palette.background.paper,
    transition: "all 0.3s ease",
    "& .MuiIconButton-root": {
      backgroundColor: theme.palette.background.default,
    },
  },
}));
