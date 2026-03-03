# webext-progress-bar — Progress Indicators for Extensions

[![npm version](https://img.shields.io/npm/v/webext-progress-bar)](https://npmjs.com/package/webext-progress-bar)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/webext-progress-bar/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-progress-bar/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/webext-progress-bar?style=social)](https://github.com/theluckystrike/webext-progress-bar)

> Linear, indeterminate, increment, complete, and reset progress bars.

**webext-progress-bar** provides beautiful, customizable progress indicators for Chrome extensions. Show loading progress, completion status, and indeterminate states with smooth animations.

Part of the [Zovo](https://zovo.one) developer tools family.

## Features

- ✅ **Linear Progress** - Horizontal progress bar
- ✅ **Indeterminate State** - Animated loading indicator
- ✅ **Increment Support** - Easy value increments
- ✅ **Complete State** - Visual completion indication
- ✅ **Reset Capability** - Reuse progress bars
- ✅ **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install webext-progress-bar
```

## Quick Start

```typescript
import { ProgressBar } from 'webext-progress-bar';

// Create a linear progress bar
const bar = ProgressBar.linear('container', { color: '#10B981' });
bar.set(50).increment(25);
bar.complete();
```

## Usage Examples

### Basic Linear Progress

```typescript
const bar = ProgressBar.linear('progress-container');

// Set value (0-100)
bar.set(25);

// Increment by amount
bar.increment(10);

// Decrement by amount
bar.decrement(5);

// Complete the progress
bar.complete();
```

### Indeterminate Progress

```typescript
const bar = ProgressBar.linear('container', { indeterminate: true });
bar.start(); // Shows animated loading

// Later
bar.stop(); // Stops animation
```

### With Custom Styling

```typescript
const bar = ProgressBar.linear('container', {
  color: '#10B981',           // Progress color
  backgroundColor: '#E5E7EB', // Track color
  height: '8px',              // Bar height
  borderRadius: '4px',        // Corner radius
  animated: true,             // Smooth transitions
});
```

### Circular Progress

```typescript
const bar = ProgressBar.circular('container', {
  size: 64,
  strokeWidth: 4,
  color: '#3B82F6',
});

bar.set(50);
```

## API

### ProgressBar Methods

| Method | Description |
|--------|-------------|
| `ProgressBar.linear(container, options)` | Create linear progress bar |
| `ProgressBar.circular(container, options)` | Create circular progress bar |
| `bar.set(value)` | Set progress value (0-100) |
| `bar.increment(amount)` | Increment progress |
| `bar.decrement(amount)` | Decrement progress |
| `bar.complete()` | Show complete state |
| `bar.reset()` | Reset to 0 |
| `bar.start()` | Start indeterminate animation |
| `bar.stop()` | Stop indeterminate animation |

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| color | string | '#3B82F6' | Progress color |
| backgroundColor | string | '#E5E7EB' | Track color |
| height | string | '4px' | Bar height |
| borderRadius | string | '2px' | Corner radius |
| animated | boolean | true | Enable animations |
| indeterminate | boolean | false | Start in indeterminate mode |

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/progress-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/progress-feature`
7. **Submit** a Pull Request

## Built by Zovo

Part of the [Zovo](https://zovo.one) developer tools family — privacy-first Chrome extensions built by developers, for developers.

## See Also

### Related Zovo Repositories

- [webext-toast-notifications](https://github.com/theluckystrike/webext-toast-notifications) - Toast notifications
- [webext-quick-settings](https://github.com/theluckystrike/webext-quick-settings) - Settings panel
- [chrome-storage-plus](https://github.com/theluckystrike/chrome-storage-plus) - Type-safe storage

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions
- [Zovo Permissions Scanner](https://chrome.google.com/webstore/detail/zovo-permissions-scanner) - Check extension privacy grades

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT — [Zovo](https://zovo.one)

---

*Built by developers, for developers. No compromises on privacy.*
