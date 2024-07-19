const sql = require('mssql');

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true,
    }
};



const connectDB = async () => {
    try {
        await sql.connect(dbConfig);
        console.log('Connected to the database.');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
};

module.exports = { connectDB, sql };