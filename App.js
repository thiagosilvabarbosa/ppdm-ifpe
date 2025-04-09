import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
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
            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "blue" }]} onPress={()=> setPagina("ListaContatos")}> 
              <Text style={estilos.textoBotao}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "red" }]} onPress={() => setPagina("cadastro")}>
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
              <Text>CPF</Text>
              <TextInput style={estilos.inputTexto} placeholder="Digite seu CPF" />
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
              <Text style={estilos.textoBotao}>Salvar</Text>
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

      {pagina === "contato" && (
        <View>
          <View style={{ alignItems: "center", marginBottom: 50 }}>
            <Text style={estilos.tituloPagina}>Contato</Text>
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
              <Text>Telefone</Text>
              <TextInput style={estilos.inputTexto} placeholder="Digite seu telefone" />
            </View>

            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "blue" }]} onPress={() => setPagina("ListaContatos")}>
              <Text style={estilos.textoBotao}>Salvar</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      )}

      {pagina === "EditarContato" && (
        <View>
          <View style={{ alignItems: "center", marginBottom: 50 }}>
            <Text style={estilos.tituloPagina}>Editar Contato</Text>
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
              <Text>Telefone</Text>
              <TextInput style={estilos.inputTexto} placeholder="Digite seu telefone" />
            </View>

            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "blue" }]} onPress={() => setPagina("ListaContatos")}>
              <Text style={estilos.textoBotao}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "red" }]} onPress={() => setPagina("ListaContatos")}>
              <Text style={estilos.textoBotao}>Excluir</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      )}

      {pagina === "ListaContatos" && (
        <View>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={estilos.tituloPagina}>Lista de Contatos</Text>
        </View>
        
        <FlatList
          data={[
            { id: '1', nome: 'Marcos Andrade', telefone: '81 988553424' },
            { id: '2', nome: 'Patrícia Tavares', telefone: '81 998765332' },
            { id: '3', nome: 'Rodrigo Antunes', telefone: '81 987765525' },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={estilos.cartaoContato} onPress={() => setPagina("EditarContato")}>

            <Avatar size={50} rounded source={{ uri: avatar }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={estilos.nomeContato}>{item.nome}</Text>
                <Text style={estilos.telefoneContato}>{item.telefone}</Text>
              </View>
              </TouchableOpacity> 
          )}
        />
            <TouchableOpacity style={[estilos.botaobackground, { backgroundColor: "blue" }]} onPress={() => setPagina("contato")}>
              <Text style={estilos.textoBotao}>Criar contato</Text>
            </TouchableOpacity>    
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

  cartaoContato: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    width: 300,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  nomeContato: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2E2E2E",
  },
  telefoneContato: {
    color: "#555",
  },
});
