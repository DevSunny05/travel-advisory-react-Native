import { StatusBar } from 'expo-status-bar';
import { Button,  SafeAreaView,  Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className='mt-10' >
      <Text >Hii This is SARANG</Text>
      <Button title='Press' onPress={()=>alert("How can I help you")}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


