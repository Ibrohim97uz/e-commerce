import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { GetCategories } from "../../hooks/api";
import { useDispatch } from "react-redux";
import { categoryAction } from "../redux/actions/category";
import { useSelector } from "react-redux";
import { category } from "../../types";
import usePaginationWithUrl from "../../hooks/usePaginationWithUrl";

const Categories: React.FC = () => {
  const { data, isLoading } = GetCategories();
  const dispatch = useDispatch();
  const { setPage } = usePaginationWithUrl();

  const currentCategory = useSelector(
    (data: category) => data?.selectedCategory
  );

  const handleChangeCategory = (e: any) => {
    dispatch(categoryAction("CATEGORY", e.target.value));
    setPage(1);
  };

  if (isLoading) return <h1>loading...</h1>;

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
      <InputLabel id="demo-select-medium">List</InputLabel>
      <Select
        labelId="demo-select-medium"
        id="demo-select-medium"
        value={currentCategory || "all"}
        label="Age"
        onChange={handleChangeCategory}
      >
        <MenuItem value="all">All</MenuItem>
        {data?.data.map((category: string, id: number) => {
          return (
            <MenuItem key={id} value={category}>
              {category}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default Categories;
