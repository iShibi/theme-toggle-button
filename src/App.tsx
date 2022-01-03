import { ThemeToggle } from './components/ThemeToggle';

export function App() {
  return (
    <div id='app'>
      <div className='flex justify-center sm:justify-end sm:pr-4 pt-2'>
        <ThemeToggle />
      </div>
    </div>
  );
}
