import { Button } from "@rneui/themed"
import { useEffect } from "react"
import { View, StyleSheet, FlatList } from "react-native"
import { useRecoilValue } from "recoil"
import { usersState } from "../../../state/users"
import { useUsersActions } from "../../../state/users"
import UserItem from "./UserItem"



const UserListScreen = ({ navigation }) => {
    const users = useRecoilValue(usersState);
    const userActions = useUsersActions();
    useEffect(() => {
        userActions.useGetAll()
    }, [])
    const renderItem = ({ item }) => <UserItem user={item} navigation={navigation} />;
    return (
        <View style={styles.container}>
            <Button
                title="Create User"
                iconRight
                iconContainerStyle={styles.iconContainerStyle}
                titleStyle={styles.titleStyle}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.containerStyle}
                icon={icon}
                type="outline"
                onPress={() => navigation.navigate('User Create')}
            />
            <FlatList data={users} renderItem={renderItem} keyExtractor={item => item.id} />

        </View>
    )
}

export default UserListScreen

const icon = {
    name: 'user',
    type: 'font-awesome',
    size: 15,
    color: 'rgba(78, 116, 289, 1)',
}

const styles = StyleSheet.create({
    iconContainerStyle: { marginLeft: 10 },
    titleStyle: {
        fontWeight: '700',
        color: 'rgba(78, 116, 289, 1)'
    },
    buttonStyle: {
        borderColor: 'rgba(78, 116, 289, 1)',
    },
    containerStyle: {
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: 10,
    },
    container: {
        paddingBottom: 70
    }
})