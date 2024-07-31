import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '@constants/colors';
import ScreenWrapper from '@components/ScreenWrapper';
import NumbersPanel from '@components/NumbersPanel';
import Input from '@components/Input';
import Typography from '@components/Typography';
import {useNavigation} from '@react-navigation/native';
import Button from '@components/Button';
import FadingButton from '@components/FadingButton';

const Signup = () => {
  const navigation = useNavigation<any>();

  const [fullName, setFullName] = useState('');
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };

  const handleContinue = () => {
    navigation.navigate('DrawerStack', {
      screen: 'Home',
    });
  };

  const handleSelectPronoun = (route: string) => {
    setStep(step + 1);
  };

  const handleContinueStep = () => {
    setStep(step + 1);
  };

  return (
    <ScreenWrapper lotieAnimation="devotion">
      {step === 1 && (
        <>
          <Typography>Hi there?</Typography>
          <Typography>What’s your name?</Typography>
          <Input value={fullName} onChange={setFullName} />
          <Button title="Continue" onPress={handleContinueStep} />
        </>
      )}

      {step === 2 && (
        <>
          <Typography>Hi {fullName}!</Typography>
          <Typography>Can I also get your email address?</Typography>
          <Input value={email} onChange={handleChangeEmail} />
          <Button title="Continue" onPress={handleContinueStep} />
        </>
      )}

      {step === 3 && (
        <View style={styles.pronouns}>
          <Typography>Perfect!</Typography>
          <Typography>Do you mind sharing your pronouns?</Typography>

          <FadingButton
            title="She/Her"
            bgColors={['#E5ACC000', '#F780AA']}
            onPress={() => handleSelectPronoun('She/Her')}
          />
          <FadingButton
            title="He/Him"
            bgColors={['#58CCFB00', '#217EA3']}
            onPress={() => handleSelectPronoun('He/Him')}
          />
          <FadingButton
            title="They/Them"
            bgColors={['#FFF43000', '#C2BD6A']}
            onPress={() => handleSelectPronoun('They/Them')}
          />
          <FadingButton
            title="Other"
            bgColors={['#66453000', '#F5853F']}
            onPress={() => handleSelectPronoun('She/Her')}
          />
        </View>
      )}

      {step === 4 && (
        <>
          <Typography>
            One more thing. I don’t store your information on any server as I know how sensitive this information can
            be. To further protect you, how about we add a passcode? We will use this to login moving forward.
          </Typography>
          <NumbersPanel />
          <Button title="Continue" onPress={handleContinue} />
        </>
      )}
    </ScreenWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {},
  pronouns: {
    rowGap: 20,
  },
  welcomeMessage: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
  },
});
