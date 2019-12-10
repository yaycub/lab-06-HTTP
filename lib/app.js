const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/'){
      socket.end(createResponse({ body: '<h1>hi</h1>' }));
    }

    if(request.method === 'POST' && request.path === '/echo'){
      socket.end(createResponse({ body: request.body, contentType: 'text/plain' }));
    }

    // socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
