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

const ok = (res, data) =>
  responseWithData(res, 200, {
    status: 400,
    message,
  });
