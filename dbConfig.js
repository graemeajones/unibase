const dbConfig = {
  database: process.env.UNIBASE_DB_NAME || 'unibasedb',
  port: process.env.UNIBASE_DB_PORT || 3306,
  host: process.env.UNIBASE_DB_HOST || 'localhost',
  user: process.env.UNIBASE_DB_USER || 'root',
  password: process.env.UNIBASE_DB_PSWD || '',
  namedPlaceholders: true,
};

export default dbConfig;
