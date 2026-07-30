import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity } from "react-native";

const pratos = [
  {
    id: "1",
    nome: "Filé Mignon",
    preco: "R$ 69,90",
    imagem: require("../../assets/file.jpg"),
  },
  {
    id: "2",
    nome: "Risoto de Camarão",
    preco: "R$ 74,90",
    imagem: require("../../assets/risoto.jpg"),
  },
  {
    id: "3",
    nome: "Salmão Grelhado",
    preco: "R$ 79,90",
    imagem: require("../../assets/salmão.jpg"),
  },
  {
    id: "4",
    nome: "Picanha Premium",
    preco: "R$ 89,90",
    imagem: require("../../assets/picanha.webp"),
  },
];

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio</Text>
      <FlatList data={pratos}keyExtractor={(item) => item.id}showsVerticalScrollIndicator={false} renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.85}>
              <Image source={item.imagem} style={styles.imagem}/>
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2a03c",
    paddingHorizontal: 18,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 34,
    fontWeight: "700",
    color: "#f5f4f0",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 22,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  imagem: {
    width: "100%",
    height: 220,
  },

  info: {
    padding: 18,
  },

  nome: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  preco: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "700",
    color: "#D4AF37",
  },
});