export default function UnsupportedPlatform() {
  const isMobile = /Android|iPhone|iPod/i.test(navigator.userAgent);

  return (
    <div className="unsupported-platform">
      <h1>🔒 Incorrect Access Method</h1>
      <p>This bot only works within the official Telegram mobile app.</p>

      {isMobile ? (
        <>
          <p>Try opening this link from:</p>
          <ol>
            <li>The Telegram app on your phone</li>
            <li>Your bot's menu button</li>
          </ol>
          <p>Or download Telegram:</p>
          <div className="store-buttons">
            <a
              href="https://apps.apple.com/app/telegram-messenger/id686449807"
              className="store-button ios"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
              className="store-button android"
            >
              Google Play
            </a>
          </div>
        </>
      ) : (
        <p>Please use a mobile device to access this bot.</p>
      )}
    </div>
  );
}
