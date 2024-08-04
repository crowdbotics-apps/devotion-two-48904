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
import {DEVOTIONS} from '@src/CONST';
import {validateEmail} from '@src/utils/validations';
import globalStyles from '@src/styles/globalStyles';

const Signup = () => {
  const navigation = useNavigation<any>();

  const [fullName, setFullName] = useState('');
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
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
    if (step === 1 && !fullName) {
      setErrorMsg('Please enter your name');
      return;
    }

    if (step === 2 && !email) {
      setErrorMsg('Please enter your email');
      return;
    }

    if (step === 2 && !validateEmail(email)) {
      setErrorMsg('Please enter a valid email');
      return;
    }

    setErrorMsg('');

    setStep(step + 1);
  };

  return (
    <ScreenWrapper lotieAnimation="devotion">
      {step === 1 && (
        <>
          <Typography style={globalStyles.title}>Hi there?</Typography>
          <Typography style={globalStyles.subtitle}>
            What’s your name?
          </Typography>
          <Input value={fullName} onChange={setFullName} />
        </>
      )}
      {step === 2 && (
        <>
          <Typography style={globalStyles.title}>Hi {fullName}!</Typography>
          <Typography style={globalStyles.subtitle}>
            Can I also get your email address?
          </Typography>
          <Input value={email} onChange={handleChangeEmail} />
        </>
      )}
      {step === 3 && (
        <View style={globalStyles.rowGap20}>
          <Typography style={globalStyles.title}>Perfect!</Typography>
          <Typography style={globalStyles.subtitle}>
            Do you mind sharing your pronouns?
          </Typography>

          {DEVOTIONS.map((devotion, index) => (
            <FadingButton
              key={index}
              title={devotion.title}
              bgColors={devotion.bgColors}
              onPress={() => handleSelectPronoun(devotion.title)}
            />
          ))}
        </View>
      )}
      {step === 4 && (
        <>
          <Typography>
            One more thing. I don’t store your information on any server as I
            know how sensitive this information can be. To further protect you,
            how about we add a passcode? We will use this to login moving
            forward.
          </Typography>
          <NumbersPanel />
        </>
      )}
      {errorMsg && step !== 4 ? (
        <Typography style={globalStyles.error}>{errorMsg}</Typography>
      ) : null}
      {step < 3 ? (
        <Button title="Continue" onPress={handleContinueStep} />
      ) : null}
    </ScreenWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  welcomeMessage: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
  },
});
