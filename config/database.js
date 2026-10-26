const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Gagal terhubung ke MySQL:', err.message);
    } else {
        console.log('✅ Terhubung ke database: db_smpn1_rantepao');
        connection.release();
    }
});

module.exports = db.promise();