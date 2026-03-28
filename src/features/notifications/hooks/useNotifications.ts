import { useState } from "react";

export function useNotifications() {
  const [notification, setNotification] = useState<any>(null);

  const show = (msg: string) => {
    setNotification({ id: Date.now(), msg });
    setTimeout(() => setNotification(null), 3500);
  };

  return { notification, show };
}
