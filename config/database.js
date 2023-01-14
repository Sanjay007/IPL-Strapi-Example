const path = require('path');

 module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'dpg-cf14p8p4reb5o40saadg-a.singapore-postgres.render.com'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'ipl'),
          user: env('DATABASE_USERNAME', 'iplp01'),
          password: env('DATABASE_PASSWORD', 'KKMlH4s5QtioVdbYUubDR9xHPXY3Q1x8'),
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    });