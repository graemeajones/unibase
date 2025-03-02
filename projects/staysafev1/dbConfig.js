const dbConfig = {
  database: process.env.STAYSAFEV1_DB_NAME || 'staysafev1db',
  port: process.env.STAYSAFEV1_DB_PORT || 3306,
  host: process.env.STAYSAFEV1_DB_HOST || 'localhost',
  user: process.env.STAYSAFEV1_DB_USER || 'root',
  password: process.env.STAYSAFEV1_DB_PSWD || '',
  namedPlaceholders: true,
};

export default dbConfig;
