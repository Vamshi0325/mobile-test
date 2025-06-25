import { useTelegram } from "./hooks/useTelegram";
import UnsupportedPlatform from "./components/UnsupportedPlatform";
import "./App.css";

function App() {
  const { isValidTelegramMobile } = useTelegram();

  if (!isValidTelegramMobile) {
    return <UnsupportedPlatform />;
  }

  return (
    <div className="telegram-app-container">
      <h1>Welcome to Our Service!</h1>
      <p>You're using the official Telegram mobile app.</p>

      {window.Telegram?.WebApp?.initDataUnsafe?.user && (
        <p>Hello, {window.Telegram.WebApp.initDataUnsafe.user.first_name}!</p>
      )}
    </div>
  );
}

export default App;
