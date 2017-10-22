"use strict";
exports.__esModule = true;
var sqlite3 = require("sqlite3");
var path = require("path");
var fs = require("fs");
var Config_1 = require("./Config");
exports.dbPath = path.join(__dirname, 'references.db');
if (Config_1.config.database.isVolatile) {
    try {
        fs.unlinkSync(exports.dbPath);
        console.log(' [o] Database deleted (config.database.isVolatile).');
    }
    catch (ex) {
        console.log(' [!] An error occurred while trying to delete the database (config.database.isVolatile) :', ex);
    }
}
exports.db = new sqlite3.Database(exports.dbPath);
