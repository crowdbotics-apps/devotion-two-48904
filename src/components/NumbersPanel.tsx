import {StyleSheet, Text, View} from 'react-native';
import NumberButton from './NumberButton';
import React, {useEffect, useState} from 'react';
import colors from '@constants/colors';

const NumbersPanel = () => {
  const [pin, setPin] = useState<string>('');

  useEffect(() => {
    console.log('Pin:', pin);
  }, [pin]);

  const handlePress = (number: number) => {
    if (pin.length === 4) {
      return;
    }
    setPin((prevPin: any) => {
      return `${prevPin}${number}`;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.numbers}>
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
          <NumberButton number={0} onPress={() => handlePress(0)} />
        </View>
      </View>

      <View>
        <View style={styles.pinContainer}>
          {Array.from({length: 4}, (_, i) => i + 1).map((_, index) => (
            <View style={[styles.pin, index < pin.length && {backgroundColor: colors.white}]} key={index} />
          ))}
        </View>
        <Text style={styles.label}>Create a 4 digit code</Text>
      </View>
    </View>
  );
};
export default NumbersPanel;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pin: {
    borderWidth: 1,
    borderColor: colors.white,
    height: 25,
    width: 25,
    borderRadius: 12.5,
    marginHorizontal: 5,
  },
  label: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
