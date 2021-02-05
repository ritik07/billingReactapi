const pool = require("../../database");

exports.updateRavana = async (data, callback) => {
  console.log("data", data);
  const sName = data.sName === undefined ? "" : data.sName;
  const sBatteryType = data.sBatteryType === undefined ? 0 : data.sBatteryType;
  const iBillNo = data.iBillNo === undefined ? "" : data.iBillNo;
  const sDate = data.sDate === undefined ? 0 : data.sDate;

  const id = data.id;

  let bIsValid = true,
    sResponse = "Record Updated successfully",
    iResponseCode = 102;

  try {
    if (bIsValid) {
      await pool.query(
        `UPDATE KTC 
         SET
         name = '${sName}', 
         billno = ${iBillNo}, 
         date = '${sDate}', 
         batterytype = '${sBatteryType}'
         WHERE id = ${id};`
      );
    }
  } catch (e) {
    bIsValid = false;
    sResponse = e.toString();
    iResponseCode = 1000;
  }
  return callback(sResponse, iResponseCode);
};
