import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './app/screens/DashboardScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import ControlScreen from './app/screens/ControlScreen';
import AboutScreen from './app/screens/AboutScreen';
import PlantCategories from './app/screens/PlantCategories';
import LogoutScreen from './app/screens/LogoutScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={DashboardScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Plant Categories" component={PlantCategories} />
            <Drawer.Screen name="Log-Out" component={LogoutScreen} />

        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Controls" component={ControlScreen} options={{ title: 'Controls' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
