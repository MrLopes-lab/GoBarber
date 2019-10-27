module.exports = {
  dialect: 'postgres',
  hot: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'GoBarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
