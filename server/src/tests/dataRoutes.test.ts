// server/src/tests/dataRoutes.test.ts
import request from 'supertest';
import app from '../app';
import DataSet from '../models/DataSet';

describe('Data Routes', () => {
  // Before running tests, clear the DataSet collection to have a known state.
  beforeAll(async () => {
    await DataSet.deleteMany({});
  });

  // Test the GET /api/data endpoint when no datasets exist.
  it('should return an empty array for GET /api/data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0);
  });

  // Test creating a new dataset with POST /api/data.
  it('should create a new dataset with POST /api/data', async () => {
    const newDataset = {
      title: "Test Data",
      description: "A test dataset",
      dataUrl: "https://example.com/data"
    };

    const response = await request(app)
      .post('/api/data')
      .send(newDataset);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.title).toBe(newDataset.title);
    expect(response.body.description).toBe(newDataset.description);
    expect(response.body.dataUrl).toBe(newDataset.dataUrl);
  });
});
