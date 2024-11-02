import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/Home"; // Update with the correct path
import SongListScreen from "./components/SongListScreen"; // Update with the correct path
import Info from "./components/Info"; // Import your new Info component
import CustomDrawerContent from "./components/CustomDrawerContent"; // Import the custom drawer

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SongListScreen" component={SongListScreen} />
        <Drawer.Screen name="Info" component={Info} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
