import React from "react";

export const PushNotificationContext = React.createContext({
  handleNotification: () => {},
});

export function usePushNotificationsContext() {
  const pushNotificationsContext = React.useContext(PushNotificationContext);

  if (!pushNotificationsContext) {
    throw new Error(
      "usePushNotificationsContext must be used within a PushNotificationsProvider"
    );
  }
  return pushNotificationsContext;
}
