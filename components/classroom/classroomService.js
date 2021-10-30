const pool_query = require("../../utils/db");
const TBL_CLASS = "classes";

module.exports = {
  getAll: () => {
    return pool_query(`select * from ${TBL_CLASS}`);
  },
  add: (name) => {
    return pool_query(`insert into ${TBL_CLASS} (name) values ('${name}');`);
  },
};
