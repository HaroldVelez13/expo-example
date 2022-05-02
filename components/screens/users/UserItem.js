import { ListItem, Avatar } from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';

const UserItem = ({ navigation, user }) => {
    if (!user?.id) return null
    return (
        <ListItem bottomDivider
            style={{ marginVertical: 5, marginHorizontal: 20 }}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.85}
            onPress={() => navigation.push("User Detail", { userId: user.id })}>

            <Avatar rounded source={{ uri: user.image }} size={50} />
            <ListItem.Content>
                <ListItem.Title style={{ fontSize: 20 }}>
                    {user.name}
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: "grey" }}>
                    {user.species}
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
        </ListItem>
    )
}

export default UserItem