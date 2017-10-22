"use strict";
exports.__esModule = true;
exports.config = require('../config.json');
if (!exports.config.database)
    exports.config.database = {};
if (exports.config.database.isVolatile === undefined)
    exports.config.database.isVolatile = false;
