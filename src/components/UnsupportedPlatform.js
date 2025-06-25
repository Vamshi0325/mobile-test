export default function UnsupportedPlatform() {
  const isMobile = /Android|iPhone|iPod/i.test(navigator.userAgent);

  return (
    <div className="unsupported-container">
      <h1>🔒 Restricted Access</h1>
      <p>
        This service only works within the{" "}
        <strong>official Telegram mobile app</strong>.
      </p>

      {isMobile ? (
        <>
          <p>Download Telegram from:</p>
          <div className="download-buttons">
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
        <p>Please use a mobile device to access this service.</p>
      )}
    </div>
  );
}
