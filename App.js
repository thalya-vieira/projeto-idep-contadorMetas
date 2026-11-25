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

// Importando os estilos
import { styles } from "./styles";

// Importando as cores
import { colors } from "./colors";

export default function App() {
  const [nome, setNome] = useState("");
  const [contador, setContador] = useState(0);
  const [temaSelecionado, setTemaSelecionado] = useState("light");

  // META DIÁRIA DO APLICATIVO
  const meta = 10;

  // Cálculo do progresso
  const progresso = Math.min((contador / meta) * 100, 100);

  // Responsividade da tela
  const { width } = useWindowDimensions();
  const telaPequena = width < 380;

  // Seleção do tema
  const tema = colors[temaSelecionado];

  const alternarTema = () => {
    if (temaSelecionado === "light") {
      setTemaSelecionado("dark");
    } else if (temaSelecionado === "dark") {
      setTemaSelecionado("atividade");
    } else {
      setTemaSelecionado("light");
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: tema.background },
      ]}
    >
      <StatusBar
        style={temaSelecionado === "light" ? "dark" : "light"}
      />

      <ScrollView contentContainerStyle={styles.conteudo}>
        <View
          style={[
            styles.cartao,
            {
              padding: telaPequena ? 15 : 22,
              backgroundColor: tema.surface,
            },
          ]}
        >
          {/* TÍTULO */}
          <Text
            style={[
              styles.titulo,
              { fontSize: telaPequena ? 20 : 24 },
            ]}
          >
            Meu Contador de Metas
          </Text>

          <Text
            style={[
              styles.subtitulo,
              { color: tema.subtitle },
            ]}
          >
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

          {/* BOAS-VINDAS */}
          <Text
            style={[
              styles.boasVindas,
              { color: tema.text },
            ]}
          >
            {nome.trim()
              ? `Olá, ${nome}!`
              : "Olá, estudante!"}
          </Text>

          {/* PROGRESSO DA META */}
          <View style={styles.linhaMeta}>
            <Text style={{ color: tema.text }}>
              Progresso da meta
            </Text>

            <Text style={{ color: tema.text }}>
              {contador} / {meta}
            </Text>
          </View>

          {/* BARRA DE PROGRESSO */}
          <View
            style={[
              styles.barraFundo,
              { backgroundColor: tema.progressTrack },
            ]}
          >
            <View
              style={[
                styles.barraProgresso,
                { width: `${progresso}%` },
              ]}
            />
          </View>

          <Text
            style={[
              styles.textoProgresso,
              { color: tema.subtitle },
            ]}
          >
            {Math.round(progresso)}% concluído
          </Text>

          {/* MENSAGEM DE META */}
          {contador >= meta ? (
            <Text style={styles.mensagem}>
              Parabéns! Você chegou a 10 ou mais!
            </Text>
          ) : (
            <Text
              style={[
                styles.dica,
                { color: tema.subtitle },
              ]}
            >
              Continue testando os botões.
            </Text>
          )}

          {/* BOTÕES DE CONTROLE */}
          <View style={styles.linhaBotoes}>
            <Pressable
              disabled={contador === 0}
              style={[
                styles.botao,
                styles.botaoMenos,
                contador === 0 && styles.botaoDesabilitado,
              ]}
              onPress={() =>
                setContador((valor) =>
                  Math.max(0, valor - 1)
                )
              }
            >
              <Text style={styles.textoBotao}>
                − Diminuir
              </Text>
            </Pressable>

            <Pressable
              style={[styles.botao, styles.botaoMais]}
              onPress={() =>
                setContador((valor) => valor + 1)
              }
            >
              <Text style={styles.textoBotao}>
                + Adicionar
              </Text>
            </Pressable>
          </View>

          {/* BOTÕES EXTRAS */}
          <View style={styles.linhaBotoes}>
            <Pressable
              style={[styles.botao, styles.botaoZerar]}
              onPress={() => setContador(0)}
            >
              <Text style={styles.textoBotao}>
                Zerar
              </Text>
            </Pressable>

            <Pressable
              style={[styles.botao, styles.botaoTema]}
              onPress={alternarTema}
            >
              <Text style={styles.textoBotao}>
                Tema: {temaSelecionado}
              </Text>
            </Pressable>
          </View>
        </View>

        {/* RODAPÉ */}
        <Text
          style={[
            styles.rodape,
            { color: tema.subtitle },
          ]}
        >
          Desenvolvido na aula de Mobile I
        </Text>
      </ScrollView>
    </View>
  );
}