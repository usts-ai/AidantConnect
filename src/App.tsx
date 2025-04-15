import { AppProvider } from './context/AppContext';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <AppProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AnimatePresence mode="wait">
          <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <Header />
            <Home />
          </div>
        </AnimatePresence>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
