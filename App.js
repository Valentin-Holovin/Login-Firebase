import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation/Navigation";
import * as Notifications from "expo-notifications";
import { PushNotificationProvider } from "./src/context/push-notification-context/push-notification-provider";

export default function App() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  return (
    <PushNotificationProvider>
      <StatusBar />
      <Navigation />
    </PushNotificationProvider>
  );
}
