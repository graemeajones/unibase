const dbConfig = {
  database: process.env.EVENTBOOKING_DB_NAME || 'eventbookingdb',
  port: process.env.EVENTBOOKING_DB_PORT || 3306,
  host: process.env.EVENTBOOKING_DB_HOST || 'localhost',
  user: process.env.EVENTBOOKING_DB_USER || 'root',
  password: process.env.EVENTBOOKING_DB_PSWD || '',
  namedPlaceholders: true,
};

export default dbConfig;
