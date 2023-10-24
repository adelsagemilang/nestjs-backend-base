require('dotenv').config();
const { env } = process;

module.exports = {
  DATABASE: {
    HOST: env.POSTGRES_HOST,
    PORT: env.POSTGRES_PORT,
    DBNAME: env.POSTGRES_DB,
    USERNAME: env.POSTGRES_USERNAME,
    PASSWORD: env.POSTGRES_PASSWORD,
  }
}