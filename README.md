# webext-progress-bar — Progress Indicators for Extensions
> **Built by [Zovo](https://zovo.one)** | `npm i webext-progress-bar`

Linear, indeterminate, increment, complete, and reset progress bars.

```typescript
import { ProgressBar } from 'webext-progress-bar';
const bar = ProgressBar.linear('container', { color: '#10B981' });
bar.set(50).increment(25);
bar.complete();
```
MIT License
