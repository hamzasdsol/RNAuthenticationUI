import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setsetConfirmPassword] = useState('');

  const onRegister = () => {
    console.warn('on register');
  };

  const onLogin = () => {
    console.warn('on login');
  };

  const onSocialLogin = () => {
    console.warn('on social sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm password"
          value={confirmPassword}
          setValue={setsetConfirmPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Resgiter" onPress={onRegister} />
        <CustomButton
          onPress={onSocialLogin}
          text="Signin with Facebook"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          onPress={onSocialLogin}
          text="Signin with Google"
          bgColor="#EAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          onPress={onSocialLogin}
          text="Signin with Apple"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />

        <CustomButton
          onPress={onLogin}
          text="Already have an account? Login"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
});

export default SignupScreen;
