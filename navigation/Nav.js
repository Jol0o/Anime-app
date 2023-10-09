import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WelcomePage from '../components/Auth/WelcomePage';
import Home from '../screens/Home';
import Movies from '../screens/Movies';
import Profile from '../screens/Profile';
import AuthOptions from './../components/Auth/AuthOptions';


const Stack = createNativeStackNavigator();


const Tab = createMaterialBottomTabNavigator();

function LoginPage() {
    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomePage} options={{
                transitionSpec: {
                    open: config,
                    close: config,
                },
                headerShown: false
            }} />
            <Stack.Screen name="AuthOptions" component={AuthOptions} options={{
                transitionSpec: {
                    open: config,
                    close: config,
                },
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

function HomeBottomTab() {
    return (
        <Tab.Navigator
            shifting={true}
            initialRouteName="Home"
            activeColor="#38E54D"
            inactiveColor="#D0E7D2"
            barStyle={{ backgroundColor: '#181A20', height: 70 }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIconStyle: { backgroundColor: '#181A20' },
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={26} style={{
                            backgroundColor: 'transparent', // Change the background color here
                            borderRadius: 10,
                        }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Movies"
                component={Movies}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name={focused ? 'movie' : 'movie-outline'} color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function Nav() {

    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen name="login" component={LoginPage} options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    headerShown: false
                }} />
                <Stack.Screen name="home" component={HomeBottomTab} options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}