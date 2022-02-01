/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Colombia',
  id:"COL",
  flag: "https://flagcdn.com/co.svg",
  region: "Americas",
  capital:"Bogotá",
  subregion:"South America",
  area: 1141748,
  population: 50882884,
  lat: 4,
  long: -72,
  activities: []

};


describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});
