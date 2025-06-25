import { useEffect, useState } from "react";

export function useTelegram() {
  const [isValidTelegramMobile, setIsValidTelegramMobile] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      // 1. Check if running in Telegram WebApp
      const isTelegramWebApp = window.Telegram?.WebApp?.initData !== undefined;

      if (!isTelegramWebApp) return false;

      // 2. Check if running on a mobile device (not desktop/tablet)
      const isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      if (!isMobile) return false;

      // 3. Check if running in Telegram Desktop (block it)
      const isTelegramDesktop = navigator.userAgent.includes("TelegramDesktop");
      if (isTelegramDesktop) return false;

      // If all checks pass, it's a valid Telegram mobile mini app
      return true;
    };

    setIsValidTelegramMobile(checkEnvironment());
  }, []);

  return { isValidTelegramMobile };
}
