import { useAuthentication } from "<%= name %>/App/Components/Authentication";
import Button from "<%= name %>/App/Components/Button";
import Layout from "<%= name %>/App/Components/Layout";
import React from "react";

function Login() {
  const { login } = useAuthentication();

  return (
    <Layout.Center>
      <Button onPress={login}>Login</Button>
    </Layout.Center>
  );
}

export default Login;
