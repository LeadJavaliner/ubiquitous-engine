const request = require('supertest');
const nock = require('nock');
const server = require('../src/simple-server.js'); 


// Purpose: Demonstrate that the simple-proxy-server module (simple-server.js) can marshale requests between various REST APIs.
// Description: Test starts up a simple-server on port 5050 and stubs out API call expected responses using Nock.

describe('Proxy Server', () => {
    it('should proxy to SOLID API and return correct response for /solid', async () => {
        const expectedResponse = 'Expected response from SOLID API';

        const solidApi = nock('http://solid-api.com')
            .get('/solid')
            .reply(200, expectedResponse);

        const response = await request(server).get('/solid');

        expect(solidApi.isDone()).toBe(true);
        expect(response.status).toBe(200);
        expect(response.text).toBe(expectedResponse);
    });

    it('should proxy to C# API and return correct response for /csharp', async () => {
        const expectedResponse = 'Expected response from C# API';

        const csharpApi = nock('http://csharp-api.com')
            .get('/csharp')
            .reply(200, expectedResponse);

        const response = await request(server).get('/csharp');

        expect(csharpApi.isDone()).toBe(true);
        expect(response.status).toBe(200);
        expect(response.text).toBe(expectedResponse);
    });

    it('should return 500 and appropriate message for unknown paths', async () => {
        const expectedResponse = 'No target defined for this request';

        const response = await request(server).get('/unknown');

        expect(response.status).toBe(500);
        expect(response.text).toBe(expectedResponse);
    });
});

afterAll((done) => {
    server.close(done);
});
