// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands');

// This is a great place to put global configuration and behavior that modifies Cypress

// Cypress automatically includes support files before every test file
// You can use this file to set up global configurations and behaviors

// Example: Setting a base URL
Cypress.config('baseUrl', 'http://localhost:3000');

// Example: Setting default timeout
Cypress.config('defaultCommandTimeout', 10000);
