import {
  StyleSheet, View, FlatList, Text, Image, TouchableOpacity, } from "react-native";

const bebidas = [
  {
    id: "1",
    nome: "Suco de Laranja",
    preco: "R$ 12,90",
    imagem: require("../../assets/suquinho.jpg"),
  },
  {
    id: "2",
    nome: "Refrigerante",
    preco: "R$ 8,90",
    imagem: require("../../assets/refri.jpg"),
  },
  {
    id: "3",
    nome: "Água Mineral",
    preco: "R$ 5,90",
    imagem: require("../../assets/mineral.jpg"),
  },
  {
    id: "4",
    nome: "Caipirinha",
    preco: "R$ 18,90",
    imagem: require("../../assets/caipirinha.jpg"),
  },
  {
    id: "5",
    nome: "Vinho Tinto",
    preco: "R$ 29,90",
    imagem: require("../../assets/vinho.jpg"),
  },
  {
    id: "6",
    nome: "Cerveja Artesanal",
    preco: "R$ 16,90",
    imagem: require("../../assets/cerveja.jpg"),
  },
];

export default function Explore() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Cardápio</Text>
    <FlatList
        data={bebidas}keyExtractor={(item) => item.id} numColumns={2} columnWrapperStyle={s.row} showsVerticalScrollIndicator={false}renderItem={({ item }) => (
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
    paddingHorizontal: 12,
    paddingTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#D4AF37",
    textAlign: "center",
    marginBottom: 20,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 4,
  },

  imagem: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },

  info: {
    padding: 10,
    alignItems: "center",
  },

  nome: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },

  preco: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "700",
    color: "#D4AF37",
  },
});