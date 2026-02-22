const SiteInfo = require("../models/SiteInfo");

// @desc    Get site info
// @route   GET /api/site-info
// @access  Public
exports.getSiteInfo = async (req, res, next) => {
  try {
    let info = await SiteInfo.findOne();
    if (!info) {
      info = await SiteInfo.create({});
    }
    res.status(200).json({ success: true, data: info });
  } catch (error) {
    next(error);
  }
};

// @desc    Update site info
// @route   PUT /api/site-info
// @access  Private
exports.updateSiteInfo = async (req, res, next) => {
  try {
    let info = await SiteInfo.findOne();
    if (!info) {
      info = await SiteInfo.create(req.body);
    } else {
      Object.assign(info, req.body);
      await info.save();
    }
    res.status(200).json({ success: true, data: info });
  } catch (error) {
    next(error);
  }
};
