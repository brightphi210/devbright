import { useEffect, useState } from 'react';
import Home from "./pages/Home";

function App() {
  const [isDark, setIsDark] = useState<any>(true)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className='bg-gradient-to-r from-stone-950 to-neutral-950 h-screen justify-center flex items-center'>
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div>
      <Home isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

export default App