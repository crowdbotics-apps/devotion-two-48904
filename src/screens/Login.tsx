import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import colors from '@constants/colors';
import ScreenWrapper from '@components/ScreenWrapper';
import NumbersPanel from '@components/NumbersPanel';
import Input from '@components/Input';
import Typography from '@components/Typography';
import {useNavigation} from '@react-navigation/native';
import Button from '@components/Button';

const Login = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState('');

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };

  const handleContinue = () => {
    navigation.navigate('DrawerStack', {
      screen: 'Home',
    });
  };

  return (
    <ScreenWrapper lotieAnimation="devotion">
      <Typography>Welcome back. Can you enter in your email and passcode?</Typography>
      <Input value={email} onChange={handleChangeEmail} />
      <NumbersPanel />

      <Button title="Continue" onPress={handleContinue} />
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
  welcomeMessage: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
  },
});
