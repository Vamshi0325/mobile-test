import { useTelegram } from "./hooks/useTelegram";
import UnsupportedPlatform from "./components/UnsupportedPlatform";
import "./App.css";

function App() {
  const { isValidTelegramMobile } = useTelegram();

  // Debug output (remove in production)
  console.log("Telegram check:", {
    isWebView: window.Telegram?.WebApp?.isWebView,
    platform: window.Telegram?.WebApp?.platform,
    initData: !!window.Telegram?.WebApp?.initData,
  });

  if (!isValidTelegramMobile) {
    return <UnsupportedPlatform />;
  }

  return (
    <div className="telegram-app">
      <h1>Welcome to Our Bot! 🎉</h1>
      <p>You're using the official Telegram mobile app.</p>

      {window.Telegram?.WebApp?.initDataUnsafe?.user && (
        <p>Hello, {window.Telegram.WebApp.initDataUnsafe.user.first_name}!</p>
      )}
    </div>
  );
}

export default App;
