import {TextInput, View, StyleSheet, Text, Modal, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Button from '../components/Button';
import {useState, useEffect} from 'react';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function AddTodo() {
  const [todoName, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  async function createTodo() {
    await firestore().collection('todos').add({
      todoName: todoName,
      createdAt: new Date(),
      completed: false,
    });
  }

  async function markCompleted(_id) {
    await firestore().collection('todos').doc(_id).update({
      completed: true,
    });
  }

  useEffect(() => {
    firestore()
      .collection('todos')
      .get()
      .then(snapshots => {
        let todos = [];
        snapshots.forEach(snapshot => {
          todos.push({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
        setTodos(todos);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={{flex: 1, margin: 10}}>
          <Text style={{color: 'black'}}>Set A Goal, jot it here 🧘</Text>
          <TextInput onChangeText={setTodo} value={todoName} />
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={async () => {
              await createTodo();
              setModalVisible(!modalVisible);
            }}>
            Add Todo
          </Button>
        </View>
      </Modal>


<View>
    <Text>TODO</Text>
    <Button></Button>
</View>
      {/* <FlatList
       data={todos}
       key={todos}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },
});
