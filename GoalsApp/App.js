import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [inputGoals, setInputGoal] = useState([]);
  function handlerGoalInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handlerButtonGoalPress() {
    // console.log(enteredGoalText);
    setInputGoal((currentGoals) => [...currentGoals, enteredGoalText]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInputs}>
        <TextInput style={styles.inputs} onChangeText={handlerGoalInput} placeholder='Enter your goal...' />
        <Button title='Add goal' onPress={handlerButtonGoalPress} />
      </View>
      <View style={styles.outputs}>
        <Text>Your goals:</Text>
        {inputGoals.map((goal) =>
          <View style={styles.goalSection}>
            <Text style={styles.goalText} key={goal}>{goal}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 30,
  },
  userInputs: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  inputs: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '70%',
    padding: 3,
  },
  outputs: {
    borderTopWidth: 1,
    borderTopColor: 'grey',
    marginTop: 10,
    flex: 10,
    paddingTop: 12
  },
  goalSection: {
    margin: 7,
    padding: 10,
    borderRadius: 12,
    backgroundColor: 'blue'
  },
  goalText:{
    color: 'white',
    fontSize: 14
  }
});
