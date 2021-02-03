const { insertRavana } = require("../../Query/Ravana/insertRavana");

module.exports = {
  insertRavanaFunction: (req, res) => {
    insertRavana(req.body, (sResponse, iResponseCode) => {
      res.status(200).json({
        success: iResponseCode === 101 ? true : false,
        messagecode: iResponseCode,
        message: sResponse,
      });
    });
  },
};
