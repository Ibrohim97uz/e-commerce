import { actionType } from "../../../types";

export const categoryAction = (type: string, payload: any): actionType => {
  return { type, payload };
};
