export const sexyMiddleware = (req, res, next) => {
  res.locals.siteName = "Sexiet Site all over the world";
  next();
};
