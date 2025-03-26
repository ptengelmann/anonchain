// server/src/tests/authRoutes.test.ts
import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';

describe('Authentication Endpoints', () => {
  // Optionally, you can add beforeAll hooks here to prepare test data

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'TestPass123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
  });

  it('should login the user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'TestPass123'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  afterAll(async () => {
    // Close the Mongoose connection after all tests finish
    await mongoose.connection.close();
  });
});
