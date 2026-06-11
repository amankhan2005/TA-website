import { createContext, useContext, useCallback } from 'react';

const ThemeContext = createContext(null);

// Light-only: no toggle, no dark mode, no localStorage reads
export function ThemeProvider({ children }) {
  // Always force light mode on mount
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  const toggle = useCallback(() => {}, []); // no-op
  return (
    <ThemeContext.Provider value={{ theme: 'light', toggle, isDark: false }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
