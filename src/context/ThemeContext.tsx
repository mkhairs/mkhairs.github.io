import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
type Theme = 'dark' | 'light';
interface ThemeContextType { theme: Theme; toggleTheme: () => void; setTheme: (theme: Theme) => void }
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
function savedTheme(): Theme | null {
  try { const value = localStorage.getItem('theme'); return value === 'dark' || value === 'light' ? value : null; } catch { return null; }
}
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<Theme | null>(savedTheme);
  const [system, setSystem] = useState<Theme>(() => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const theme = preference ?? system;
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setSystem(media.matches ? 'dark' : 'light');
    media.addEventListener('change', update); return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark'); document.documentElement.classList.toggle('light', theme === 'light'); document.documentElement.style.colorScheme = theme;
  }, [theme]);
  function setTheme(value: Theme) {
    setPreference(value);
    try { localStorage.setItem('theme', value); } catch { /* Theme switching remains available without storage. */ }
  }
  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark') }}>{children}</ThemeContext.Provider>;
}
export function useTheme() { const context = useContext(ThemeContext); if (!context) throw new Error('useTheme must be used within a ThemeProvider'); return context; }
