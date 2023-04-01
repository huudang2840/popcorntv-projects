const responseWithData = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};

const error = (res) =>
  responseWithData(res, 500, {
    status: 500,
    message: "Oops! Some things wrong!!",
  });

const badrequest = (res) =>
  responseWithData(res, 500, {
    status: 500,
    message: "Oops! Some things wrong!!",
  });
