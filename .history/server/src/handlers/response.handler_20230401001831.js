const responseWithData = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};

const error = (res) =>
  responseWithData(res, 500, {
    status: 500,
    message: "Oops! Some things wrong!!",
  });

const badRequest = (res, message) =>
  responseWithData(res, 400, {
    status: 400,
    message,
  });

const ok = (res, data) => responseWithData(res, 200, data);

const created = (res, data) => responseWithData(res, 201, data);

const unAuthorize = (res) =>
  responseWithData(res, 401, {
    status: 401,
    message: "Unauthorize!",
  });

const notFound = (res) =>
  responseWithData(res, 401, {
    status: 401,
    message: "Unauthorize!",
  });
