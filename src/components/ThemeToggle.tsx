import { useState, type MouseEvent } from 'react';

export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

  const toggleTheme = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setCurrentTheme(newTheme);
  }

  return (
    <button className='bg-gray-900 dark:bg-gray-200 text-gray-50 dark:text-gray-900 font-medium px-4 py-2 mt-2 mr-2 rounded-md shadow-md uppercase active:translate-y-1 transition ease-out duration-200' onClick={(event) => toggleTheme(event)}>{currentTheme}</button>
  );
}

export type ThemeType = 'light' | 'dark';