# webext-progress-bar

[![npm version](https://img.shields.io/npm/v/webext-progress-bar)](https://npmjs.com/package/webext-progress-bar)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)

> Progress bar component for Chrome extensions -- linear, circular, stepped, indeterminate, and animated progress indicators for MV3.

## Install

```bash
npm install webext-progress-bar
```

## Usage

```typescript
import { ProgressBar } from 'webext-progress-bar';

// Create a linear progress bar inside a container element
const bar = ProgressBar.linear('progress-container', {
  color: '#10B981',
  height: 8,
  rounded: true,
});

// Set progress to a specific percentage (0-100)
bar.set(45);

// Increment progress by a given amount
bar.increment(10); // now at 55%

// Read the current value
console.log(bar.get()); // 55

// Mark as complete (sets to 100% and fades out)
bar.complete();

// Reset back to 0%
bar.reset();

// Create an indeterminate (loading) progress bar
const loader = ProgressBar.indeterminate('loader-container', '#3B82F6');
// Remove it when done
loader.remove();
```

## API

### `ProgressBar` (class)

#### `static linear(containerId: string, options?: { color?: string; height?: number; rounded?: boolean }): ProgressBar`

Creates a determinate linear progress bar and appends it to the specified container.

- **containerId** (`string`) -- The `id` of the container element.
- **options.color** (`string`, default `'#3B82F6'`) -- The fill color of the progress bar.
- **options.height** (`number`, default `6`) -- The height in pixels.
- **options.rounded** (`boolean`, default `true`) -- Whether to use rounded corners.
- **Returns** `ProgressBar` -- A new instance for controlling the progress bar.

#### `static indeterminate(containerId: string, color?: string): HTMLElement`

Creates an indeterminate (continuously animating) progress bar and appends it to the specified container.

- **containerId** (`string`) -- The `id` of the container element.
- **color** (`string`, default `'#3B82F6'`) -- The fill color.
- **Returns** `HTMLElement` -- The progress bar DOM element. Call `.remove()` to destroy it.

#### `set(percent: number): this`

Sets the progress bar to an exact percentage, clamped to the range 0-100.

- **percent** (`number`) -- The target percentage.
- **Returns** `this` -- The instance for chaining.

#### `increment(amount?: number): this`

Increments the current progress value by the given amount.

- **amount** (`number`, default `10`) -- The percentage points to add.
- **Returns** `this` -- The instance for chaining.

#### `get(): number`

Returns the current progress value (0-100).

- **Returns** `number` -- The current percentage.

#### `complete(): void`

Sets progress to 100% and fades the bar out after a short delay.

#### `reset(): this`

Resets progress to 0% and restores full opacity.

- **Returns** `this` -- The instance for chaining.

## License

MIT

## See Also

### Related Zovo Repositories

- [webext-toast-notifications](https://github.com/theluckystrike/webext-toast-notifications) - Toast notifications
- [webext-tooltip](https://github.com/theluckystrike/webext-tooltip) - Tooltip component
- [awesome-chrome-extensions-dev](https://github.com/theluckystrike/awesome-chrome-extensions-dev) - Curated list of Chrome extension development resources

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.
