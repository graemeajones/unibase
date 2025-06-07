const dbConfig = {
  database: process.env.NIMBL_DB_NAME || 'nimbldb',
  port: process.env.NIMBL_DB_PORT || 3306,
  host: process.env.NIMBL_DB_HOST || 'localhost',
  user: process.env.NIMBL_DB_USER || 'root',
  password: process.env.NIMBL_DB_PSWD || '',
  namedPlaceholders: true,
};

export default dbConfig;
