import { useEffect, useState } from "react";

export function useTelegram() {
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    const checkTelegram = () => {
      // Check for Telegram WebApp object
      if (window.Telegram?.WebApp?.initData) {
        return true;
      }

      // Check for Telegram URL parameters
      const params = new URLSearchParams(window.location.search);
      if (params.get("tgWebAppVersion") || params.get("tgWebAppPlatform")) {
        return true;
      }

      // Check user agent (fallback)
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes("telegram")) {
        return true;
      }

      return false;
    };

    setIsTelegram(checkTelegram());
  }, []);

  return { isTelegram };
}
