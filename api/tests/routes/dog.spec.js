/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dog').expect(200)
    );
  });
});


describe('GET /dog', () => {
  it('should get 200', () => agent.get('/dog').expect(200));
  it('should list 8 dog', (done) => {
      agent
          .get('/dog')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => response.body)
          .then((array) => {
              assert.deepStrictEqual(array.length, 8);
              done();
          });
  });
});


describe('GET /dog?name=nadiaaa', () => {
  it('should can handle query params', () =>
      agent
          .get('/dog?name=nadiaaa')
          .expect('Content-Type', /json/)
          .expect(200));
  it('should can search in our db', () =>
      agent.get('/dog?name=miguel').expect(200));
  it('should res with 404 if the pokemon is not found.', () =>
      agent.get('/dog?name=xuxuxuxuxuxuxuxuux').expect(404));
});

describe('GET /dog/:id', () => {
  it('should get 200', (done) => {
      agent.get('/dog/6').expect(200);
      done();
  });
  it('should res with 404 if the pokemon is not found.', (done) => {
      agent.get('/dog/nounounounounou').expect(404);
      done();
  });
});