import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import StackNavigator from "./StackNavigation";
import Logout from "../screens/Logout";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name = "Tela Inicial" component = {StackNavigator}/>
      <Drawer.Screen name = "Perfil" component = {Profile}/>
      <Drawer.Screen name = "Sair" component={Logout}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;
