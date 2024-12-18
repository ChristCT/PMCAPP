import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import the router for navigation

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const router = useRouter(); // Initialize the router

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Show an alert when the login button is pressed
    Alert.alert('Login Successful', 'Welcome Back Mr. Anang');
  };

  const handleGoogleLogin = () => {
    router.push('/googlepage'); // Navigate to the Google page jsx yang udah dibuat
  };

  return (
    <View style={styles.container}>
      {/* Image background behind the card */}
      <ImageBackground source={require('../musicbg.png')} style={styles.backgroundImage} resizeMode="stretch">
        {/* Logo */}
        <Image source={require('../logo2.png')} style={styles.logo} />

        {/* Card with Login content */}
        <View style={styles.card}>
          {/* Login Text */}
          <Text style={styles.loginText}>Login</Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
              <AntDesign name={showPassword ? "eyeo" : "eye"} size={20} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* OR Divider */}
          <Text style={styles.orText}>Or</Text>

          {/* Social Login Buttons */}
          <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
            <AntDesign name="google" size={20} color="white" />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="facebook-square" size={20} color="white" />
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>

          {/* Signup Link */}
          <View style={styles.signupContainer}>
            <Text style={{ color: 'white' }}>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/register')}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 170,
    alignSelf: 'center',
    marginBottom: 5,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: 'rgba(23, 19, 36, 0.7)',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'rgba(23, 19, 36, 0.7)',
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginHorizontal: 20,
  },
  loginText: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 6,
    fontSize: 14,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 8,
    fontSize: 14,
  },
  eyeIcon: {
    padding: 8,
    right: 0,
  },
  forgotPassword: {
    color: '#DB8903',
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#DB8903',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#fff',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#DB8903',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  socialButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#DB8903',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
