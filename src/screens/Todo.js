import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Formik} from 'formik';
import firestore from '@react-native-firebase/firestore';
import Button from '../components/Button';
import {useState} from 'react';

export default function AddTodo() {
  const [todoName, setTodo] = useState('');
  async function createTodo() {
    try {
      await firestore().collection('todos').add({
        todoName: todoName,
        createdAt: new Date(),
        completed: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    // <Formik
    //   initialValues={{taskName: ''}}
    //   onSubmit={values =>createTodo(values)}>
    //   {({handleChange, handleBlur, handleSubmit, values}) => (
    <View style={{flex: 1, margin: 10}}>
      <Text style={{color: 'black'}}>Set A Goal, jot it here 🧘</Text>
      <TextInput
        onChangeText={setTodo}
        // onBlur={handleBlur('taskName')}
        value={todoName}
      />

      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={createTodo}>
        Add Todo
      </Button>
    </View>
    //   )}
    // </Formik>
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
