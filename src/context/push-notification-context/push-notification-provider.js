import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";
import React from "react";

import { PushNotificationContext } from "./push-notification-context";

export const PushNotificationProvider = ({ children }) => {
  React.useEffect(() => {
    Permission.getAsync(Permission.NOTIFICATIONS)
      .then((response) => {
        if (response.status !== "granted") {
          return Permission.askAsync(Permission.NOTIFICATIONS);
        }
        return response;
      })
      .then((response) => {
        if (response.status !== "granted") {
          return;
        }
      });
  }, []);

  const handleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Login successful",
        body: "Welcome to the system",
      },
      trigger: {
        seconds: 2,
      },
    });
  };

  const value = {
    handleNotification,
  };

  return (
    <PushNotificationContext.Provider value={value}>
      {children}
    </PushNotificationContext.Provider>
  );
};
