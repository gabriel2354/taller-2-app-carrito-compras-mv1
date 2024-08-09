import React, { useState } from 'react';
import { Alert, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../commons/constansColor';
import { TitleComponent } from '../componets/TitleComponent';
import { BodyComponent } from '../componets/BodyComponent';
import { styles } from '../componets/theme/app.Theme';
import { InputComponent } from '../componets/InputComponet';
import { ButtonComponent } from '../componets/ButtonComponet';

//interface - objeto
interface FormLogin {
    email: string;
    password: string;
}

//interface - vector objetos
interface User {
    id: number;
    email: string;
    password: string;
}

export const LoginScreen = () => {
  

    //arreglo de usuarios: permitir inicio de sesión
    const users: User[] = [
        { id: 1, email: 'gabrielmon@gmail.com', password: '123456' },
        { id: 2, email: 'austinmon@gmail.com', password: '1234567' }
    ];

    //hook useState: manipular el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //hook useState: permitir que la contraseña sea visible o no
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation: permitir navegar de una pantalla a otra
    const navigation = useNavigation();

    //función que permita actualizar el estado del formulario
    const handleSetValues = (name: string, value: string) => {
        //Cambiar le estado del formLogin
        //...operador de propagación | spread: sacar una copia de las propiedades del objeto
        setFormLogin({ ...formLogin, [name]: value });
    }

    //función que permita iniciar sesión
    const handleSignIn = () => {
        //Validando si los campos están vacíos
        if (!formLogin.email || !formLogin.password) {
            //Mensajes de alerta
            Alert.alert(
                "Error",
                "Por favor, completar todos los campos!"
            );
            return;
        }
        //Validar si el correo y contraseña existe
        if (!verifyUser()) {  //valor null 
            Alert.alert(
                "Error",
                "Correo y/o contraseña incorrecta!"
            );
            return;
        }

        console.log(formLogin);
    }

    //función verificar si existe el correo y contraseña
    const verifyUser = (): User => {
        const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
        return existUser;
    }

    return (
        <View >
          

            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión' />
            
            <BodyComponent>
                <View>
                
                    <Text
                        style={styles.titleBody}>
                        Bienvenido de nuevo!
                    </Text>
                    <Text
                        style={styles.descriptionBody}>
                        Realiza tus compras de manera rápida y segura
                    </Text>
                </View>
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name='email' />
                        
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        actionIcon={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent textButton='Iniciar' actionButton={handleSignIn} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({name:'Register'}))}>
                    <Text style={styles.textRedirection}>
                        No tienes cuenta? Regístrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
            
        </View>

    )
}
