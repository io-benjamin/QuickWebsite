import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';



const MultipleMediaComponent = () => {
  // Define an array of image sources
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
      <Image source={require('./assets/garland.png')} style={styles.garlandImage} />
      <Text style={styles.heading}>Merry Christmas Kimmy❤️</Text>
    <View style={styles.imageContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imagesContent}
      >
        {imageSources.map((image, index) => (
          <TouchableOpacity key={index.toString()} onPress={imageSources}>
            <Image
              source={image}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    backgroundColor: '#E3E8E3'
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -350,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'cursive',
    color: '#333',
    position: 'relative',
    zIndex: 1, // Ensure the text is above other elements
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
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
    elevation: 8, // For Android shadow
  },
  image: {
    width: 250,
    height: 250,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'align-start',
    overflowX: 'scroll', // Enable horizontal scrolling
    width: '100%', // Ensure the container takes the full width
  },
  image: {
    width: 250,
    height: 250,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default MultipleMediaComponent;