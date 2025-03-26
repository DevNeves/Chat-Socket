import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatUsuario from "../telas/ChatUsuario";
import Chat from "../telas/Chat";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatUsuario" component={ChatUsuario} />
    </Stack.Navigator>
  );
};

export default Router;
