import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";

import { useParams } from "react-router-dom";
import { GetProductById } from "../../hooks/api";

const ProductId: React.FC = () => {
  const params = useParams();
  const { data, isLoading } = GetProductById(params.id || "0");

  if (isLoading) return <h1>loading</h1>;

  return (
    <Grid mt="100px" container>
      <Grid alignItems="center" justifyContent="center" sm={12} md={6} item>
        <ImageList
          sx={{ width: "90%", margin: "0 auto", height: 450 }}
          cols={3}
          rowHeight={164}
        >
          {data?.data?.images.map((item: string, id: number) => (
            <ImageListItem key={id}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={item}
                srcSet={item}
                alt={item}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid sm={12} md={6} item>
        <Typography variant="h5">Name: {data?.data?.title}</Typography>
        <Typography mt="20px" variant="h5">
          Description: {data?.data?.description}
        </Typography>
        <Typography mt="20px" variant="h5">
          Price: {data?.data?.price}
        </Typography>
        <Typography mt="20px" variant="h5">
          Discount Percentage:{data?.data?.discountPercentage}
        </Typography>
        <Typography mt="20px" variant="h5">
          Rating: {data?.data?.rating}
        </Typography>
        <Typography mt="20px" variant="h5">
          Stock: {data?.data?.stock}
        </Typography>
        <Typography mt="20px" variant="h5">
          Brand: {data?.data?.brand}
        </Typography>
        <Typography mt="20px" variant="h5">
          Category: {data?.data?.category}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductId;
