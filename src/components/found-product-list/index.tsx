import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { productType } from "../../types";

const FoundProductList: React.FC<{ data: any; searchInput: any }> = ({
  data,
  searchInput,
}) => {
  let navigate = useNavigate();
  if (!searchInput) return null;

  return (
    <Grid gap="20px" mt="50px" container justifyContent="center">
      {data?.data.products.map((product: productType, id: number) => (
        <Grid key={id} item>
          <Card
            sx={{ maxWidth: 345, height: 350 }}
            onClick={() => {
              navigate(`/item/${product?.id}`);
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={product?.thumbnail}
                alt={product?.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product?.description}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {product?.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FoundProductList;
