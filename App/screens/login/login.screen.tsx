import React from "react";
import { Alert, SafeAreaView, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { loginStyle } from "./login.style";

export const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  //const [previousEmail, setPreviousEmail] = React.useState("");
  //const [previousSenha, setPreviousSenha] = React.useState("");

  //if (route.params?.email && route.params?.senha) {
  //  setPreviousEmail(route.params.email);
  //  setPreviousSenha(route.params.senha);
  //}

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title title='My Bank' titleStyle={loginStyle.cardTitle}></Card.Title>
          <Card.Content>
            <TextInput
              label='Email'
              keyboardType='email-address'
              value={email}
              onChangeText={(text) => setEmail(text)}></TextInput>

            <TextInput
              label='Senha'
              secureTextEntry={true}
              value={senha}
              onChangeText={(senha) => setSenha(senha)}></TextInput>

            <Button
              mode='contained'
              onPress={() => {
                if (!email && !senha) {
                  Alert.alert("Email e senha são obrigatórios");

                  return;
                }
                if (!email) {
                  Alert.alert("Email é obrigatório");

                  return;
                }
                if (!senha) {
                  Alert.alert("Senha é obrigatório");

                  return;
                }

                //if (!previousEmail && !previousSenha) {
                //  Alert.alert("Email não encontrado, registre-se");
                //  return;
                //}
                //
                //if (email !== previousEmail) {
                //  Alert.alert("Email não encontrado");
                //  return;
                //}
                //
                //if (senha !== previousSenha) {
                //  Alert.alert("Senha incorreta");
                //  return;
                //}

                navigation.navigate("Home", { email, senha });
              }}
              style={loginStyle.cardButton}>
              Login
            </Button>
            <Button
              onPress={() => {
                navigation.navigate("Register");
              }}
              uppercase={false}
              style={loginStyle.cardButton}>
              Não possui uma conta ?
            </Button>
            <Button
              uppercase={false}
              style={loginStyle.cardButton}
              onPress={() => Alert.alert("Em alguns minutos, receberá email com redefinição")}>
              Esqueci a senha
            </Button>
            {/*<Button uppercase={false} style={loginStyle.cardButton}>
              Atendimento
            </Button>*/}
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};
