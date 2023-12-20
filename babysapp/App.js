import React, { useRef, useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';



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

  // Function to play audio
  const playAudio = async () => {
    // Your audio playback code goes here
  };

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      scrollX.setValue(0);
      Animated.timing(scrollX, {
        toValue: 1,
        duration: 20000, // Adjust duration for slow scrolling
        useNativeDriver: true,
      }).start(() => {
        scroll();
      });
    };
    scroll();
  }, []);

  const translateX = scrollX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -2000], // Adjust value to cover the width of 4 images
  });

  const renderItem = ({ item }) => (
    <Image
      source={item}
      style={styles.image}
      resizeMode="cover"
    />
  );

  return (
    <View style={styles.container}>
      <Image source={require('./assets/garland.png')} style={styles.garlandImage} />
      <Text style={styles.heading}>Merry Christmas Baby</Text>
      <Animated.FlatList
        ref={flatListRef}
        data={imageSources}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        style={{ transform: [{ translateX }] }}
        onScroll={() => {
          scrollX.setValue(0);
        }}
      />
      <Text style={styles.text}>
        This is an example text related to the images and audio.
      </Text>
      <TouchableOpacity style={styles.button} onPress={playAudio}>
        <Text style={styles.buttonText}>Play Audio</Text>
      </TouchableOpacity>
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
    marginTop: 40,
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
  imageContainer: {
    alignItems: 'center',
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
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    margin: 10,
    borderRadius: 10,
  },
});

export default MultipleMediaComponent;
