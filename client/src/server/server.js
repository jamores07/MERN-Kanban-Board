// src/server.js
import { createServer } from 'miragejs';
import { boardData } from './data/data';

createServer({
  routes() {
    this.namespace = 'api';

    // Define the initial state
    this.get('/boards', () => boardData);

    // Create a new list
    this.post('/boards', (schema, request) => {
      const newList = JSON.parse(request.requestBody);
      return newList;
    });

    // Update a list
    this.put('/boards/:id', (schema, request) => {
      const updatedList = JSON.parse(request.requestBody);
      return updatedList;
    });

    // Delete a list
    this.delete('/boards/:id', () => {
      return new Response(204, { statusText: 'No Content' });
    });

    // Define other routes as needed
  },
});