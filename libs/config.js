module.exports = app => {
    if (process.env.HEROKU_POSTGRESQL_MAUVE_URL) {
        // the application is executed on Heroku ... use the postgres database
        sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_MAUVE_UR, {
            dialect: 'postgres',
            protocol: 'postgres',
            port: match[4],
            host: match[3],
            logging: true //false
        })
    } else {
        const env = process.env.NODE_ENV;
        if (env) {
            return require(`./config.${env}.js`);
        }
        return require("./config.development.js");

    }
};