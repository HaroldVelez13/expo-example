import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/users/UserListScreen';
import UserCreateScreen from '../screens/users/UserCreateScreen';
import UserDeatilScreen from '../screens/users/UserDeatilScreen';
import LocationMapScreen from '../screens/users/LocationMapScreen';

const Stack = createNativeStackNavigator();

function UserStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Map" component={LocationMapScreen} />
            <Stack.Screen name="User List" component={UserListScreen} />
            <Stack.Screen name="User Create" component={UserCreateScreen} />
            <Stack.Screen name="User Detail" component={UserDeatilScreen} />
        </Stack.Navigator>
    )
}

export default UserStack