import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../commons/constansColor';
import { TitleComponent } from '../componets/TitleComponent';
import { BodyComponent } from '../componets/BodyComponent';
import { styles } from '../componets/theme/app.Theme';
import { InputComponent } from '../componets/InputComponet';
import { ButtonComponent } from '../componets/ButtonComponet';
import { Double, Float } from 'react-native/Libraries/Types/CodegenTypes';

//interface - formulario Registro
interface FormRegister {
nombre: string;
apellido: string;
celular: string;
email: string;
password: string;
}

export const RegisterScreen = () => {

  //hook useState: Manipular el estado del formulario
const [formRegister, setFormRegister] = useState<FormRegister>({
    nombre: '',
    apellido:'',
    celular:'',
    email:'',
    password: ''
});

  //hook useState: permitir que la contraseña sea visible o no
const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //hook useNavigation: permitir navegar de una pantalla a otra
const navigation = useNavigation();

  //función que actualice el estado del formulario
const handleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
}

  //función que permita registrar usuario
const handleSignUp = () => {
    console.log(formRegister);
}

return (
    <View>
    <StatusBar backgroundColor={PRIMARY_COLOR} />
    <TitleComponent title='Regístrate' />
    <BodyComponent>
        <View>
        <Text
            style={styles.titleBody}>
            Estás muy cerca!
        </Text>
        <Text
            style={styles.descriptionBody}>
            Realiza tus compras de manera rápida y segura
        </Text>
        </View>
        <View style={styles.contentInput}>
        <InputComponent
            placeholder='nombre'
            handleSetValues={handleSetValues}
            name='nombre' />
            <InputComponent
            placeholder='apellido'
            handleSetValues={handleSetValues}
            name='apellido' />
            <InputComponent
            placeholder='celular'
            handleSetValues={handleSetValues}
            name='celular' />
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
        <ButtonComponent textButton='Registrar' actionButton={handleSignUp} />
        <TouchableOpacity
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
        <Text style={styles.textRedirection}>
            Ya tienes una cuenta? Iniciar sesión ahora
        </Text>
        </TouchableOpacity>
    </BodyComponent>
    </View>
)
}
