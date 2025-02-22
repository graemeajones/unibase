import mysql from 'mysql2/promise';

const dbConfig = {
  database: process.env.DB_NAME || 'StaySafe',
  port: process.env.DB_PORT || 3306,
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PSWD || '',
  namedPlaceholders: true,
};

const createDbConnection = async () => {
  try {
    return await mysql.createConnection(dbConfig);
  } catch (error) {
    console.log('Error creating database connection: ' + error.message);
    process.exit();
  }
};

const createDbConnectionPool = () => {
  try {
    return mysql.createPool({
      ...dbConfig,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
  } catch (error) {
    console.log('Error creating database connection: ' + error.message);
    process.exit();
  }
};

export default createDbConnectionPool();
