// middleware/validatePagination.js

const validatePagination = (req, res, next) => {
  const { page, limit } = req.query;

  if (page && (isNaN(page) || page <= 0)) {
    return res.status(400).json({
      message: "Page must be a positive number"
    });
  }

  if (limit && (isNaN(limit) || limit <= 0)) {
    return res.status(400).json({
      message: "Limit must be a positive number"
    });
  }

  next();
};

export default validatePagination;
