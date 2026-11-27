//App.js Raiz do Projeto
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importando as telas
import HomeScreen from "./screens/HomeScreen";
import ResumoScreen from "./screens/ResumoScreen";

// Criando o navegador
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2563EB",
          },

          headerTintColor: "#FFFFFF",

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* PRIMEIRA TELA */}

        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            title: "Meu Contador de Metas",
          }}
        />

        {/* SEGUNDA TELA */}

        <Stack.Screen
          name="Resumo"
          component={ResumoScreen}
          options={{
            title: "Resumo da Meta",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}