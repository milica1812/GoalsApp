import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import UserInput from './components/UserInput';
import UserGoals from './components/UserGoals';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [inputGoals, setInputGoal] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  function handlerGoalInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handlerButtonGoalPress() {
    const newGoal = { id: Math.random().toString(), text: enteredGoalText };
    setInputGoal((currentGoals) => [...currentGoals, newGoal]);
    setEnteredGoalText('');
    handlerCancelModal();
  }

  function handlerDeleteItem(index) {
    setInputGoal((currentGoals) => {
      return currentGoals.filter((_, i) => i !== index);
    });
  }

  function handlerCancelModal (){
    setVisibleModal(false);

  }

  function handlerVisibleModal() {
    setVisibleModal(true);
  }


  return (
    <View style={styles.container}>
      <Button title='Add goals' onPress={handlerVisibleModal} />
      <UserInput visible={visibleModal} handlerGoalInput={handlerGoalInput} value={enteredGoalText} handlerButtonGoalPress={handlerButtonGoalPress} onCancel={handlerCancelModal}/>
      <UserGoals inputGoals={inputGoals} onDeleteItem={handlerDeleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '50%',
    backgroundColor: '#fff',
    marginHorizontal: 30,

  },
});
