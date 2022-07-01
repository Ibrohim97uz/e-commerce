import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import Categories from "../../components/categories";
import ProductList from "../../components/products";
import Search from "../../components/search";
import FoundProductList from "../../components/found-product-list";
import { GetProducts } from "../../hooks/api";

const SearchField = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const { data, isLoading, refetch } = GetProducts({
    name: searchInput,
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="default" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            ></IconButton>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Categories />
            </Box>
            <SearchField>
              <Search
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </SearchField>
          </Toolbar>
        </AppBar>
      </Box>

      <ProductList searchInput={searchInput} />

      <FoundProductList data={data} searchInput={searchInput} />
    </>
  );
};

export default Home;
