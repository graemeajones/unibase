const dbConfig = {
  database: process.env.SEAT_DB_NAME || 'wasdb',
  port: process.env.SEAT_DB_PORT || 3306,
  host: process.env.SEAT_DB_HOST || 'localhost',
  user: process.env.SEAT_DB_USER || 'root',
  password: process.env.SEAT_DB_PSWD || '',
  namedPlaceholders: true,
};

export default dbConfig;
