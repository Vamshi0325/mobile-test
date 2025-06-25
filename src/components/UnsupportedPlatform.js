export default function UnsupportedPlatform() {
  const isMobile = /Android|iPhone|iPod/i.test(navigator.userAgent);

  return (
    <div className="unsupported-platform">
      <h1>🔒 Please Use Telegram Mobile App</h1>
      <p>
        This service only works within the official Telegram app for
        smartphones.
      </p>

      {isMobile ? (
        <>
          <p>Try these steps:</p>
          <ol>
            <li>Open the Telegram app</li>
            <li>Find our bot in your chats</li>
            <li>Tap the menu button in the bot chat</li>
          </ol>
          <div className="store-buttons">
            <a
              href="https://apps.apple.com/app/telegram-messenger/id686449807"
              className="store-button ios"
            >
              Get Telegram for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
              className="store-button android"
            >
              Get Telegram for Android
            </a>
          </div>
        </>
      ) : (
        <p>Please use a smartphone to access this service.</p>
      )}
    </div>
  );
}
