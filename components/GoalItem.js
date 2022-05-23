import {StyleSheet, View, Text, Pressable} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
const GoalItem = (props) => {

    return(
        <View 
            style={{flexDirection: "row"}}
        >
            <Text style={styles.goalName}>
                {props.item.text}
            </Text>
            <Pressable
                android_ripple={{color: "rgb(255, 180, 180)", borderRadius: 5}} 
                style={({pressed})=> pressed && styles.pressedItem}
                onPress={props.deleteGoalHandler.bind(this, props.item.key)}
            >
                <IonIcon 
                    name="trash-outline" 
                    size={20}
                    color="black"
                    style= {styles.goalDelete}
                /> 
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalDelete: {
        backgroundColor: "#ee7762",
        borderRadius: 5,
        alignItems: 'center',
        margin: 5,
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
      },
      goalName: {
        backgroundColor: "#F9F3EE",
        borderRadius: 5,
        alignItems: 'center',
        color: "black",
        margin: 5,
        padding: 10,
        fontWeight: 'bold',
        flex: 1
      },
      pressedItem: {
          opacity: 0.5
      }
})