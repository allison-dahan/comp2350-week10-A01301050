const is_qoddi = process.env.IS_QODDI || false;
const dbConfigQoddi =
  "mysql://freedb_2351_main:qE%6DmaDpeKvTpj@sql.freedb.tech:3306/freedb_comp2350-week2-A01301050";

// ? has to be encoded as %3F

const dbConfigLocal = "mysql://root:Peachykeen23%3F@localhost:3306/week10"; 
if (is_qoddi) {
  var databaseConnectionString = dbConfigQoddi;
} else {
  var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;
