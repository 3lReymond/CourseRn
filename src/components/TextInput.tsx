import { StyleSheet, Text, TextInput, View } from "react-native";

function TexInputComponent(){
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Text Input Component</Text>
        <TextInput style={styles.input}
        
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container : {
        marginBottom :  20,
    },
headerText: {
    fontSize: 20,
    fontWeight: "bold",
     marginBottom: 25,
     textDecorationLine: 'underline',
  },
  input : {
    height : 50,
    borderColor : 'grey',
    borderWidth : 1,
    paddingHorizontal : 10,
    marginBottom : 10,
  },
})

export default TexInputComponent;