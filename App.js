import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [luku1, setluku1] = useState('');
  const [luku2, setluku2] = useState('');

  const [vastaus, setvastaus] = useState('');

  const initialFocus = useRef(null);

  /*const buttonPressed1 = () => {
    setvastaus(luku1 + luku2);
  } tämä ei toimi! pitää muuttaa numeroksi

  const buttonPressed2 = () => {
    setvastaus(luku1 - luku2);
  }
  */

  const calculate = operator => {
    const [numeber1, number2] = [Number(luku1), Number(luku2)];
  
  switch (operator) {
    case '+':
      setvastaus(numeber1+number2);
      break;

    case '-':
      setvastaus(numeber1-number2);
      break;
  }
  setluku1('');
  setluku2('');
  initialFocus.current.focus();
}
  
  return (
    <View style={styles.container}>

      <Text>Result: {vastaus}</Text>

      <TextInput style={styles.input} ref={initialFocus} keyboardType='numeric'  onChangeText={text => setluku1(text)} value={luku1}/>
      <TextInput style={styles.input} keyboardType='numeric'  onChangeText={text => setluku2(text)} value={luku2}/>
        <View style={styles.operators}>
          <View style={styles.button}>
            <Button onPress={() => calculate('+')} title="+" />
            </View>
            <View style={styles.button}>
            <Button onPress={() => calculate('-')} title="-" />
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  },
  operators: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button : {
    width: '10%',
    margin: 10     
  },

});