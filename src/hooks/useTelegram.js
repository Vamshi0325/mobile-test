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

      // All strict checks
      return (
        !!initData &&
        isWebView === true &&
        (platform === "android" || platform === "ios")
      );
    };

    const initializeCheck = () => {
      const result = checkTelegram();
      console.log("🚦 isValidTelegram:", result);
      setIsValidTelegram(result);
    };

    // Retry after short delay to let Telegram WebApp init
    const timeout = setTimeout(() => {
      initializeCheck();
    }, 300);

    // Optional: use Telegram's onEvent if supported
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
