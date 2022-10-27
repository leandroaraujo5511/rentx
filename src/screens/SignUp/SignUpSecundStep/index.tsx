import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";
import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from "./styles";

interface Params {
  name: string;
  email: string;
  driverLicense: string;
}

export function SignUpSecundStep() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const theme = useTheme();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { email, name, driverLicense } = route.params as Params;

  function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a Senha e a confirmação");
    }
    if (password != passwordConfirm) {
      return Alert.alert("As senhas não são iguais");
    }

    //enviar para api e cadastrar

    //chamar tela de sucesso no cadastro
    navigation.navigate("Confirmation", {
      title: "Conta Criada",
      message: "",
      nextScreenRouter: "SignIn",
    });
  }

  function handleBack() {
    navigation.goBack();
  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>
          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</SubTitle>
          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>
          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
