import app from '../src/application'
import request from 'supertest';

const recipient = { id: 'df50cac5-293c-490d-a06c-ee26796f850d' }
const visit_id = "5cd753f0-8b66-f8a8-43f7-330f62a3e1d6";

describe('Healthcheck', () => {
  it('Returns a 200', async () => {
    await request(app)
      .get(`/events/${recipient.id}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.status).toContain('success');
      });
  })
});

describe('Return events.', () => {
  it('Event list is returned for an individual', async () => {
    await request(app)
      .get(`/events/${recipient.id}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.total_events).toBeGreaterThan(0);
      });
  })
  it('Events are bundled into visits', async () => {
    await request(app)
      .get(`/events/${recipient.id}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.total_events).toBeGreaterThan(0);
      });
  })
  it('Response has at least 1 visit object', async () => {
    await request(app)
      .get(`/events/${recipient.id}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.daily_events).toHaveProperty(visit_id);
      });
  })
  it('Individual event has a payload', async () => {
    await request(app)
      .get(`/events/${recipient.id}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.daily_events).toHaveProperty([visit_id, 0, 'payload']);
      });
  })
  it('Count of all visits is returned and separated by date', async () => {
    await request(app)
      .get(`/events/${recipient.id}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.visits_by_date[0]).toHaveProperty('date');
      });
  })
  it('Count of all visits returns a number of visits', async () => {
    await request(app)
      .get(`/events/${recipient.id}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.visits_by_date[0].count).toBeGreaterThan(0);
      });
  })
});

describe('Pagination', () => {
  it('First page of results is returned', async () => {
    await request(app)
      .get(`/events/${recipient.id}/?page=0`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.status).toContain('success');
      });
  })
  it('Random page of results can be returned', async () => {
    await request(app)
      .get(`/events/${recipient.id}?page=${Math.floor(Math.random() * 10) + 1}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.status).toContain('success');
      });
  })
  it('A page of results is returned when no params are passed', async () => {
    await request(app)
      .get(`/events/${recipient.id}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.status).toContain('success');
      });
  })
});

describe('Errors.', () => {
  it('Errors if no recipient id is passed', async () => {
    await request(app)
      .get('/events/')
      .expect(404)
  })
  it('Returns no results if an invalid recipient id is passed', async () => {
    await request(app)
      .get('/events/4')
      .expect(200)
      .expect(function(res) {
        expect(res.body.total_events).toBe(0);
      });
  })
});
