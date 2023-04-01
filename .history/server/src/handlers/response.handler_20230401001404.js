const responseWithData = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};
