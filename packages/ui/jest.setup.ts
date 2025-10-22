import "@testing-library/jest-dom";
import * as React from "react";

// Make React available globally for JSX
(global as any).React = React;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock scrollIntoView
if (typeof Element !== "undefined") {
  Element.prototype.scrollIntoView = jest.fn();

  // Mock hasPointerCapture
  Element.prototype.hasPointerCapture = jest.fn(() => false);
  Element.prototype.setPointerCapture = jest.fn();
  Element.prototype.releasePointerCapture = jest.fn();
}

// Mock PointerEvent
(global as any).PointerEvent = class PointerEvent extends Event {
  constructor(type: string, props?: any) {
    super(type, props);
    (this as any).pointerType = props?.pointerType || "mouse";
    (this as any).pointerId = props?.pointerId || 1;
  }
};

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Suppress console output
const noop = () => {};
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(noop);
  jest.spyOn(console, "warn").mockImplementation(noop);
});

afterAll(() => {
  jest.restoreAllMocks();
});
