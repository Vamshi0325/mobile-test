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

      console.log("🚦 WebApp:", WebApp);
      console.log("🚦 User-Agent:", ua);

      // 1️⃣ If the WebApp object is missing (i.e., web.telegram.org or any browser), block access
      if (!WebApp) {
        console.log("🚫 WebApp not found. Blocking access.");
        return setIsValidTelegram(false);
      }

      // 2️⃣ Check the platform. Ensure it's either Android or iOS (for the Telegram Mini App).
      if (WebApp.platform !== "android" && WebApp.platform !== "ios") {
        console.log("🚫 Unsupported platform detected. Blocking access.");
        return setIsValidTelegram(false);
      }

      // 3️⃣ Extra safety check on the user-agent to ensure it is an official Telegram client.
      if (!ua.includes("Telegram-Android/") && !ua.includes("Telegram-iOS/")) {
        console.log("🚫 Invalid User-Agent. Blocking access.");
        return setIsValidTelegram(false);
      }

      // 🎉 If the app passes the checks, allow access.
      setIsValidTelegram(true);
      WebApp.ready(); // Proceed with WebApp SDK logic.
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
