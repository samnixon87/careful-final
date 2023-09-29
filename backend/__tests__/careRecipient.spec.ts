import app from '../src/application'
import request from 'supertest';

describe('Healthcheck', () => {
  it('Returns a 200', async () => {
    await request(app)
      .get('/care-recipient')
      .expect(200)
      .expect(function(res) {
        expect(res.body.status).toContain('success');
      });
  })
});

describe('Returns a list of care recipients', () => {
  it('Response length is > 0', async () => {
    await request(app)
      .get('/care-recipient')
      .expect(200)
      .expect(function(res) {
        expect(res.body.results).toBeGreaterThan(0);
      });
  })
  it('Object is properly formed', async () => {
  await request(app)
    .get('/care-recipient')
    .expect(200)
    .expect(function(res) {
      expect(res.body.care_recipient[0]).toMatchObject({
        id: expect.any(String),
        name: expect.any(String)
      });
    });
  })
  it('Individual Care Recipient has an id', async () => {
    await request(app)
      .get('/care-recipient')
      .expect(200)
      .expect(function(res) {
        expect(res.body.care_recipient[0]).toHaveProperty('id');
      });
  })
  it('Individual Care Recipient has a name', async () => {
    await request(app)
      .get('/care-recipient')
      .expect(200)
      .expect(function(res) {
        expect(res.body.care_recipient[0]).toHaveProperty('name');
      });
  })
});
