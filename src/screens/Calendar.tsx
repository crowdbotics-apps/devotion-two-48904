import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useState} from 'react';

import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';

const {width: screenWidth} = Dimensions.get('window');

const RNCalendar = () => {
  const [open, setOpen] = useState(false);
  const vacation = {
    key: 'vacation',
    color: '#097A92',
    selectedDotColor: '#96278F',
  };
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};

  return (
    <ScreenWrapper headerShown style={{width: '100%'}} lotieAnimation="brave">
      <Typography font="regular">Filter by devotions</Typography>
      <Calendar
        onDayPress={(day: string) => {
          console.log('selected day', day);
        }}
        style={{
          backgroundColor: 'transparent',
          width: screenWidth,
        }}
        // customHeader={() => {
        //   return <Text>Custom header</Text>;
        // }}
        theme={{
          arrowColor: 'grey',
          textSectionTitleDisabledColor: '#ffffff',
          calendarBackground: 'transparent',
          selectedDayBackgroundColor: '#663346',
          dayTextColor: '#fff',
          textSectionTitleColor: '#fff',
          todayTextColor: '#fff',
          monthTextColor: '#fff',
        }}
        markingType={'multi-dot'}
        // markedDates={{
        //   '2017-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
        //   '2017-10-26': {dots: [massage, workout], disabled: true}
        // }}
        markedDates={{
          '2024-07-01': {
            dots: [vacation, massage, workout],
            selected: true,
            selectedColor: '#663346',
          },
          '2024-07-02': {marked: true},
          '2024-07-03': {
            selected: true,
            marked: true,
            selectedColor: '#663346',
          },
        }}
      />
    </ScreenWrapper>
  );
};

export default RNCalendar;

const styles = StyleSheet.create({
  container: {},
});
