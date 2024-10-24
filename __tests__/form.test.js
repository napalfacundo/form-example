// __tests__/form.test.js

// Polyfill for TextEncoder and TextDecoder
const { TextEncoder, TextDecoder } = require('util');

// Make TextEncoder and TextDecoder available globally
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Importamos JSDOM para manipular el DOM
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Cargamos el contenido de index.html
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Formulario de prueba', () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('El formulario debería existir', () => {
    const form = document.querySelector('form');
    expect(form).not.toBeNull();
  });

  test('El campo de email debería existir', () => {
    const emailInput = document.querySelector('input[type="email"]');
    expect(emailInput).not.toBeNull();
  });

  test('El botón de submit debería existir', () => {
    const submitButton = document.querySelector('button[type="submit"]');
    expect(submitButton).not.toBeNull();
  });

  test('El campo de email debería tener el atributo "required"', () => {
    const emailInput = document.querySelector('input[type="email"]');
    expect(emailInput.required).toBe(true);
  });
});
