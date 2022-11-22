import React from "react";
import { SafeAreaView, ScrollView, View, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { registerStyle } from "./register.style";
import { HeaderComponent } from "../../components/header/header.componet";

export const RegisterScreen = ({ navigation }) => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmarSenha, setConfirmarSenha] = React.useState("");
  const [celular, setCelular] = React.useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent title='Registrar' />
        <View style={registerStyle.content}>
          <TextInput label='Nome' value={nome} onChangeText={(text) => setNome(text)} />
          <TextInput label='Email' keyboardType='email-address' value={email} onChangeText={(text) => setEmail(text)} />
          <TextInput
            label='Senha'
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            right={<TextInput.Icon icon='eye' color={registerStyle.icon.color} />}
          />
          <TextInput
            label='Confirme a Senha'
            secureTextEntry={true}
            value={confirmarSenha}
            onChangeText={(text) => setConfirmarSenha(text)}
            right={<TextInput.Icon icon='eye' color={registerStyle.icon.color} />}
          />
          <TextInput
            label='Numero de Celular'
            keyboardType='phone-pad'
            value={celular}
            onChangeText={(text) => setCelular(text)}
          />
          <Button
            mode='contained'
            onPress={() => {
              if (!email || !senha || !nome || !confirmarSenha || !celular) {
                Alert.alert("Verifique os campos informados");
                return;
              }
              if (senha !== confirmarSenha) {
                Alert.alert("Senhas não conferem");
                return;
              }
              navigation.navigate("Home", { email, senha, nome, celular });
            }}
            style={registerStyle.button}>
            {" "}
            Cadastrar e ir para Home{" "}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
