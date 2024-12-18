import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, StyleSheet, Animated } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  // Image banner state and fade animation
  const images = [require('../logo2.png'), require('../pmc1.jpeg'), require('../james.jpeg'), require('../pendaftaran.jpeg'), require('../pentas.jpeg')];
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade-out the current image
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }).start(() => {
        // Update the index and fade-in the next image
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Header with search */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput style={styles.searchInput} placeholder="Search Instrument" />
        </View>
        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="menu" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Main ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Explore Your Passion */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore Your Passion</Text>
          <View style={styles.bannerContainer}>
            <Animated.Image
              source={images[currentIndex]}
              style={[styles.bannerImage, { opacity: fadeAnim }]}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Find Best For You */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Find Best For You</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { name: 'Guitar', image: require('../electric guitar.png') },
              { name: 'Keyboard', image: require('../Yamaha DGX 670.png') },
              { name: 'Earphone', image: require('../pi.jpg') },
              { name: 'Drum', image: require('../drum.jpeg') },
              { name: 'Pianica', image: require('../pianica.jpg') },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.instrumentCard}>
                <View style={styles.instrumentImageCard}>
                  <Image source={item.image} style={styles.instrumentImage} />
                </View>
                <Text style={styles.instrumentName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Accessories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accessories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { name: 'Senar', image: require('../daddario.jpeg') },
              { name: 'Stik Drum', image: require('../stik.jpeg') },
              { name: 'Pik Gitar', image: require('../pik.jpeg') },
              { name: 'Stand Music', image: require('../stand.jpeg') },
              { name: 'Metronome', image: require('../metronome.jpeg') },
              { name: 'Strap', image: require('../strap.jpg') },
              
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.accessoryCard}>
                <View style={styles.accessoryImageCard}>
                  <Image source={item.image} style={styles.accessoryImage} />
                </View>
                <Text style={styles.accessoryName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <View style={styles.navItem}>
            <Ionicons name="home" size={25} color="#F7B733"/>
            <Text style={styles.navTextActive}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItem}>
            <FontAwesome name="music" size={25} color="white" />
            <Text style={styles.navText}>Explore</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItem}>
            <Ionicons name="school" size={25} color="white" />
            <Text style={styles.navText}>Course</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItem}>
            <Ionicons name="bookmark" size={25} color="white" />
            <Text style={styles.navText}>Saved</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <View style={styles.navItem}>
            <Ionicons name="person" size={25} color="white" />
            <Text style={styles.navText}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
  },
  searchInput: { flex: 1, marginLeft: 5, height: 40 },
  menuIcon: { marginLeft: 10 },
  scrollContent: { paddingVertical: 20 },
  section: { paddingHorizontal: 15, marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  bannerContainer: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  instrumentCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  instrumentImageCard: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  instrumentImage: { 
    width: 70, 
    height: 70, 
    borderRadius: 20, 
  },
  instrumentName: { 
    fontSize: 16, 
    color: "gray", 
    fontWeight: 'bold', 
  },
  accessoryCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  accessoryImageCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  accessoryImage: { 
    width: 70, 
    height: 70, 
    borderRadius: 20, 
  },
  accessoryName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: "gray",
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2C2C2C',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  navTextActive: {
    fontSize: 12,
    color: '#F7B733',
    textAlign: 'center',
  },
});
