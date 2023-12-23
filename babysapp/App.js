import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import Snow from 'react-native-snow'

const MultipleMediaComponent = () => {
  const imageSources = [
    require('./assets/photos/image1.jpg'), // Replace with your image URIs
    require('./assets/photos/image2.jpg'),
    require('./assets/photos/image3.jpg'),
    require('./assets/photos/image4.jpg'),
    require('./assets/photos/image5.jpg'),
    require('./assets/photos/image6.jpg'),
    require('./assets/photos/image7.jpg'),
    require('./assets/photos/image8.jpg'),
    require('./assets/photos/image9.jpg'),
    require('./assets/photos/image10.jpg'),
    require('./assets/photos/image11.jpg'),
  ];

  return (
    <View style={styles.container}>

      {/* Main container */}
      <Image source={require('./assets/garland.png')} style={styles.garlandImage} />
      <Text style={styles.heading}>Merry Christmas Kimmy❤️</Text>

      {/* Snowfall container */}
      <View style={styles.snowContainer}>
        <Snow fullScreen={false} snowflakesCount={10000} fallSpeed="fast" />
      </View>

      {/* Images */}
      <View style={styles.imageContainer}>
        {imageSources.map((image, index) => (
          <Image
            key={index.toString()}
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </View>

      {/* Text container */}
      <View style={styles.textContainer}>
        <Text>
          Well, Hi baby. I see you found your present. I hope you enjoy this as much as I've enjoyed working on it. I've had all sorts of ideas for this project but didn't know what route to take.
        </Text>
      </View>

      <View style={styles.textContainer2}>
        <Text>
          Hi again, 
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E3E8E3',
    position: 'relative', // To make absolute positioning work within this container
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -350,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'cursive',
    color: '#333',
  },
  garlandImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    top: 30,
    left: '50%',
    marginLeft: -150,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'align-start',
    overflow: 'scroll',
    width: '100%',
  },
  image: {
    width: 250,
    height: 250,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 200,
    left: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  textContainer2: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  snowContainer: {
    position: 'fixed',
    top: 50,
    left: 100,
    right: 100,
    bottom: 0,
    width: '100%', // Adjust the width and height as needed
    height: '100%',
  },
});

export default MultipleMediaComponent;