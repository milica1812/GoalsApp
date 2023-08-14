import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import UserInput from './components/UserInput';
import UserGoals from './components/UserGoals';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [inputGoals, setInputGoal] = useState([]);

  function handlerGoalInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handlerButtonGoalPress() {
    const newGoal = { id: Math.random().toString(), text: enteredGoalText };
    setInputGoal((currentGoals) => [...currentGoals, newGoal]);
    setEnteredGoalText('');
}

function handlerDeleteItem(index) {
  setInputGoal((currentGoals) => {
      return currentGoals.filter((_, i) => i !== index);
  });
}


  return (
    <View style={styles.container}>
      <UserInput handlerGoalInput={handlerGoalInput} value={enteredGoalText} handlerButtonGoalPress={handlerButtonGoalPress} />
      <UserGoals inputGoals={inputGoals} onDeleteItem={handlerDeleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 30,
  },
});
