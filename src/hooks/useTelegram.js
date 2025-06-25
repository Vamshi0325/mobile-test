import { useEffect, useState } from "react";

export function useTelegram() {
  const [isValidTelegram, setIsValidTelegram] = useState(false);

  useEffect(() => {
    const checkTelegram = () => {
      const tg = window.Telegram?.WebApp;
      console.log("✅ Telegram SDK:", tg);
      if (!tg) return false;

      const platform = tg.platform;
      const initData = tg.initData;
      const isWebView = tg.isWebView;

      console.log("🔍 Telegram Platform:", platform);
      console.log("🔍 Telegram initData:", initData);
      console.log("🔍 isWebView:", isWebView);

      // Check User-Agent for mobile Telegram app only
      const userAgent = navigator.userAgent;
      console.log("🔍 User-Agent:", userAgent);

      // Define User-Agent patterns for official Telegram mobile apps
      const isTelegramMobile =
        userAgent.includes("Telegram") &&
        (userAgent.includes("Android") || userAgent.includes("iPhone"));

      console.log("🔍 Is Official Telegram App (mobile)?", isTelegramMobile);

      // Ensure it is the official Telegram mobile app, WebView, and platform checks
      return (
        !!initData &&
        isWebView !== false &&
        isTelegramMobile &&
        (platform === "android" || platform === "ios")
      );
    };

    const initializeCheck = () => {
      const result = checkTelegram();
      console.log("🚦 isValidTelegram:", result);
      setIsValidTelegram(result);
    };

    const timeout = setTimeout(() => {
      initializeCheck();
    }, 300);

    if (window.Telegram?.WebApp?.onEvent) {
      window.Telegram.WebApp.onEvent("ready", initializeCheck);
    }

    return () => {
      clearTimeout(timeout);
      if (window.Telegram?.WebApp?.offEvent) {
        window.Telegram.WebApp.offEvent("ready", initializeCheck);
      }
    };
  }, []);

  return { isValidTelegram };
}
