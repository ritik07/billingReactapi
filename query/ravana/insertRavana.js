const pool = require("../../database");

exports.insertRavana = async (data, callback) => {
  console.log("data", data);
  const sPartyName = data.sPartyName === undefined ? "" : data.sPartyName;
  const iMLNO = data.iMLNO === undefined ? 0 : data.iMLNO;
  const sAddress = data.sAddress === undefined ? "" : data.sAddress;
  const iRavanaNo = data.iRavanaNo === undefined ? 0 : data.iRavanaNo;
  const sRavanaWT = data.sRavanaWT;
  const sReceivedWT = data.sReceivedWT;
  const sWTmargin = data.sWTmargin;
  const sVeicleNo = data.sVeicleNo;
  const sVeicleowner = data.sVeicleowner;
  const sContractor = data.sContractor;

  let bIsValid = true,
    sResponse = "Record Added successfully",
    iResponseCode = 101;

  try {
    console.log(sPartyName.length);
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
    console.log(`INSERT INTO mravana 
(
    partyname, 
    mlno, 
    address,
    ravanano,
    ravanawt, 
    receivedwt, 
    wtmargin, 
    vehicleno, 
    contractor, 
    vehicleowner
) 
VALUES 
( 
    '${sPartyName}', 
    '${iMLNO}', 
    '${sAddress}', 
    '${iRavanaNo}', 
    '${sRavanaWT}', 
    '${sReceivedWT}', 
    '${sWTmargin}', 
    '${sVeicleNo}', 
    '${sContractor}', 
    '${sVeicleowner}'
);`);
    if (bIsValid) {
      await pool.query(
        `INSERT INTO mravana 
            (
                partyname, 
                mlno, 
                address,
                ravanano,
                ravanawt, 
                receivedwt, 
                wtmargin, 
                vehicleno, 
                contractor, 
                vehicleowner
            ) 
            VALUES 
            ( 
                '${sPartyName}', 
                ${iMLNO}, 
                '${sAddress}', 
                ${iRavanaNo}, 
                '${sRavanaWT}', 
                '${sReceivedWT}', 
                '${sWTmargin}', 
                '${sVeicleNo}', 
                '${sContractor}', 
                '${sVeicleowner}'
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
