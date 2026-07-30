import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity } from "react-native";

const sobremesas = [
  {
    id: "1",
    nome: "Petit Gâteau",
    preco: "R$ 29,90",
    imagem: require("../../assets/petit-gateau.jpg"),
  },
  {
    id: "2",
    nome: "Cheesecake de Frutas Vermelhas",
    preco: "R$ 24,90",
    imagem: require("../../assets/cakemurango.jpg"),
  },
  {
    id: "3",
    nome: "Torta de Limão",
    preco: "R$ 19,90",
    imagem: require("../../assets/tortalimao.jpg"),
  },
  {
    id: "4",
    nome: "Brownie com Sorvete",
    preco: "R$ 27,90",
    imagem: require("../../assets/brownieChoco.jpg"),
  },
];

export default function Sobremesas() {
  return (
    <View style={s.container}>
      <Text style={s.titulo}>Sobremesas</Text>

      <FlatList data={sobremesas} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
          <TouchableOpacity style={s.card} activeOpacity={0.85}>
            <Image source={item.imagem} style={s.imagem} />
            <View style={s.info}>
              <Text style={s.nome}>{item.nome}</Text>
              <Text style={s.preco}>{item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 18,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 34,
    fontWeight: "700",
    color: "#D4AF37",
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