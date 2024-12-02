// src/setupTests.ts
import '@testing-library/jest-dom'
import { server } from './mocks/server'
import { TextDecoder, TextEncoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any
// MSW server setup

// Establish API mock before all tests
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished
afterAll(() => server.close())
