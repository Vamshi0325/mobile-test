import { useTelegram } from './hooks/useTelegram';
import UnsupportedPlatform from './components/UnsupportedPlatform';
import './App.css';

function App() {
  const { isValidTelegram } = useTelegram();

  // Debug output (remove in production)
  console.log('Telegram check:', {
    hasWebApp: !!window.Telegram?.WebApp,
    initData: !!window.Telegram?.WebApp?.initData,
    userAgent: navigator.userAgent
  });

  if (!isValidTelegram) {
    return <UnsupportedPlatform />;
  }

  return (
    <div className="telegram-app">
      <h1>Welcome to Our Bot! 🎉</h1>
      <p>You're using the official Telegram app.</p>
      
      {window.Telegram?.WebApp?.initDataUnsafe?.user && (
        <p>Hello, {window.Telegram.WebApp.initDataUnsafe.user.first_name}!</p>
      )}
    </div>
  );
}

export default App;