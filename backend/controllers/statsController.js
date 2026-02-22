const Stats = require("../models/Stats");

// @desc    Get dashboard stats
// @route   GET /api/stats
// @access  Public
exports.getStats = async (req, res, next) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = await Stats.create({});
    }
    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
};

// @desc    Update dashboard stats
// @route   PUT /api/stats
// @access  Private
exports.updateStats = async (req, res, next) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = await Stats.create(req.body);
    } else {
      Object.assign(stats, req.body);
      await stats.save();
    }
    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
};
