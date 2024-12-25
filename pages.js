// pages.js

import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import BirthdayPage from './birthday';
import ChristmasPage from './christmas';
import GraduationPage from './graduation';
import Christmas2024 from './Christmas2024';


export const pages = [
  { name: 'Christmas', component: ChristmasPage },
  { name: 'Birthday', component: BirthdayPage },
  { name: 'Graduation', component: GraduationPage },
  { name: 'Christmas 2024', component: Christmas2024 },

];

export const NavigationButtons = ({ navigation, currentPage }) => {
  const currentIndex = pages.findIndex((page) => page.name === currentPage);
  const nextIndex = (currentIndex + 1) % pages.length; // Wrap around to the first page if at the end

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(pages[nextIndex].name)}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    color: '#fff',
    borderRadius: 5,
  },
});