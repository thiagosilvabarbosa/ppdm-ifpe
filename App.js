import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

export default function App() {
  const [pagina, setPagina] = React.useState("home");
  const avatar =
    "https://static.vecteezy.com/system/resources/previews/046/300/541/non_2x/avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-for-social-media-profiles-icons-screensavers-free-png.png";

  React.useEffect(() => {
    console.log(pagina);
  }, [pagina]);

  return (
    <View style={estilos.container}>
      {pagina === "home" && (
        <View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Avatar size={100} rounded source={{ uri: avatar }} />
          </View>
          <View>
            <View style={estilos.campoEntrada}>
              <Text>Email</Text>
              <TextInput style={estilos.inputTexto} placeholder="Digite seu email" />
            </View>
            <View style={estilos.campoEntrada}>
              <Text>Senha</Text>
              <TextInput style={estilos.inputTexto} secureTextEntry placeholder="Digite sua senha" />
            </View>
            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "green" }]}> 
              <Text style={estilos.textoBotao}>Logar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "green" }]} onPress={() => setPagina("cadastro")}>
              <Text style={estilos.textoBotao}>Cadastrar-se</Text>
            </TouchableOpacity>
            <Text style={estilos.textoLink} onPress={() => setPagina("forgotPassword")}>
              Esqueceu a senha
            </Text>
          </View>
        </View>
      )}

      {pagina === "cadastro" && (
        <View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={estilos.tituloPagina}>Cadastro</Text>
          </View>
          <View>
            <View style={estilos.campoEntrada}>
              <Text>Nome</Text>
              <TextInput style={estilos.inputTexto} placeholder="Digite seu nome" />
            </View>
            <View style={estilos.campoEntrada}>
              <Text>Email</Text>
              <TextInput style={estilos.inputTexto} placeholder="Digite seu email" />
            </View>
            <View style={estilos.campoEntrada}>
              <Text>Senha</Text>
              <TextInput style={estilos.inputTexto} secureTextEntry placeholder="Crie uma senha" />
            </View>
            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "green" }]} onPress={() => setPagina("home")}>
              <Text style={estilos.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {pagina === "forgotPassword" && (
        <View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={estilos.tituloPagina}>Esqueceu a senha</Text>
          </View>
          <View>
            <View style={estilos.campoEntrada}>
              <Text>Email</Text>
              <TextInput style={estilos.inputTexto} placeholder="Digite seu email" />
            </View>
            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "green" }]} onPress={() => setPagina("home")}>
              <Text style={estilos.textoBotao}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  campoEntrada: {
    marginBottom: 5,
  },
  inputTexto: {
    backgroundColor: "#E5E5E5",
    padding: 10,
    borderRadius: 8,
    width: 250,
  },
  botaobackground: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    color: "#E5E5E5",
    fontWeight: "bold",
  },
  tituloPagina: {
    fontSize: 22,
    fontWeight: "bold",
  },
  textoLink: {
    textAlign: "center",
    color: "blue",
    marginTop: 10,
  },
});
