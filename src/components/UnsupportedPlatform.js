export default function UnsupportedPlatform() {
  return (
    <div className="unsupported-platform">
      <h1>🔒 Unsupported Platform</h1>
      <p>
        Please open this bot in the{" "}
        <strong>official Telegram mobile app</strong> (from App Store or Play
        Store).
      </p>
      <p>This feature is not available in browsers or Telegram Desktop.</p>

      <div className="store-buttons">
        <a
          href="https://apps.apple.com/app/telegram-messenger/id686449807"
          className="store-button ios"
        >
          Download for iOS
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
          className="store-button android"
        >
          Download for Android
        </a>
      </div>
    </div>
  );
}
