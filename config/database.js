module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "postgres://ahbhenollewmqy:e6a9c3fbddd00333bb9452d62ceb7521869ec973a34f283d4399a069a91a7390@ec2-44-194-167-63.compute-1.amazonaws.com:5432/d7u6gegnmbet3d"),
        //port: env.int("DATABASE_PORT", 5433),
        //database: env("DATABASE_NAME", "texap-api"),
        //username: env("DATABASE_USERNAME", "postgres"),
        //password: env("DATABASE_PASSWORD", "dbst4862"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});

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
