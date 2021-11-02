
'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index');

beforeAll(async () => {
    await db.sync();
  });
  

  afterAll(async () => {
    await db.drop();
  });


  describe('Web server', () => {

    test('Should respond with 404 status on a bad route', async () => {

        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    
      });
    test('Should respond with 404 status on a bad method', async () => {

        const response = await mockRequest.put('/');
        expect(response.status).toBe(404);
    
      });


    test('can add a food', async () => {

        const response = await mockRequest.post('/food').send({
          mealName: 'Shawerma',
          mealType: 'Sandwich'
        });
    
        expect(response.status).toBe(201);
    
      });


    test('can get all the food', async () => {

        const response = await mockRequest.get('/food');
    
        expect(response.status).toBe(200);
    
      });

      it('can get a record for a food', async () => {

        const response = await mockRequest.get('/food/1');

        expect(response.status).toBe(200);
    });

    test('can update a record for a food', async () => {

        const response = await mockRequest.put('/food/1');

        expect(response.status).toBe(201);
    });

    test('can delete a record for a food', async () => {

        const response = await mockRequest.delete('/food/1');

        expect(response.status).toBe(204);
    });


    test('can add a cloth', async () => {

        const response = await mockRequest.post('/clothes').send({
          mealName: 'Shawerma',
          mealType: 'Sandwich'
        });
    
        expect(response.status).toBe(201);
    
      });


    test('can get all the clothes', async () => {

        const response = await mockRequest.get('/clothes');
    
        expect(response.status).toBe(200);
    
      });

      it('can get a record for a cloth', async () => {

        const response = await mockRequest.get('/clothes/1');

        expect(response.status).toBe(200);
    });

    test('can update a record for a cloth', async () => {

        const response = await mockRequest.put('/clothes/1');

        expect(response.status).toBe(201);
    });

    test('can delete a record for a cloth', async () => {

        const response = await mockRequest.delete('/clothes/1');

        expect(response.status).toBe(204);
    });
});