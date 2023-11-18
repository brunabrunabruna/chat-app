import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Start from "./components/Start";
import Chat from "./components/Chat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

const Stack = createNativeStackNavigator();
const App = () => {
  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyC5CpYMP3606Gdf1jfCVziNOkc3Sw0fMWE",

    authDomain: "chat-app-7a33a.firebaseapp.com",

    projectId: "chat-app-7a33a",

    storageBucket: "chat-app-7a33a.appspot.com",

    messagingSenderId: "417331402472",

    appId: "1:417331402472:web:ee05bc9e4c708b83bc5b5d",
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start}></Stack.Screen>
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
