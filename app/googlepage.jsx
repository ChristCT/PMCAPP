import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function GoogleLoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../gog.png')} style={styles.googleIcon} />
        <Text style={styles.signInText}>Sign in with Google</Text>
      </View>
      <View style={styles.borderLine} />

      <Text style={styles.title}>Choose an account</Text>
      <Text style={styles.subtitle}>to continue to Premiere Music Centre</Text>

      <View style={styles.accountContainer}>
        <View style={styles.account}>
          <MaterialIcons name="account-circle" size={40} color="blue" />
          <View style={styles.accountInfo}>
            <Text style={styles.accountName}>Anang Prasetyo</Text>
            <Text style={styles.accountEmail}>anangprasetyo@gmail.com</Text>
          </View>
        </View>

        <View style={styles.borderLine} />

        <View style={styles.account}>
          <MaterialIcons name="account-circle" size={40} color="brown" />
          <View style={styles.accountInfo}>
            <Text style={styles.accountName}>Violitta Yesmaya</Text>
            <Text style={styles.accountEmail}>violittayesmaya@gmail.com</Text>
          </View>
        </View>

        <View style={styles.borderLine} />
      </View>

      <TouchableOpacity style={styles.useAnotherButton}>
        <Text style={styles.useAnotherText}>Use another account</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>English</Text>
        <View style={styles.footerLinks}>
          <Text style={styles.linkText}>Help</Text>
          <Text style={styles.linkText}>Privacy Policy</Text>
          <Text style={styles.linkText}>Terms of Service</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 20,
  },
  googleIcon: {
    width: 20, 
    height: 20, 
    resizeMode: 'contain',
    },
  signInText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: "#8A7F7F",
  },
  borderLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
    marginTop: 0.5,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 5,
    marginTop: 70,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  accountContainer: {
    width: '90%',
    marginBottom: 10,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  accountInfo: {
    marginLeft: 10,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '500',
  },
  accountEmail: {
    fontSize: 14,
    color: 'gray',
  },
  useAnotherButton: {
    padding: 10,
    marginBottom: 30,
  },
  useAnotherText: {
    color: '#1a73e8',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  footerText: {
    color: 'gray',
    fontSize: 12,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  linkText: {
    color: '#1a73e8',
    fontSize: 12,
    marginLeft: 10,
  },
});
