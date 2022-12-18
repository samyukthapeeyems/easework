import {
    Text,
    View,
    Button,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
  } from 'react-native';
  import useAuth from '../contexts/AuthContext';
  import React from 'react';
  
  const Auth = () => {
    const { signIn } = useAuth();
    return (
      <>
        {/* <Button title="Google Sign-In" onPress={async () => await signIn()} /> */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {/* <Image source={LoginImg} resizeMode="cover" /> */}
            <ImageBackground
              source={<Text>Login</Text>}
              resizeMode="cover"
              style={styles.image}>
            </ImageBackground>
          </View>
  
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginHorizontal: 16, marginVertical: 15 }}>
              <View style={{ marginBottom: 50 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', color: 'black' }}>
                  Let’s Get Started
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'black',
                    opacity: 0.5,
                  }}>
                  Login/Signup with your Google Account
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'blue',
                  paddingVertical: 15,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
                onPress={async () => await signIn()}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '700',
                    marginLeft: 10,
                  }}>
                  Login With Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text2: {
      color: 'yellow',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default Auth;