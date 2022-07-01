import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Pagination,
} from "@mui/material";
import { GetProducts } from "../../hooks/api";
import { category, productType } from "../../types";
import usePaginationWithUrl from "../../hooks/usePaginationWithUrl";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProductList: React.FC<{ searchInput: string }> = ({ searchInput }) => {
  let navigate = useNavigate();
  const { page, setPage, limit } = usePaginationWithUrl();
  const currentCategory = useSelector(
    (data: category) => data?.selectedCategory
  );

  const { data, isLoading, refetch } = GetProducts({
    offset: (page - 1) * limit,
    limit: limit * page,
    category: currentCategory === "all" ? null : currentCategory,
  });

  if (isLoading) return <h1>"Loading..."</h1>;
  if (searchInput) return null;
  const handleChange = (e: any, page: number) => {
    setPage(page);
    refetch();
  };

  return (
    <>
      <Grid gap="20px" container justifyContent="center" mt="50px">
        {data?.data.products.map((product: productType, id: number) => (
          <Grid key={id} item>
            <Card
              sx={{ maxWidth: 345, height: 350 }}
              onClick={() => {
                navigate(`/item/${product?.id}`);
              }}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product?.thumbnail}
                  alt={product?.title}
                />
                <CardContent sx={{ overflow: "auto" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product?.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Stack spacing={2} color="secondary">
          <Pagination
            count={Math.ceil(data?.data.count / 3)}
            variant="text"
            color="secondary"
            shape="rounded"
            onChange={handleChange}
            page={page}
          />
        </Stack>
      </Box>
    </>
  );
};

export default ProductList;
