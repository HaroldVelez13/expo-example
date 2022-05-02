import { Button } from "@rneui/themed"
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import MapView, { Marker } from 'react-native-maps';



const LocationMapScreen = ({ navigation }) => {

    const [region, setRegion] = useState(null);
    const [errorMsg, setErrorMsg] = useState('Waiting..');

    const getRegion = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        const location = await Location.getCurrentPositionAsync({});
        const regi = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        setRegion(regi)
        return
    }

    useEffect(() => {
        getRegion();
        Location.watchPositionAsync({}, getRegion)
    }, []);




    return (
        <View style={styles.container}>
            <Button
                title="User Users"
                iconRight
                iconContainerStyle={styles.iconContainerStyle}
                titleStyle={styles.titleStyle}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.containerStyle}
                icon={icon}
                type="outline"
                onPress={() => navigation.navigate('User List')}
            />
            {region !== null ? <MapView style={styles.map} region={region}>
                <Marker
                    coordinate={region}
                    title={"I am her"}
                    description={"Safe me please"}
                />
            </MapView>
                : <Text>{errorMsg}</Text>}


        </View>
    )
}

export default LocationMapScreen

const icon = {
    name: 'user',
    type: 'font-awesome',
    size: 15,
    color: 'rgba(78, 116, 289, 1)',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
    },
})