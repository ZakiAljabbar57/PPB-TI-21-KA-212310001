import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const LoginForm = () => {
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [isOpenPass, setOpenPass] = useState(true);
    const [validPassword, setValidPassword] = useState("");

    const handlerValidMail = (value) => {
        if (value) {
            let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
            if (!regEmail.test(value)) {
                setValidEmail("Invalid Email Address");
            } else {
                setValidEmail("");
            }
        } else {
            setValidEmail("This field is required");
        }
    }

    const handlerOpenPassword = () => {
        switch (!isOpenPass) {
            case true:
                setOpenPass(true);
                break;
            default:
                setOpenPass(false);
                break;
        }
    }

    const checkPasswordValidity = value => {
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
            return 'Password must have at least one Uppercase Character.';
        }

        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
            return 'Password must have at least one Lowercase Character.';
        }

        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return 'Password must contain at least one Digit.';
        }

        const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!isContainsSymbol.test(value)) {
            return 'Password must contain at least one Special Symbol.';
        }

        return null;
    };

    const handlerValidPassword = (value) => {
        if (value.length < 3) {
            let checkPassword = checkPasswordValidity(value);
            if (!checkPassword) {
                setValidPassword(checkPassword);
            }
            else {
                setValidPassword("");
            }
        } else {
            setValidPassword("");
        }
    }

    return (
        <View style={formLogin.container}>
            <View style={formLogin.frm_row}>
                <Text style={formLogin.text_label}>Email</Text>
                <TextInput
                    placeholder='npm@student.ibik.ac.id'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                    style={formLogin.text_input}
                    // defaultValue={validEmail}
                    onChangeText={(text) => handlerValidMail(text)}
                />
                <Text style={{ color: 'red' }}>{validEmail}</Text>
            </View>
            <View style={formLogin.frm_row}>
                <Text style={formLogin.text_label}>Password</Text>
                <View style={{ ...formLogin.text_input, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        secureTextEntry={isOpenPass}
                        placeholder='Enter your password'
                        autoCorrect={false}
                        style={{ ...formLogin.text_input, borderWidth: 0, padding: 0, width: "90%" }}
                        // defaultValue={password}
                        onChangeText={(text) => handlerValidPassword(text)}
                    />
                    <Pressable onPress={() => handlerOpenPassword()}>
                        <FontAwesome5 name={(isOpenPass) ? "eye" : "eye-slash"} size={25} color="purple" />
                    </Pressable>
                </View>
                <Text style={{ color: 'red' }}>{validPassword}</Text>
            </View>
            <TouchableOpacity style={formLogin.btn_signin} onPress={() => handlerSignIn()}>
                <Text style={formLogin.btn_signin_text}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const formLogin = StyleSheet.create({
    container: {
        flex: 3,
        padding: 20,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    frm_row: {
        marginBottom: 15
    },
    text_label: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 16
    },
    text_input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: 'purple'
    },
    btn_signin: {
        backgroundColor: 'purple',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 15
    },
    btn_signin_text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    }
})

export default LoginForm