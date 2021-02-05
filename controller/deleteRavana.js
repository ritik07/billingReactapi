const { deleteRavana } = require("../query/ravana/deleteRavanaQuery");

module.exports = {
  deleteRavanaFuction: (req, res) => {
    deleteRavana(req.body, (sResponse, iResponseCode) => {
      res.status(200).json({
        success: iResponseCode === 103 ? true : false,
        messagecode: iResponseCode,
        message: sResponse,
      });
    });
  },
};
