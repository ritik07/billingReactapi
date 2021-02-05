const { updateRavana } = require("../query/ravana/updateRavana");

module.exports = {
  updateRavanaFunction: (req, res) => {
    updateRavana(req.body, (sResponse, iResponseCode) => {
      res.status(200).json({
        success: iResponseCode === 102 ? true : false,
        messagecode: iResponseCode,
        message: sResponse,
      });
    });
  },
};
