const pool = require("../../database");

exports.insertRavana = async (data, callback) => {
  console.log("data", data);
  const sName = data.sName === undefined ? "" : data.sName;
  const sBatteryType = data.sBatteryType === undefined ? 0 : data.sBatteryType;
  const iBillNo = data.iBillNo === undefined ? "" : data.iBillNo;
  const sDate = data.sDate === undefined ? 0 : data.sDate;

  let bIsValid = true,
    sResponse = "Record Added successfully",
    iResponseCode = 101;

  try {
    // if (sPartyName.length <= 1 || sPartyName.length > 250) {
    //   bIsValid = false;
    //   sResponse = "Minimum required Party Name is 2 and maximum is 250";
    //   iResponseCode = 104;
    // } else if (iMLNO === 0) {
    //   bIsValid = false;
    //   sResponse = "Minimum required MLNO length is 1 and maximum is 250";
    //   iResponseCode = 104;
    // } else if (sAddress.length < 1 || sAddress.length > 250) {
    //   bIsValid = false;
    //   sResponse = "Minimum required Address length is 1 and maximum is 250";
    //   iResponseCode = 104;
    // }

    if (bIsValid) {
      await pool.query(
        `INSERT INTO KTC 
            (
                name, 
                billno, 
                batterytype,
                date,
            ) 
            VALUES 
            ( 
                '${sName}', 
                 ${iBillNo}, 
                '${sBatteryType}', 
                '${sDate}' 
            );`
      );
    }
  } catch (e) {
    bIsValid = false;
    sResponse = e.toString();
    iResponseCode = 1000;
  }
  return callback(sResponse, iResponseCode);
};
