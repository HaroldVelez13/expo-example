import { View, StyleSheet } from "react-native"
import { Input, Button, Card } from '@rneui/themed';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useUsersActions } from "../../../state/users";

const UserSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    age: yup.number().positive().integer().required(),
}).required();





const UserCreateScreen = ({ navigation, route }) => {

    const { user } = route.params || {};

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(UserSchema),
        defaultValues: user?.id ? user : {}
    });
    console.log(user)
    const userActions = useUsersActions()

    const onSubmit = async (data) => {
        if (user?.id) {
            data.id = user.id;
            data.createAt = user.createAt
            userActions.updateUser(data);
        } else {
            const date = new Date();
            data.createAt = date.toDateString()
            userActions.createUser(data);
        }

        navigation.navigate("User List")

    };
    return (
        <View>
            <Card>
                <Card.Title>{user?.id ? "Edit" : "Create"} User Form</Card.Title>
                <Card.Divider />
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            style={styles.input}
                            placeholder="Fisrt Name"
                            onChangeText={onChange}
                            value={value}
                            errorStyle={{ color: 'red' }}
                            errorMessage={errors.firstName && "First Name is required"}
                        />
                    )}
                    name="firstName"
                />

                <Controller
                    control={control}

                    render={({ field: { onChange, value } }) => (
                        <Input
                            style={styles.input}
                            placeholder="Last Name"
                            onChangeText={onChange}
                            value={value}
                            errorStyle={{ color: 'red' }}
                            errorMessage={errors.lastName && "Last Name is required"}
                        />
                    )}
                    name="lastName"
                />

                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={onChange}
                            value={value}
                            keyboardType='email-address'
                            errorStyle={{ color: 'red' }}
                            errorMessage={errors.email && "Email is required"}
                        />
                    )}
                    name="email"
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            style={styles.input}
                            placeholder="Phone Number"
                            onChangeText={onChange}
                            value={value}
                            keyboardType='phone-pad'
                            errorMessage={errors.phone && "Phone is required"}
                        />
                    )}
                    name="phone"
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            style={styles.input}
                            placeholder="Age"
                            onChangeText={onChange}
                            value={value}
                            keyboardType='number-pad'
                            errorMessage={errors.age && "Age is required"}
                        />
                    )}
                    name="age"
                />
                <Button title={user?.id ? "Update" : "Add"}
                    type="outline"
                    titleStyle={styles.titleStyle}
                    buttonStyle={styles.buttonStyle}
                    onPress={handleSubmit(onSubmit)}
                />
            </Card>
        </View>
    )
}

export default UserCreateScreen

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
    },
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