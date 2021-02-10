const pool = require("../../database");
const moment = require("moment");

exports.updateRavana = async (data, callback) => {
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
  const sDate = data.sDate;

  const iRavanaID = data.iRavanaID;

  let bIsValid = true,
    sResponse = "Record Updated successfully",
    iResponseCode = 102;

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

    // if (bIsValid) {
    //   const checkId = await pool.query(
    //     `select exists (select 1 from mravana where ravanano='${iRavanaNo}' and ravanaid !=${iravanaID})`,
    //     async function getStatus(err, row) {
    //       if (row.length) {
    //         console.log("aaya");
    //         bIsValid = false;
    //         sResponce = "Ravana No. already exits";
    //         iResponceCode = 104;
    //         console.log("Case row was found!");
    //         return bIsValid;
    //       }
    //     }
    //   );
    // }

    // if (bIsValid) {
    //   const checkId = await pool.query(
    //     `select exists (select 1 from mravana where ravanano='${iRavanaNo}' and ravanaid !=${iravanaID})`
    //   );
    //   if (checkId) {
    //     bIsValid = false;
    //     sResponce = "Country Name already exits";
    //     iResponceCode = 104;
    //   }
    // }

    if (bIsValid) {
      await pool.query(
        `UPDATE mravana 
         SET
         PartyName = '${sPartyName}', 
         mlno = '${iMLNO}', 
         address = '${sAddress}', 
         ravanano = '${iRavanaNo}',
         RavanaWT = '${sRavanaWT}',
         ReceivedWT = '${sReceivedWT}',
         WTmargin = '${sWTmargin}',
         vehicleno = '${sVeicleNo}',
         Contractor = '${sContractor}',
         vehicleowner = '${sVeicleowner}',
         date = '${moment(data.sDate).format("DD-MMM-YYYY hh:mm a")}'
         WHERE ravanaid = ${iRavanaID};`
      );
      console.log(`UPDATE mravana 
      SET
      PartyName = '${sPartyName}', 
      mlno = '${iMLNO}', 
      address = '${sAddress}', 
      ravanano = '${iRavanaNo}',
      RavanaWT = '${sRavanaWT}',
      ReceivedWT = '${sReceivedWT}',
      WTmargin = '${sWTmargin}',
      vehicleno = '${sVeicleNo}',
      Contractor = '${sContractor}',
      vehicleowner = '${sVeicleowner}',
      date = '${moment(data.sDate).format("DD-MMM-YYYY hh:mm a")}'
      WHERE ravanaid = ${iRavanaID};`);
    }
  } catch (e) {
    bIsValid = false;
    sResponse = e.toString();
    iResponseCode = 1000;
  }
  return callback(sResponse, iResponseCode);
};
