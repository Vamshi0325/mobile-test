import { useEffect, useState } from "react";

export function useTelegram() {
  const [isValidTelegramMobile, setIsValidTelegramMobile] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      // 1. Must have Telegram WebApp injected
      if (!window.Telegram?.WebApp?.initData) return false;

      // 2. Must be launched from official Telegram mobile apps
      const platform = window.Telegram.WebApp.platform;
      if (platform !== "android" && platform !== "ios") return false;

      // 3. Must be in Telegram's WebView (not browser)
      if (!window.Telegram.WebApp.isWebView) return false;

      // 4. Additional verification for WebApp version
      const version = window.Telegram.WebApp.version;
      if (!version || typeof version !== "string") return false;

      return true;
    };

    setIsValidTelegramMobile(checkEnvironment());
  }, []);

  return { isValidTelegramMobile };
}
