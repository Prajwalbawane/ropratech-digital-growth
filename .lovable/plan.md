

## Upgrade "Our Services" Section Heading Color

### Problem
The current `.gradient-text` uses a blue-to-purple gradient (`220deg blue -> 280deg purple`) which looks generic. The section headings deserve a richer, more premium feel.

### Solution
Upgrade the `.gradient-text` class in `src/index.css` to use a more vibrant, multi-stop gradient that feels modern and eye-catching — think deep indigo to electric blue to a touch of cyan/teal. This will affect all section headings site-wide (Services, Why Choose Us, Portfolio, Payment, Contact) giving them a consistent premium look.

### Technical Changes

**File: `src/index.css`**
- Update the `.gradient-text` class gradient from the current 2-color blue-purple to a richer 3-stop gradient: deep indigo → vibrant blue → cyan accent
- Update the CSS custom properties `--gradient-start`, `--gradient-mid`, `--gradient-end` for both light and dark modes to more visually striking values

**Updated gradient values (light mode):**
- `--gradient-start`: Deep indigo (240, 85%, 45%)
- `--gradient-mid`: Vibrant blue (215, 90%, 55%)  
- `--gradient-end`: Cyan-teal accent (190, 85%, 48%)

**Updated `.gradient-text` class:**
```css
.gradient-text {
  background: linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-mid)), hsl(var(--gradient-end)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

This gives all headings a rich, flowing indigo-to-cyan sweep that feels premium and modern — the kind of gradient you'd see on top agency sites.

