import { Avatar, Card, Button } from "@rneui/themed"
import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useUsersActions } from "../../../state/users"


const UserDeatilScreen = ({ navigation, route }) => {
    const userActions = useUsersActions()
    const [user, setUser] = useState({})
    const { userId } = route.params;
    const url = "https://picsum.photos/200"
    useEffect(async () => {
        const currentUser = await userActions.useGetById(userId)
        setUser(currentUser)
    }, [userId])
    return (
        <View>
            <Card>
                <Card.Title>{user.name}</Card.Title>
                <Card.Divider />
                <Avatar rounded source={{ uri: user.image }} size={150} containerStyle={{ marginHorizontal: "25%", marginBottom: 25 }} />
                <Text style={{ marginBottom: 10 }}>
                    Name: {user.name}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Species: {user.species}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Gender: {user.gender}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Created: {user.created}
                </Text>
                <Button title="Edit"
                    type="outline"
                    titleStyle={styles.titleStyle}
                    buttonStyle={styles.buttonStyle}
                    onPress={() => navigation.push('User Create', { user })}
                />
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: '700',
        color: 'rgba(78, 116, 289, 1)'
    },
    buttonStyle: {
        borderColor: 'rgba(78, 116, 289, 1)',
        marginTop: 20,
        marginBottom: 5
    }
})
export default UserDeatilScreen

