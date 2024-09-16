import {router} from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, BackHandler} from 'react-native';
import {useAuth} from "../hooks/Auth";

export default function App() {
  const {singin, singout} = useAuth();

  const handleEntrarSuper = async () => {
    try {
      await singIn ({email: "super@gmail.com", password: "Super123!"})
      router.replace("/");
    }catch (error) {
      console.log(e)
    }
  }

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
      <Button title='Singin Super'onPress={handleEntrarSuper}/>
      <Button 
        title='Singin Adm' 
        onPress={()=>
          singIn({email: "adm@email.com", password: "Adm123!"})
        }
      />

      <Button 
        title='Singin User' 
        onPress={()=>
          singIn({email: "user@email.com", password: "User123!"})
        }
      />
      <Button title='Sobre' onPress={()=> router.push("/about")} />
      <Button
      title="sair do aplicativo"
      onPress={()=> BackHandler.exitApp()}
      />
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
    gap: 15,
  },
  title: {
    fontFamily: "light",
    fontSize: 20,
  },
});
