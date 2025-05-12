const { assert } = require('chai');
const statusServer = require('../src/services/status');
const request = require('supertest');


describe('Status Service', () => {
  it('Get Status', async () => {
    const status = {
      name: "status",
    }

    await statusServer.createStatus(status);

    const result = await statusServer.getStatus(1); 
    assert.include(result, status);
  });
});
