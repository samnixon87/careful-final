import app from '../src/application'
import request from 'supertest';

describe('Healthcheck', () => {
  it('Returns a 200', async () => {
    await request(app)
      .get(`/caregiver`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.status).toContain('success');
      });
  })
});
