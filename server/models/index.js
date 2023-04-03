const mongoose = require('mongoose');
const User = require('./User');
const env = process.env.NODE_ENV || 'development';
const DB_CONFIG = require('../configs/db');
const dbConfig = env === 'development' ? DB_CONFIG.development : env === 'test' ? DB_CONFIG.test : env === production ? DB_CONFIG.production : null;
const Task = require('./Task');
const RefreshToken = require('./RefreshToken');

mongoose.connect(dbConfig.DB)
.catch(err => {
    console.log('connect failed');
    process.exit(1);
});

module.exports = {
    User, Task, RefreshToken
}