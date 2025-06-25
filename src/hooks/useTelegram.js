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

      // Fix: Only block if isWebView is explicitly false
      return (
        !!initData &&
        isWebView !== false &&
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
