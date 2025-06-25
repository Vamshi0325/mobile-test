import { useEffect, useState } from "react";

export function useTelegram() {
  const [isValidTelegram, setIsValidTelegram] = useState(false);

  useEffect(() => {
    const checkTelegram = () => {
      // 1. Must have Telegram WebApp object
      if (!window.Telegram?.WebApp) return false;

      // 2. Must have initData (proves official Telegram origin)
      if (!window.Telegram.WebApp.initData) return false;

      // 3. Must be in WebView (not browser)
      if (!window.Telegram.WebApp.isWebView) return false;

      // 4. Platform must be mobile (optional extra check)
      const platform = window.Telegram.WebApp.platform;
      return platform === "android" || platform === "ios";
    };

    setIsValidTelegram(checkTelegram());
  }, []);

  return { isValidTelegram };
}
