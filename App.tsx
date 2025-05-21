import { ScrollView,  StyleSheet,  View } from 'react-native';
import Basics from './src/components/Basic';
import TexInputComponent from './src/components/TextInput';
import ScrollViewComponent from './src/components/ScrollView';



function App(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled={true}
             contentContainerStyle ={styles.scrollViewContent}>
              <Basics />
            <TexInputComponent/> 
            <ScrollViewComponent/>
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