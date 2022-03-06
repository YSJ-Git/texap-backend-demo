const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production'){
    return {
      defaultConnection: 'default',
      connections: {
        default:{
          connector:'bookshelf',
          settings: {
            client:'postgres',
            host: config.host,
          port: config.port,
          database: config.database,
          username: config.user,
          password: config.password
          }
          
        },
        options: {
          ssl: false
        }
      }
    }
  }

  return {
      defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5433),
        database: env("DATABASE_NAME", "texap-api"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "dbst4862"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
  }
};

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "postgres",
//         host: env("DATABASE_HOST", "127.0.0.1"),
//         port: env.int("DATABASE_PORT", 5433),
//         database: env("DATABASE_NAME", "texap-api"),
//         username: env("DATABASE_USERNAME", "postgres"),
//         password: env("DATABASE_PASSWORD", "dbst4862"),
//         ssl: env.bool("DATABASE_SSL", false),
//       },
//       options: {},
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "mysql",
//         host: env("DATABASE_HOST", "127.0.0.1"),
//         port: env.int("DATABASE_PORT", 3306),
//         database: env("DATABASE_NAME", "texap"),
//         username: env("DATABASE_USERNAME", "root"),
//         password: env("DATABASE_PASSWORD", "dbst4862"),
//         ssl: env.bool("DATABASE_SSL", false),
//       },
//       options: {},
//     },
//   },
// });
