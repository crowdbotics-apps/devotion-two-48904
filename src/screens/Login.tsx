import React, {useState} from 'react';
import ScreenWrapper from '@components/ScreenWrapper';
import NumbersPanel from '@components/NumbersPanel';
import Input from '@components/Input';
import Typography from '@components/Typography';
import {useNavigation} from '@react-navigation/native';
import AuthService from '@services/AuthService';
import StorageService from '@services/StorageService';

const Login = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState('');

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };

  const handleLogin = async (pin: string) => {
    //api call to save user data
    try {
      const payload = {
        username: email,
        password: pin,
      };

      const response: any = await AuthService.login(payload);
      console.log('response', response);

      if (response?.token) {
        await StorageService.setItem('token', response.token);

        await StorageService.setItem('user', JSON.stringify(response.user));

        navigation.navigate('DrawerStack', {
          screen: 'Home',
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ScreenWrapper lotieAnimation="devotion">
      <Typography>
        Welcome back. Can you enter in your email and passcode?
      </Typography>
      <Input value={email} onChange={handleChangeEmail} />
      <NumbersPanel
        handleDone={(pin: string) => {
          handleLogin(pin);
        }}
      />
    </ScreenWrapper>
  );
};

export default Login;
