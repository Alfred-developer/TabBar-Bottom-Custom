import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";    
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Home } from "../views/Home/Home";
import { Profile } from "../views/Profile/Profile";
import { Ionicons } from '@expo/vector-icons'; // Para usar íconos de Ionicons
import MyTabBar from "../components/TabBar";
import Settings from "../views/Settings/Settings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
            tabBar={(props) => <MyTabBar {...props} />}
        >
          <Tab.Screen 
            name="Inicio" 
            component={Home}
            options={
              {
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
                headerShown: false,
              }
            } 
          />
          <Tab.Screen 
            name="Perfil" 
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
              headerShown: false, 
            }} 
          />
          <Tab.Screen 
            name="Ajustes" 
            component={Settings}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" size={size} color={color} />
              ),
              headerShown: false, 
            }} 
          />
        </Tab.Navigator>
    );
  }

function MyStack(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name='Home'
                component={MyTabs}
                options={{headerShown: false}}
            />  
            <Stack.Screen 
                name='Profile'
                component={Profile}
                options={{headerShown: false}}
            />  
        </Stack.Navigator>
    )
}

export default function() {
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}