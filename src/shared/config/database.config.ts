export const dbconfig = () => ({
    database: {
        DB_DATABASE: process.env.DB_DATABASE,
        DB_HOST: process.env.DB_HOST,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_PORT: Number(process.env.DB_PORT),
        DB_TYPE: process.env.DB_TYPE,
        DB_USERNAME: process.env.DB_USERNAME,
    },
});
