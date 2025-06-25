import { useEffect, useState } from "react";

export function useTelegram() {
  const [isValidTelegramMobile, setIsValidTelegramMobile] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      // 1. Check if Telegram WebApp is available
      if (!window.Telegram?.WebApp) return false;

      // 2. Check if running in Telegram's WebView
      if (!window.Telegram.WebApp.isWebView) return false;

      // 3. Check platform (should be android/ios but not strictly required)
      const platform = window.Telegram.WebApp.platform || "";

      // 4. Check initData (proves Telegram origin)
      if (!window.Telegram.WebApp.initData) return false;

      return true;
    };

    setIsValidTelegramMobile(checkEnvironment());
  }, []);

  return { isValidTelegramMobile };
}
