import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, View} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import NumberButton from './NumberButton';
import React, {useEffect, useState} from 'react';
import colors from '@constants/colors';
import Typography from './Typography';

const NumbersPanel = () => {
  const navigation = useNavigation<any>();

  const [pin, setPin] = useState<string>('');

  const handleContinueToHome = () => {
    navigation.navigate('DrawerStack', {
      screen: 'Home',
    });
  };

  useEffect(() => {
    if (pin.length === 4) {
      handleContinueToHome();
    }
  }, [pin]);

  const handlePress = (number: number) => {
    if (pin.length === 4) {
      return;
    }
    setPin((prevPin: any) => {
      return `${prevPin}${number}`;
    });
  };

  const handleDelete = () => {
    setPin((prevPin: any) => {
      return prevPin.slice(0, -1);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.numbers}>
        <View>
          <Typography style={styles.label}>Create a 4 digit code</Typography>

          <View style={styles.pinContainer}>
            {Array.from({length: 4}, (_, i) => i + 1).map((_, index) => (
              <View
                style={[styles.pin, index < pin.length && styles.pinActive]}
                key={index}
              />
            ))}
          </View>
        </View>

        <View style={styles.row}>
          <NumberButton number={1} onPress={() => handlePress(1)} />
          <NumberButton number={2} onPress={() => handlePress(2)} />
          <NumberButton number={3} onPress={() => handlePress(3)} />
        </View>
        <View style={styles.row}>
          <NumberButton number={4} onPress={() => handlePress(4)} />
          <NumberButton number={5} onPress={() => handlePress(5)} />
          <NumberButton number={6} onPress={() => handlePress(6)} />
        </View>
        <View style={styles.row}>
          <NumberButton number={7} onPress={() => handlePress(7)} />
          <NumberButton number={8} onPress={() => handlePress(8)} />
          <NumberButton number={9} onPress={() => handlePress(9)} />
        </View>
        <View style={styles.lastRow}>
          <View style={styles.left} />
          <NumberButton number={0} onPress={() => handlePress(0)} />
          <Pressable style={styles.right} onPress={handleDelete}>
            <FontAwesome6Icon
              name="delete-left"
              size={24}
              color={colors.white}
            />
            <Typography style={styles.delete}>delete</Typography>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default NumbersPanel;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  delete: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  numbers: {
    alignSelf: 'center',
    width: 300,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  pin: {
    backgroundColor: colors.tertiary,
    height: 5,
    width: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  pinActive: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  label: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  right: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    width: 90,
    height: 90,
  },
});
