const is_qoddi = process.env.IS_QODDI || false;
const dbConfigQoddi =
  "mysql://freedb_2351_main:qE%6DmaDpeKvTpj@sql.freedb.tech:3306/freedb_comp2350-week2-A01301050";
const dbConfigLocal = "mysql://root:Password@localhost/lab_example"; 
if (is_qoddi) {
  var databaseConnectionString = dbConfigQoddi;
} else {
  var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;
