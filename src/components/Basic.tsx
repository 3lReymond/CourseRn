import { Image, StyleSheet, Text, View } from "react-native";


function  Basics(){
    return (
     <View>
         {/* View Component */}
               <Text style={styles.headerText}>View Component</Text>
               <View style={styles.boxContainer}>
                 <View style={styles.redBox} />
                 <View style={styles.blueBox} />
                 <View style={styles.greenBox} />
               </View>
         
               {/* Text Component */}
               <Text style={styles.headerText}>Text Component</Text>
               <Text style={styles.myFirstText}>My First React Native Course</Text>
               <Text style={styles.nestedText}>
                 Text components can be <Text style={styles.bold}>nested</Text>
               </Text>
         
               {/* Image Component */}
               <Text style={styles.headerText}>Image Component</Text>
               <Image
                 style={styles.image}
                 source={{ uri: "https://picsum.photos/200/300" }}
               />
               <Image style={styles.image} source={require("../../assets/Tut_ing.jpg")} />
         
                {/* Image Component */}
     </View>
    );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
     marginBottom: 25,
     textDecorationLine: 'underline',
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: "green",
  },
  myFirstText: {
    fontSize: 30,
    marginBottom: 10,
  },
  nestedText: {
    fontSize: 18,
    marginBottom: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default Basics ;