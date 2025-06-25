// import { useTelegram } from "./hooks/useTelegram";
// import UnsupportedPlatform from "./components/UnsupportedPlatform";
// import "./App.css";

// function App() {
//   const { isValidTelegram } = useTelegram();

//   if (!isValidTelegram) {
//     console.warn("🚫 Unsupported Platform Detected");
//     return <UnsupportedPlatform />;
//   }

//   const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;

//   return (
//     <div className="telegram-app">
//       <h1>Welcome to Our Bot! 🎉</h1>
//       <p>You're using the official Telegram app.</p>

//       {tgUser && <p>Hello, {tgUser.first_name}!</p>}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  const [isValidTelegram, setIsValidTelegram] = useState(false);

  useEffect(() => {
    const checkTelegram = () => {
      const WebApp = window.Telegram?.WebApp;
      const ua = navigator.userAgent || "";

      // 1️⃣ If the WebApp object is missing (e.g., web.telegram.org, any browser), block access
      if (!WebApp) {
        return setIsValidTelegram(false);
      }

      // 2️⃣ If it’s not flagged as Android or iOS, block (also blocks desktop)
      if (WebApp.platform !== "android" && WebApp.platform !== "ios") {
        return setIsValidTelegram(false);
      }

      // 3️⃣ Extra safety: UA must include the official Telegram user-agent token
      if (!ua.includes("Telegram-Android/") && !ua.includes("Telegram-iOS/")) {
        return setIsValidTelegram(false);
      }

      // 🎉 If we pass all checks, we're in the official Telegram Mini App (either Android or iOS)
      setIsValidTelegram(true);
      WebApp.ready(); // Ready to use the WebApp SDK
    };

    checkTelegram();
  }, []);

  if (!isValidTelegram) {
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          padding: "2rem",
        }}
      >
        <h2>The application is only available on the Telegram Mini App.</h2>
        <p>
          Please open this in the official Telegram app (from App Store or Play
          Store).
        </p>
        <div>
          <a
            href="https://apps.apple.com/app/telegram-messenger/id686449807"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download for iOS
          </a>
        </div>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download for Android
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎉 Welcome to the Telegram Mini App!</h1>
      <p>Your platform is supported. Enjoy the app!</p>
      {/* Add your app's real logic here */}
    </div>
  );
};

export default App;
