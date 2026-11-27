import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  Pressable,
  ScrollView
} from "react-native";

// Importando estilos e cores
import { styles } from "../styles";
import { colors } from "../colors";


export default function ResumoScreen({ route, navigation }) {

  // 1. RECEBENDO OS DADOS DA TELA ANTERIOR

  const {
    nome = "Estudante",
    contador = 0,
    meta = 10,
    temaAtual = "light"
  } = route.params ?? {};


  // 2. SELECIONANDO O TEMA

  const tema = colors[temaAtual] || colors.light;


  // 3. CALCULANDO O PROGRESSO

  const progresso = Math.min(
    (contador / meta) * 100,
    100
  );


  // 4. INTERFACE DA TELA RESUMO

  return (

    <View
      style={[
        styles.container,
        { backgroundColor: tema.background }
      ]}
    >

      <StatusBar
        style={temaAtual === "light" ? "dark" : "light"}
      />

      <ScrollView
        contentContainerStyle={styles.conteudo}
      >

        <View
          style={[
            styles.cartao,
            { backgroundColor: tema.surface }
          ]}
        >

          {/* TÍTULO */}

          <Text
            style={[
              styles.titulo,
              { color: tema.text }
            ]}
          >
            Resumo da Meta
          </Text>


          {/* NOME DO USUÁRIO */}

          <Text
            style={[
              styles.subtitulo,
              { color: tema.subtitle }
            ]}
          >
            Olá, {nome}!
          </Text>


          {/* CONTADOR */}

          <Text
            style={[
              styles.boasVindas,
              { color: tema.text }
            ]}
          >
            Seu resultado atual
          </Text>


          <View
            style={[
              styles.barraFundo,
              {
                height: 90,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: tema.visor
              }
            ]}
          >

            <Text
              style={{
                color: tema.number,
                fontSize: 38,
                fontWeight: "bold"
              }}
            >
              {contador}
            </Text>

          </View>


          {/* INFORMAÇÕES DA META */}

          <View
            style={[
              styles.linhaMeta,
              { marginTop: 20 }
            ]}
          >

            <Text style={{ color: tema.text }}>
              Meta definida
            </Text>

            <Text style={{ color: tema.text }}>
              {meta}
            </Text>

          </View>


          <View style={styles.linhaMeta}>

            <Text style={{ color: tema.text }}>
              Progresso
            </Text>

            <Text style={{ color: tema.text }}>
              {Math.round(progresso)}%
            </Text>

          </View>


          {/* BARRA DE PROGRESSO */}

          <View
            style={[
              styles.barraFundo,
              { backgroundColor: tema.progressTrack }
            ]}
          >

            <View
              style={[
                styles.barraProgresso,
                { width: `${progresso}%` }
              ]}
            />

          </View>


          {/* RESULTADO */}

          <Text
            style={[
              styles.mensagem,
              {
                color: contador >= meta
                  ? colors.success
                  : colors.warning,
                marginTop: 20
              }
            ]}
          >
            {contador >= meta
              ? "Meta concluída! Parabéns!"
              : "Sua meta ainda está em andamento."}
          </Text>


          {/* BOTÃO VOLTAR */}

          <Pressable
            style={[
              styles.botao,
              {
                backgroundColor: colors.primary,
                marginTop: 15
              }
            ]}
            onPress={() => navigation.goBack()}
          >

            <Text style={styles.textoBotao}>
              Voltar ao início
            </Text>

          </Pressable>

        </View>

      </ScrollView>

    </View>

  );

}