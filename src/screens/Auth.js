import {Text, TouchableOpacity, View} from 'react-native';
import useAuth from '../contexts/AuthContext';

export default Auth = () => {
  const {signIn} = useAuth();
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          paddingVertical: 15,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
        onPress={async () => {
            console.log("clicked")
            await signIn()
            }}>
        {/* <GoogleLogo /> */}
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
  );
};
