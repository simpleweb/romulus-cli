import React from "react";
import { Text, View } from "react-native";
import { useAuthentication } from "<%= name %>/App/Components/Authentication";
import Button from "<%= name %>/App/Components/Button";

function Login() {
  const { login } = useAuthentication();

  return (
    <View>
      <Button onPress={login}>Login</Button>
    </View>
  );
}

export default Login;
