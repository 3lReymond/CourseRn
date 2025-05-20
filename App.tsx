import { ScrollView, StyleSheet,  View } from 'react-native';
import Basics from './src/components/Basic';
import basics from './src/components/basic'
import TexInputComponent from './src/components/TextInput';

function App(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle ={styles.scrollViewContent}>
              <Basics />
            <TexInputComponent/> 
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    scrollViewContent : {
      padding: 20 
    }
});

export default App;