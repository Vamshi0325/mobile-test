import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { isTelegram } = useTelegram();

  return (
    <div className="App">
      {isTelegram ? (
        <h1>Welcome to Bot</h1>
      ) : (
        <div>
          <h1>Open Your Bot in Telegram mobile mini application</h1>
          <p>
            Please open this link in the Telegram mobile app to use the bot.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
