const CONFIG = {};

CONFIG.port = process.env.PORT || '3600';
CONFIG.db_dialect = process.env.DB_DIALECT || 'mysql';
CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '3306';
CONFIG.db_name = process.env.DB_NAME || 'blog';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || '';

CONFIG.aws_String = process.env.JWT_ENCRYPTION || 'JWT_ENC';

module.exports = CONFIG;