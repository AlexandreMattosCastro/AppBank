import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export const Home = ({ navigation, route }) => {
  const { email, nome, senha, celular } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}> Meus dados bancários</Text>
        <Text> Bem vindo(a) {String(nome).toUpperCase()} </Text>
      </View>
      <View style={styles.containerIformacoes}>
        <Text style={styles.title}>Meu Saldo disponivel</Text>
        <Text style={styles.title}>Extrato</Text>
      </View>
      <View style={styles.containerDados}>
        <Text style={styles.title}>Dados Usuario</Text>
        <Text style={{ marginBottom: "5 %" }}>Email utilizado para acesso: {email} </Text>
        <Text style={{ marginBottom: "5 %" }}>Telefone utilizado para acesso: {celular} </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login", { email, senha })}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "3%",
    flex: 1,
    backgroundColor: "#121111",
  },
  containerHeader: {
    flex: 0.5,
    backgroundColor: "#DCDCDC",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
  },
  containerIformacoes: {
    marginTop: "14%",
    marginBottom: "14%",
    paddingStart: "5%",
    paddingEnd: "8%",
    backgroundColor: "#DCDCDC",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  containerDados: {
    marginTop: "5%",
    marginBottom: "8%",
    paddingStart: "5%",
    paddingEnd: "5%",
    backgroundColor: "#DCDCDC",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },

  button: {
    position: "absolute",
    backgroundColor: "#DCDCDC",
    width: "60%",
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: 14,
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  Text: {
    color: "#a1a1a1",
  },
});
