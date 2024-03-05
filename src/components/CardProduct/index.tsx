import { FC, memo } from "react";
import { StyledCard } from "./style";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardProps, IconButton } from "@mui/material";
import { ProductType } from "../../types";
import StarIcon from "../../assets/icons/star.svg";
import EditIcon from "../../assets/icons/edit.svg";
import TrashIcon from "../../assets/icons/trash.svg";
import ArrowForward from "../../assets/icons/arrowForward.svg";

interface CardPropsCus extends CardProps {
  data: ProductType;
  onForward?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}

export const CardProduct: FC<CardPropsCus> = memo(
  ({ data, onEdit, onDelete, onForward, ...rest }) => {
    return (
      <StyledCard {...rest}>
        <CardMedia
          component="img"
          alt="img product"
          image={data.image}
        ></CardMedia>
        <CardContent>
          <div className="flex justify-between items-start">
            <Typography className="line-clamp-2">{data.title}</Typography>
            <div className="price">
              <span className="price__text">${data.price}</span>
            </div>
          </div>
          <div className="rating flex justify-start items-center gap-1 mt-1">
            <StarIcon />
            <span className="rating__text">
              {data.rating}{" "}
              <span className="rating__text--grey">{`(${data.totalComments})`}</span>
            </span>
          </div>
        </CardContent>
        <div>
          <CardActions className="flex justify-center items-center gap-2">
            <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={onDelete}>
              <TrashIcon />
            </IconButton>
            <IconButton onClick={onForward}>
              <ArrowForward />
            </IconButton>
          </CardActions>
        </div>
      </StyledCard>
    );
  }
);

CardProduct.defaultProps = {
  onForward: () => {},
  onDelete: () => {},
  onEdit: () => {},
};
