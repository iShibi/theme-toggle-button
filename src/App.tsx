import { ThemeToggle } from './components/ThemeToggle';

export function App() {
  return (
    <div id='app'>
      <div className='flex justify-center sm:justify-end pt-4'>
        <ThemeToggle />
      </div>
    </div>
  );
}
