import { StyleSheet } from "react-native";
import { colors } from "./colors";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  cartao: {
    width: "100%",
    maxWidth: 430,
    backgroundColor: colors.light.surface,
    borderRadius: 22,
    padding: 22,
    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  titulo: {
    fontSize: 23,
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 15,
    color: colors.light.subtitle,
    textAlign: "center",
    marginTop: 6,
    marginBottom: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.light.border,
    borderRadius: 12,
    padding: 13,
    color: colors.light.text,
  },
  boasVindas: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.light.text,
    textAlign: "center",
    marginVertical: 15,
  },
  visor: {
    backgroundColor: colors.light.visor,
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    marginBottom: 12,
  },
  rotulo: {
    color: colors.light.background.subtitle,
    fontSize: 12,
    fontWeight: "700",
  },
  numero: {
    color: colors.light.number,
    fontSize: 52,
    fontWeight: "800",
  },
  mensagem: {
    color: colors.success,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 14,
  },
  dica: {
    color: colors.light.subtitle,
    textAlign: "center",
    marginBottom: 14,
  },
  linhaBotoes: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoMenos: {
    backgroundColor: colors.primary,
    marginRight: 6,
  },
  botaoMais: {
    backgroundColor: colors.success,
    marginLeft: 6,
  },
  botaoZerar: {
    backgroundColor: colors.secondary,
    marginRight: 6,
  },
  botaoTema: {
    backgroundColor: colors.purple,
    marginLeft: 6,
  },
  botaoDesabilitado: {
    opacity: 0.45,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  rodape: {
    marginTop: 18,
    fontSize: 12,
    textAlign: "center",
  },

  linhaMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  barraFundo: {
    height: 10,
    backgroundColor: colors.light.progressTrack,
    borderRadius: 20,
    overflow: "hidden",
  },

  barraProgresso: {
    height: 10,
    backgroundColor: colors.progress,
    borderRadius: 20,
  },

  textoProgresso: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 15,
    color: colors.light.subtitle,
  },


  
});

export default styles;
