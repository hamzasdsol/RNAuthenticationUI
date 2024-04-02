import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {
  PRIMARY,
  SECONDARY,
  TERTIARY,
} from '../../components/CustomButton/ButtonTypes';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign in pressed');
  };

  const onRegister = () => {
    console.warn('Register');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot password pressed');
  };

  const onSocialLogin = () => {
    console.warn('on Social login');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
          height={height * 0.3}
        />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton onPress={onSignInPressed} text="Sign in" />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password?"
          type={TERTIARY}
        />
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
          onPress={onRegister}
          text="Don't have an account? Create one"
          type={TERTIARY}
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
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
  },
});

export default SignInScreen;
