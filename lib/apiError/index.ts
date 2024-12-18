import { NextResponse } from "next/server";
import { ZOD_VALIDATION_ERROR } from "../utils/constants";
import { createLogger } from "../logger";

const logger = createLogger("NextApiErrorHandler");

export const NextApiErrorHandler = (
  error: any,
  message = "Something went wrong!",
  status = 500,
) => {
  logger.error(error);

  if (error.cause === ZOD_VALIDATION_ERROR) {
    const validationErrors = JSON.parse(error.message);
    return NextResponse.json(
      {
        message: "Invalid Params",
        status: 400,
        data: [],
        errorMessage: validationErrors[0].message,
        validationErrors,
      },
      { status: 400 },
    );
  }

  // Handle other types of errors...
  return NextResponse.json(
    {
      message: "Something went wrong!",
      status,
      data: [],
      errorMessage: error.message,
    },
    { status },
  );
};
