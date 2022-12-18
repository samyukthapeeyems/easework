import {TouchableOpacity, View, StyleSheet} from 'react-native';
import useAuth from '../contexts/AuthContext';
import Text from '../components/Text';

export default function Profile() {
  const {signOut, user} = useAuth();
  return (
    <View style={styles.container}>

      <Text>{user.displayName}</Text>
      <Text>{user.email}</Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#1F9EFF',
          paddingVertical: 15,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: '40%',
        }}
        onPress={async () => {
          console.log('clicked');
          await signOut();
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '700',
            alignSelf: 'center',
          }}>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#F5FCEE',
  },
});
