import { useEffect, useState } from "react";

export function useTelegram() {
  const [isValidTelegram, setIsValidTelegram] = useState(false);

  useEffect(() => {
    // The ONLY check we need - Telegram injects this object
    setIsValidTelegram(window.Telegram?.WebApp?.initData !== undefined);
  }, []);

  return { isValidTelegram };
}
