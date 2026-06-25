const Lead = require('../models/Lead');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get all leads
// @route   GET /api/v1/leads
// @access  Private
exports.getLeads = asyncHandler(async (req, res, next) => {
  // Add pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Lead.countDocuments({ owner: req.user.id });

  // Filtering
  let query;
  const reqQuery = { ...req.query };
  const removeFields = ['select', 'sort', 'page', 'limit'];
  removeFields.forEach(param => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  query = Lead.find(JSON.parse(queryStr)).where('owner').equals(req.user.id);

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  query = query.skip(startIndex).limit(limit);

  const leads = await query;

  // Pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({
    success: true,
    count: leads.length,
    pagination,
    data: leads,
  });
});

// @desc    Get single lead
// @route   GET /api/v1/leads/:id
// @access  Private
exports.getLead = asyncHandler(async (req, res, next) => {
  const lead = await Lead.findById(req.params.id).where('owner').equals(req.user.id);

  if (!lead) {
    return next(
      new ErrorResponse(`Lead not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: lead,
  });
});

// @desc    Create new lead
// @route   POST /api/v1/leads
// @access  Private
exports.createLead = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.owner = req.user.id;

  const lead = await Lead.create(req.body);

  res.status(201).json({
    success: true,
    data: lead,
  });
});

// @desc    Update lead
// @route   PUT /api/v1/leads/:id
// @access  Private
exports.updateLead = asyncHandler(async (req, res, next) => {
  let lead = await Lead.findById(req.params.id).where('owner').equals(req.user.id);

  if (!lead) {
    return next(
      new ErrorResponse(`Lead not found with id of ${req.params.id}`, 404)
    );
  }

  lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: lead,
  });
});

// @desc    Delete lead
// @route   DELETE /api/v1/leads/:id
// @access  Private
exports.deleteLead = asyncHandler(async (req, res, next) => {
  const lead = await Lead.findById(req.params.id).where('owner').equals(req.user.id);

  if (!lead) {
    return next(
      new ErrorResponse(`Lead not found with id of ${req.params.id}`, 404)
    );
  }

  await lead.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});