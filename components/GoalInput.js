import {StyleSheet, View, Text, TextInput, Modal, Image} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';

const GoalInput = (props) => {    
    const [Input, setInput] = useState("")
    
    const goalInputHandler = text => {
        setInput(text)
    }

    const addGoalHandler2= () => {
        props.addGoalHandler(Input)
        setInput("")
        props.setModalView(!props.ModalView)
    }

    

    return(
        <Modal visible={props.ModalView} animationType="slide">
            <View style={styles.ModalView}>
                <Image style={styles.image} source={require("../assets/Images/goal.png")}/>
                <TextInput
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    placeholder="Goal name"
                    value={Input}
                />

                <View style= {{flexDirection:"row", justifyContent:"center"}}>
                    <IonIcon 
                        style={styles.confirmBtn}
                        name="add"
                        color="black"
                        size={20}
                        onPress={addGoalHandler2}
                    />
                    <Text style= {styles.cancelBtn}
                        onPress={()=>{
                            props.setModalView(!props.ModalView)
                            setInput("")}
                        }
                    >
                        Cancel
                    </Text>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    ModalView:{
        paddingVertical: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: "#171E27",
    },
    image: {
        width: 100,
        height: 100,
        margin:20,
    },
    input: {
        backgroundColor: "#ffffff",
        width: "90%",
        borderRadius:5,
        padding: 10,
        margin: 5,
      },
      confirmBtn: {
        backgroundColor: "#F9F3EE",
        borderRadius: 5,
        alignItems: 'center',
        margin: 5,
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
      },
      cancelBtn: {
        backgroundColor: "#ee7762",
        borderRadius: 5,
        alignItems: 'center',
        margin: 5,
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
      },
})