import { TextField } from "@mui/material";
import React from "react";
import { GetProducts } from "../../hooks/api";
import { productType } from "../../types";

const Search: React.FC<{ setSearchInput: any; searchInput: string }> = ({
  setSearchInput,
  searchInput,
}) => {
  return (
    <TextField
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      id="outlined-basic"
      label="Search Product"
      variant="outlined"
    />
  );
};
export default Search;
