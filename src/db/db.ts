import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
	connectionLimit: 10,
	host: process.env.DB_HOST!,
	user: process.env.DB_USER!,
	password: process.env.DB_PASSWORD!,
	database: process.env.DB_DATABASE!	
});


// Prueba de conexión
pool.getConnection((err, connection) => {
	if (err) {
		console.error('Error connecting to the database', err);
		process.exit(0);
	}
	console.log('Connected to the database');
	connection.release();
});

export default pool;