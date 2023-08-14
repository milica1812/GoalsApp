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
    setInputGoal((currentGoals) => [...currentGoals, enteredGoalText]);
  }

  return (
    <View style={styles.container}>
      <UserInput handlerGoalInput={handlerGoalInput} handlerButtonGoalPress={handlerButtonGoalPress} />
      <UserGoals inputGoals={inputGoals} />
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
