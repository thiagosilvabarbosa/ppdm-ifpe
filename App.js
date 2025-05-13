import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Button, ListItem } from "@rneui/themed";
import { useLayoutEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import { Avatar, Input, Text } from "react-native-elements";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";


const Stack = createStackNavigator();

const DATA = [
  {
    id: '1',
    name: 'Thiago Barbosa',
    number: "8199999999",
    mail:"thiago@gmail.com",
    avatar: 'https://randomuser.me/api/portraits/men/63.jpg'
  },
  {
    id: '2',
    name: 'Levi Renato',
    number: "8188888888",
    mail:"levi@gmail.com",
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    id: '3',
    name: 'Rosilene Silva',
    number: "8177777777",
    mail:"rosilene@gmail.com",
    avatar: 'https://randomuser.me/api/portraits/women/27.jpg'
  },
];


const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/046/300/541/non_2x/avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-for-social-media-profiles-icons-screensavers-free-png.png",
        }}
      />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <Input placeholder="Email" containerStyle={styles.emailContainer} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Senha</Text>
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          containerStyle={styles.senhaContainer}
          value={senha} 
          onChangeText={setSenha}
        />
      </View>

      <View style={styles.ButtomContainer}>
        <Button onPress={async() =>{
          try{
            
            await signInWithEmailAndPassword(auth, email, senha);
            navigation.navigate("Lista");


          }catch(error){

            alert("Erro no login: " + error.message);
          }
        } }
          buttonStyle={{
            marginBottom: 30,
          }}
        >
          Login
        </Button>
        <Button onPress={() => navigation.navigate("Cadastro")}>
          Cadastre-se
        </Button>
      </View>
      <Button type="clear" onPress={() => navigation.navigate("Redefinir")} buttonStyle={{
        marginTop: 50,
      }}>
        Esqueceu a senha?
      </Button>
    </View>
  );
};

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <View style={styles.container}>

      <View style={styles.formContainer}>
        
        <Text style={styles.label}>Nome</Text>

        <Input placeholder="Nome" containerStyle={styles.emailContainer} />
        <Text style={styles.label}>Cpf</Text>

        <Input placeholder="CPF" containerStyle={styles.cpfContainer} />
        <Text style={styles.label}>Email</Text>

        <Input placeholder="Email" containerStyle={styles.emailContainer} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Senha</Text>

        <Input placeholder="Senha" containerStyle={styles.senhaContainer} value={senha} onChangeText={setSenha} />
      
      </View>

      <View style={styles.ButtomContainer}>
        <Button
          onPress={async() => {
            try {

                const credenciaisUsuario = await createUserWithEmailAndPassword(auth, email, senha);
                const user = credenciaisUsuario.user;
                alert("cadastro realizado com sucesso");
                navigation.navigate("Login");
            } catch(error){
                alert("erro ao cadastrar")
            }
          }}
          buttonStyle={{
            marginBottom: 20,
          }}
        >Salvar
        
        </Button>
      </View>
    </View>
  );
};

const Lista = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          size={"large"}
          name="add-circle"
          onPress={() => navigation.navigate("Contato")}
        />
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate("Alteracontato", {
            name: item.name,
            number: item.number,
            mail: item.mail,
            avatar: item.avatar,
            id: item.id })}
        >
          <Avatar source={{ uri: item.avatar }} size="large" />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Title>{item.number}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      )}
    />
  );
};
const Contato = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome</Text>
        <Input placeholder="Nome" containerStyle={styles.emailContainer} />
        <Text style={styles.label}>Email</Text>
        <Input placeholder="Email" containerStyle={styles.emailContainer} />
        <Text style={styles.label}>Telefone</Text>
        <Input placeholder="Telefone" containerStyle={styles.senhaContainer} />
      </View>

      <View style={styles.ButtomContainer}>
        <Button
          onPress={() => navigation.navigate("Lista")}
          buttonStyle={{
            marginBottom: 20,
          }}
        >
          Salvar
        </Button>
      </View>
    </View>
  );
};

const Alteracontato = () => {
  const route= useRoute()
  const { name: initialName, number: initialNumber, mail: initialMail } = route.params;

  const [name, setName] = useState(initialName);
  const [number, setNumber] = useState(initialNumber);
  const [mail, setMail] = useState(initialMail);


  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome</Text>
        <Input
          value={name}
          onChangeText={setName}
          containerStyle={styles.emailContainer}
        />

        <Text style={styles.label}>Email</Text>
        <Input
          value={mail}
          onChangeText={setMail}
          containerStyle={styles.emailContainer}
        />

        <Text style={styles.label}>Telefone</Text>
        <Input
          value={number}
          onChangeText={setNumber}
          containerStyle={styles.senhaContainer}
        />
      </View>
      <View style={styles.ButtomContainer}>
        <Button
          buttonStyle={{
            marginBottom: 20,
          }}
        >
          Alterar
        </Button>
        <Button
          buttonStyle={{
            marginBottom: 20,
            backgroundColor: "red",
          }}
        >
          Excluir
        </Button>
      </View>
    </View>
  )
}

const Redefinir = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <Input placeholder="Email" containerStyle={styles.emailContainer} />
      </View>

      <View style={styles.ButtomContainer}>
        <Button
          onPress={() => {
            alert("Email enviado caso exista uma conta");
            navigation.navigate("Login");
          }}
          buttonStyle={{
            marginBottom: 20,
          }}
        >
          Enviar
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  formContainer: {
    width: "60%",
    marginTop: "20%",
  },
  emailContainer: {
    marginBottom: 10,
  },
  senhaContainer: {
    marginBottom: 10,
  },
  cpfContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ButtomContainer: {
    width: "40%"
  },
  item: {
    backgroundColor: "#ffff",
    padding: 5,
    marginBottom: 8,
    
  },
  title: {
    fontSize: 25,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerTitleAlign: 'center', title: 'Usuário' }}/>
        <Stack.Screen name="Redefinir" component={Redefinir} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="Lista" component={Lista} options={{headerTitleAlign: 'center', title: 'Lista de Contatos' }}/>
        <Stack.Screen name="Contato" component={Contato}  options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Alteracontato" component={Alteracontato} options={{headerTitleAlign: 'center', title:'  Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}