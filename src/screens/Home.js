import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Button from '../components/Button';
import {ProgressChart} from 'react-native-chart-kit';

export function Home() {
//   const [dismiss, setDismiss] = useState(false);
//   console.log('2221');


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.Text}>Hello John Doe!</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
              }}
              // resizeMode="contain"
              style={styles.profilePicture}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.cardText}>It's weekend! Take your survey</Text>
        </View>
        <Button style={styles.Button} textStyle={styles.buttonText}>
          Attend Survey
        </Button>
      </View>

      {/* <ProgressChart
                data={[0.4, 0.6, 0.8]}
                width={Dimensions.get('window').width - 16}
                height={220}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            /> */}
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#F5FCEE',
  },
  textContainer: {
    flexDirection: 'row',
    alignContent: 'space-around',
    height: '13%',
    width: '100%',
    backgroundColor: '#688D89',
  },
  Text: {
    paddingLeft: 20,
    fontSize: 30,
    color: '#fff',
  },
  card: {
    justifyContent: 'center',
    width: '90%',
    height: '30%',
    padding: 0,
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 1,
    shadowOpacity: 0.5,
    shadowColor: '#00115e',
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  cardText: {
    padding: 50,
    fontSize: 20,
    color: "black"
  },
  Button: {
    justifyContent: 'center',
    width: '70%',
    height: '22%',
    alignItems: 'center',
    backgroundColor: '#1F9EFF',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 26,
    color: 'white',
    fontWeight: '600',
  },
  close: {
    width: '15%',
    height: '15%',
  },
  profilePicture: {
    borderRadius: 30,
  },
});
