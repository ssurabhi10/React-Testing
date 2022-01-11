const request = require('supertest');
const app = require('./server.js');

describe('test server', () => {
  let server;

  beforeEach(async () => {
    server = await app.listen(4000);
    global.agent = request.agent(server);
  });

  afterEach(async () => {
    await server.close();
  });

  describe('ice cream flavors', () => {
    test('responds with status 200 the GET method', () => {
      return request(server)
        .get('/scoops')
        .then((res) => {
          expect(res.statusCode).toBe(200);
        });
    });

    test('response has expected number of ice cream flavors, and each has a name and image', () => {
      return request(server)
        .get('/scoops')
        .then((res) => {
          console.log(res, 'res');
          expect(res.body.length).toBe(4);
          res.body.forEach((flavor) => {
            expect(typeof flavor.name).toBe('string');
            expect(typeof flavor.imagePath).toBe('string');
          });
        });
    });
  });

  describe('toppings', () => {
    test('responds with status 200 the GET method', () => {
      return request(server)
        .get('/toppings')
        .then((res) => {
          expect(res.statusCode).toBe(200);
        });
    });

    test('response has expected number of ice cream toppings, and each has a name and image', () => {
      return request(server)
        .get('/toppings')
        .then((res) => {
          expect(res.body.length).toBe(6);
          res.body.forEach((topping) => {
            expect(typeof topping.name).toBe('string');
            expect(typeof topping.imagePath).toBe('string');
          });
        });
    });
  });

  describe('order number generator', () => {
    test('resturn 201 for POST', () => {
      return request(server)
        .post('/order')
        .then((res) => {
          expect(res.statusCode).toBe(201);
        });
    });

    test('returns random order number for POST', () => {
      return request(server)
        .post('/order')
        .then((res) => {
          const orderNumber = res.body.orderNumber;
          expect(orderNumber).toBeLessThan(10000000000);
          expect(orderNumber).toBeGreaterThan(0);
        });
    });
  });
});
