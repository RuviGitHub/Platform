import { errorResponse } from "../utils/responseUtil.js";

export const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  errorResponse(res, "INTERNAL SERVER ERROR", 500);
};
