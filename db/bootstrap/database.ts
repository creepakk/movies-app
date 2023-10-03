import { Dialect, Sequelize } from "sequelize";

const sequelize = new Sequelize(
    <string>process.env.DB_DATABASE,
    <string>process.env.DB_USERNAME,
    <string>process.env.DB_PASSWORD,
    {
        host: <string>process.env.DB_HOST,
        dialect: <Dialect>process.env.DB_DIALECT,
    }
)

export { sequelize }