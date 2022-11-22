import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./App.style";
import AppNavigator from "./App/app.navigator";

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};
export default App;
