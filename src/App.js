import { useTelegram } from "./hooks/useTelegram";
import UnsupportedPlatform from "./components/UnsupportedPlatform";
import "./App.css";

function App() {
  const { isValidTelegram } = useTelegram();

  if (!isValidTelegram) {
    console.warn("🚫 Unsupported Platform Detected");
    return <UnsupportedPlatform />;
  }

  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;

  return (
    <div className="telegram-app">
      <h1>Welcome to Our Bot! 🎉</h1>
      <p>You're using the official Telegram app.</p>

      {tgUser && <p>Hello, {tgUser.first_name}!</p>}
    </div>
  );
}

export default App;
