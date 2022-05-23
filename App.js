import React, { useState } from 'react';
import {StyleSheet, View, Text, FlatList, Pressable} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [GoalArray, setGoalArray] = useState([])
  const [ModalView, setModalView] = useState(false)

  const addGoalHandler = (text) => {
    {
      setGoalArray(currentGoals => [
        ...currentGoals, 
        {text: text, key: Date.now()}
      ])
    }
  }

  const deleteGoalHandler = (key) => {
    setGoalArray(currentGoals => {
      return currentGoals.filter((item) => item.key !== key)
    })
  }

  return (
    <View style={styles.appcontainer}>

      <Pressable onPress={() => setModalView(!ModalView)} >   
        <View style={styles.AddGoalBtn}>
          <Text>Add a goal...</Text>
          <IonIcon 
            name="add"    size={20}
            color="black" style={styles.goalDelete}
          /> 
        </View>
      </Pressable>
      
      <GoalInput ModalView={ModalView} setModalView={setModalView} addGoalHandler={addGoalHandler}/>

      <Text style={styles.header}>Goals List</Text>

      <FlatList 
        data={GoalArray} 
        /* KDYBYCH MĚL V ARRAYI JINY NAZEV KLICE NEZ "key"
        keyExtractor={(item, index)=>{
          return item.nazevKlice
        }}
        */
        renderItem={itemData => {
          return(
            <GoalItem deleteGoalHandler={deleteGoalHandler} item={itemData.item}/>
          )
        }

        } 
        style={styles.scrollview}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    flex:1,
    width: "100%",
    marginTop: 25,
    backgroundColor: "#171E27"
  },
  scrollview: {
    flex: 1,
    width: "100%"
  },
  header:{
    fontWeight: 'bold',
    margin: 5,
    padding: 10,
    fontSize: 20,
    color: "white"
  },
  AddGoalBtn: {
    backgroundColor: "#F9F3EE",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
  },
});
