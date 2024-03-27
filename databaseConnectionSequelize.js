const is_qoddi = process.env.IS_QODDI || false;
const dbConfigQoddi =
  "mysql://freedb_2350_main:w1c4poka4*x4w32t@ sql.freedb.tech:3306/ freedb_comp2350-A87654321";
const dbConfigLocal = "mysql://root:Password@localhost/lab_example";
if (is_qoddi) {
  var databaseConnectionString = dbConfigQoddi;
} else {
  var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;
