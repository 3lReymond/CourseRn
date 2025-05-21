import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function ScrollViewController() {
    return (
        <View style={styles.container}> 
            <Text style={styles.headerText}>Scroll View Component</Text>
            <ScrollView
             style={styles.scrollView}
             nestedScrollEnabled={true}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={true}
            bounces={true}>
                {
                    [...Array(20)].map((_,index)=>(
                        <View key={index} style={styles.box}>
                            <Text style={styles.boxText}>{index+1}</Text>
                        </View>
                    ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    headerText: {
    fontSize: 20,
    fontWeight: "bold",
     marginBottom: 25,
     textDecorationLine: 'underline',
  },
  scrollView : {
    height: 200,
    backgroundColor : '#F0F0F0'
  },
  scrollViewContent : {
    padding : 20,

  },
  box : {
    height : 40,
    marginBottom : 10,
    backgroundColor : '#3498db',
    justifyContent : 'center',
    alignContent : 'center',
    
  },
  boxText : {
    color : '#ffffff',
    fontWeight : 'bold'
  }

});

export default ScrollViewController;