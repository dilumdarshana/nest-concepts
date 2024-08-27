const config = {
  synchronize: false,
  migrations: ['migrations/*js'],
  cli: {
    migrationsDir: 'migrations'
  }
}

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(config, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['*/**/*.entity.js']
    });
    break;
  case 'test':
    Object.assign(config, {
      synchronize: true,
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['*/**/*.entity.ts']
    });
    break;
  case 'production':
    break;
  default:
    throw new Error('Invalid NODE_ENV');
}

module.exports = config;
