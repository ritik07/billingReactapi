const { getRavana } = require("../query/ravana/getRavanQuery");

module.exports = {
  getRavanaFunction: (req, res) => {
    getRavana(req.params, (iResponseCode, sResponse, result) => {
      console.log("result", result);
      res.status(200).json({
        success: iResponseCode === 100 ? true : false,
        messagecode: iResponseCode,
        message: sResponse,
        data: result,
      });
    });
  },
};
