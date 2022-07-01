import { useNavigate, useLocation } from "react-router-dom";
import useSearchParams from "./useSearchParams";

function usePaginationWithUrl() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = useSearchParams();
  const limit = +searchParams.get("limit") || 3;
  const page = +searchParams?.get("page") || 1;

  const setPage = (val: number) => {
    searchParams.set("page", val);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const setLimit = (val: number) => {
    searchParams.set("limit", val);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return {
    page,
    setPage,
    limit,
    setLimit,
  };
}

export default usePaginationWithUrl;
