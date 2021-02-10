const pool = require("../../database");

exports.getRavana = async (data, callback) => {
  const IuserID = data.IuserID === undefined ? 0 : data.IuserID;
  let bIsValid = true,
    sResponse = "All Record Found",
    iResponseCode = 100;

  let sSQL = `Select * from mravana `;
  if (IuserID > 0) sSQL = sSQL + `where id=${IuserID}`;

  try {
    pool.query(sSQL, (err, result) => {
      if (err) {
        return callback(1000, err.toString(), null);
      } else {
        if (result.length > 0)
          return callback(iResponseCode, sResponse, result);
        else return callback(99, "No Record Found", result);
      }
    });
  } catch (e) {
    bIsValid = false;
    sResponse = e.toString();
    iResponseCode = 1000;
    return callback(iResponseCode, sResponse, null);
  }
};
