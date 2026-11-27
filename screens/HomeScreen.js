//HomeScreen.js
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from "react-native";

// IMPORTANDO ESTILOS E CORES
import { styles } from "../styles";
import { colors } from "../colors";

export default function HomeScreen({ navigation }) {
  // ESTADOS
  const [nome, setNome] = useState("");
  const [contador, setContador] = useState(0);
  const [temaAtual, setTemaAtual] = useState("light");

  // TEMA ATUAL
  const tema = colors[temaAtual] || colors.light;

  // RESPONSIVIDADE
  const { width } = useWindowDimensions();
  const telaPequena = width < 400;

  // META E PROGRESSO
  const meta = 10;

  const progresso = Math.min((contador / meta) * 100, 100);

  // ALTERNAR TEMAS
  const trocarTema = () => {
    const temas = ["light", "dark", "purpleTheme"];

    const indiceAtual = temas.indexOf(temaAtual);

    const proximoIndice = (indiceAtual + 1) % temas.length;

    setTemaAtual(temas[proximoIndice]);
  };

  // ABRIR TELA DE RESUMO
  const abrirResumo = () => {
    navigation.navigate("Resumo", {
      nome: nome.trim() || "Estudante",
      contador,
      meta,
      temaAtual,
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: tema.background }]}>
      <StatusBar style={temaAtual === "light" ? "dark" : "light"} />

      <ScrollView
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={[
            styles.cartao,
            {
              backgroundColor: tema.surface,
              padding: telaPequena ? 15 : 22,
            },
          ]}
        >
          {/* TÍTULO */}

          <Text
            style={[
              styles.titulo,
              {
                color: tema.text,
                fontSize: telaPequena ? 20 : 23,
              },
            ]}
          >
            Meu Contador de Metas
          </Text>

          {/* SUBTÍTULO */}

          <Text style={[styles.subtitulo, { color: tema.subtitle }]}>
            Programação Mobile I
          </Text>

          {/* CAMPO DE NOME */}

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: tema.inputBackground,
                borderColor: tema.border,
                color: tema.text,
              },
            ]}
            placeholder="Digite seu nome"
            placeholderTextColor={tema.subtitle}
            value={nome}
            onChangeText={setNome}
          />

          {/* SAUDAÇÃO */}

          <Text style={[styles.boasVindas, { color: tema.text }]}>
            {nome.trim() ? `Olá, ${nome.trim()}!` : "Olá, estudante!"}
          </Text>

          {/* PROGRESSO */}

          <View style={styles.linhaMeta}>
            <Text style={{ color: tema.text }}>Progresso da meta</Text>

            <Text style={{ color: tema.text }}>
              {contador} / {meta}
            </Text>
          </View>

          {/* BARRA DE PROGRESSO */}

          <View
            style={[styles.barraFundo, { backgroundColor: tema.progressTrack }]}
          >
            <View style={[styles.barraProgresso, { width: `${progresso}%` }]} />
          </View>

          <Text style={[styles.textoProgresso, { color: tema.subtitle }]}>
            {Math.round(progresso)}% concluído
          </Text>

          {/* MENSAGEM */}

          {contador >= meta ? (
            <Text style={[styles.mensagem, { color: colors.warning }]}>
              Parabéns! Você concluiu a meta!
            </Text>
          ) : (
            <Text style={[styles.dica, { color: tema.subtitle }]}>
              Continue testando os botões.
            </Text>
          )}

          {/* DIMINUIR E ADICIONAR */}

          <View style={styles.linhaBotoes}>
            <Pressable
              disabled={contador === 0}
              style={[
                styles.botao,
                styles.botaoMenos,
                contador === 0 && styles.botaoDesabilitado,
              ]}
              onPress={() => setContador((valor) => Math.max(0, valor - 1))}
            >
              <Text style={styles.textoBotao}>− Diminuir</Text>
            </Pressable>

            <Pressable
              style={[styles.botao, styles.botaoMais]}
              onPress={() => setContador((valor) => valor + 1)}
            >
              <Text style={styles.textoBotao}>+ Adicionar</Text>
            </Pressable>
          </View>

          {/* ZERAR E MUDAR TEMA */}

          <View style={styles.linhaBotoes}>
            <Pressable
              style={[styles.botao, styles.botaoZerar]}
              onPress={() => setContador(0)}
            >
              <Text style={styles.textoBotao}>Zerar</Text>
            </Pressable>

            <Pressable
              style={[styles.botao, styles.botaoTema]}
              onPress={trocarTema}
            >
              <Text style={styles.textoBotao}>
                {temaAtual === "light"
                  ? "Tema escuro"
                  : temaAtual === "dark"
                    ? "Tema roxo"
                    : "Tema claro"}
              </Text>
            </Pressable>
          </View>

          {/* BOTÃO DE NAVEGAÇÃO */}

          <Pressable
            style={[
              styles.botao,
              {
                backgroundColor: colors.primary,
                marginTop: 10,
              },
            ]}
            onPress={abrirResumo}
          >
            <Text style={styles.textoBotao}>Ver resumo da meta</Text>
          </Pressable>
        </View>

        {/* RODAPÉ */}

        <Text style={[styles.rodape, { color: tema.subtitle }]}>
          Desenvolvido na aula de Mobile I
        </Text>
      </ScrollView>
    </View>
  );
}