/** @jest-environment jsdom */
const {fetch} = require('whatwg-fetch');
global.fetch = fetch;
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from './App';


it('should do something amazing', () => {
	expect(true).toBe(true);
  });

it('should do something amazing', () => {
    expect(true).toBe(false);
});