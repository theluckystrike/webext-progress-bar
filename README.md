# webext-progress-bar

[![npm version](https://img.shields.io/npm/v/webext-progress-bar)](https://npmjs.com/package/webext-progress-bar)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

Lightweight progress bar component for Chrome extensions and browser extensions running Manifest V3. Supports linear determinate bars with percentage control and indeterminate loading animations. Zero dependencies, pure DOM, smooth CSS transitions.

INSTALL

```bash
npm install webext-progress-bar
```

USAGE

```typescript
import { ProgressBar } from 'webext-progress-bar';

// Linear determinate bar inside a container element
const bar = ProgressBar.linear('progress-container', {
  color: '#10B981',
  height: 8,
  rounded: true,
});

// Set to a specific percentage (clamped 0-100)
bar.set(45);

// Bump it up by a given amount (default 10)
bar.increment(10); // now at 55

// Read the current value
console.log(bar.get()); // 55

// Mark complete, which sets 100% then fades out
bar.complete();

// Reset back to 0% and restore opacity
bar.reset();
```

Indeterminate loader for unknown-duration tasks:

```typescript
const loader = ProgressBar.indeterminate('loader-container', '#3B82F6');

// When done, remove it from the DOM
loader.remove();
```

API

ProgressBar is the single export. It provides two static factory methods and a set of instance methods on linear bars.

ProgressBar.linear(containerId, options?)

Creates a determinate linear progress bar and appends it to the container element matching the given ID.

Parameters

- containerId (string) -- ID of the target container element.
- options.color (string, default '#3B82F6') -- Fill color.
- options.height (number, default 6) -- Bar height in pixels.
- options.rounded (boolean, default true) -- Rounded corners. When true, border radius is half the height.

Returns a ProgressBar instance.

If the container element is not found in the DOM, the returned instance is inert and method calls on it are safe no-ops.

The bar renders as two nested divs. The outer div gets a light gray (#E5E7EB) background track. The inner fill div transitions width over 0.3s with ease timing.

ProgressBar.indeterminate(containerId, color?)

Creates a continuously animating loading bar and appends it to the container.

Parameters

- containerId (string) -- ID of the target container element.
- color (string, default '#3B82F6') -- Fill color.

Returns an HTMLElement. Call .remove() on it to destroy the bar.

The animation uses a CSS keyframe that slides a 30%-width fill element from left -30% to 100% on a 1.5s ease-in-out infinite loop. The bar height is fixed at 4px.

INSTANCE METHODS

bar.set(percent)

Sets the bar to an exact percentage. The value is clamped to the 0-100 range. Returns this for chaining.

bar.increment(amount?)

Adds amount (default 10) to the current value. Internally calls set, so clamping applies. Returns this.

bar.get()

Returns the current progress value as a number between 0 and 100.

bar.complete()

Sets progress to 100%, then after a 300ms delay fades the entire bar out over 0.3s by transitioning opacity to 0.

bar.reset()

Restores opacity to 1 and sets progress back to 0%. Returns this.

DEFAULTS SUMMARY

- Fill color -- #3B82F6
- Track color -- #E5E7EB
- Linear bar height -- 6px
- Indeterminate bar height -- 4px
- Rounded corners -- on
- Transition duration -- 0.3s ease
- Indeterminate cycle -- 1.5s ease-in-out infinite
- Increment step -- 10

LICENSE

MIT. See LICENSE file.

---

Built at [zovo.one](https://zovo.one)
