import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { isValidTelegramMobile } = useTelegram();

  if (!isValidTelegramMobile) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1>🚫 Unsupported Platform</h1>
        <p>
          Please use this app on <strong>Telegram Mobile (Android/iOS)</strong>{" "}
          for the best experience.
        </p>
        <p>This app does not work on browsers, desktop, or Telegram Desktop.</p>
      </div>
    );
  }

  // Only rendered in Telegram Mobile Mini App
  return (
    <div className="App">
      <h1>Welcome to Bot! 🎉</h1>
      <p>You're using the Telegram mobile mini app.</p>
    </div>
  );
}

export default App;
