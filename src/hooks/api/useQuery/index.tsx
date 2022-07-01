import { useQuery } from "react-query";
import MainRequest from "../main-request";

const useGeneralApi = (url: string, params?: any) => {
  return useQuery([url, params], async () => MainRequest.get(url, { params }));
};

export default useGeneralApi;
