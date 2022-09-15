import { Box } from "@mobily/stacks";
import React from "react";
import { useAuthentication } from "<%= name %>/App/Components/Authentication";
import Button from "<%= name %>/App/Components/Button";

function Login() {
  const { login } = useAuthentication();

  return (
    <Box flex="fluid" alignY="center" alignX="center">
      <Button onPress={login}>Login</Button>
    </Box>
  );
}

export default Login;
