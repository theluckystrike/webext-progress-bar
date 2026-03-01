/**
 * Progress Bar — Linear and circular progress indicators
 */
export class ProgressBar {
    private element: HTMLElement | null = null;
    private fill: HTMLElement | null = null;
    private value = 0;

    /** Create linear progress bar */
    static linear(containerId: string, options?: { color?: string; height?: number; rounded?: boolean }): ProgressBar {
        const bar = new ProgressBar();
        const container = document.getElementById(containerId);
        if (!container) return bar;
        const color = options?.color || '#3B82F6'; const height = options?.height || 6;
        bar.element = document.createElement('div');
        Object.assign(bar.element.style, { width: '100%', height: `${height}px`, background: '#E5E7EB', borderRadius: options?.rounded !== false ? `${height / 2}px` : '0', overflow: 'hidden' });
        bar.fill = document.createElement('div');
        Object.assign(bar.fill.style, { width: '0%', height: '100%', background: color, borderRadius: 'inherit', transition: 'width 0.3s ease' });
        bar.element.appendChild(bar.fill); container.appendChild(bar.element);
        return bar;
    }

    /** Create indeterminate progress bar */
    static indeterminate(containerId: string, color: string = '#3B82F6'): HTMLElement {
        const container = document.getElementById(containerId);
        const el = document.createElement('div');
        Object.assign(el.style, { width: '100%', height: '4px', background: '#E5E7EB', overflow: 'hidden', position: 'relative' });
        const fill = document.createElement('div');
        Object.assign(fill.style, { width: '30%', height: '100%', background: color, position: 'absolute', animation: 'indeterminate 1.5s ease-in-out infinite' });
        const style = document.createElement('style');
        style.textContent = `@keyframes indeterminate { 0% { left: -30%; } 100% { left: 100%; } }`;
        el.appendChild(style); el.appendChild(fill); container?.appendChild(el);
        return el;
    }

    /** Set progress value (0-100) */
    set(percent: number): this {
        this.value = Math.max(0, Math.min(100, percent));
        if (this.fill) this.fill.style.width = `${this.value}%`;
        return this;
    }

    /** Increment progress */
    increment(amount: number = 10): this { return this.set(this.value + amount); }

    /** Get current value */
    get(): number { return this.value; }

    /** Complete (set to 100 and fade out) */
    complete(): void {
        this.set(100);
        if (this.element) setTimeout(() => { if (this.element) { this.element.style.transition = 'opacity 0.3s'; this.element.style.opacity = '0'; } }, 300);
    }

    /** Reset to 0 */
    reset(): this { if (this.element) this.element.style.opacity = '1'; return this.set(0); }
}
