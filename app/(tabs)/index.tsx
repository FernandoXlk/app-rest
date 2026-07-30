import { router } from "expo-router";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity,} from "react-native";


export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/Restbg.avif")}style={styles.background}resizeMode="cover">
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo-removebg-preview.png")}style={styles.logo}resizeMode="contain"/>
        </View>
        <View style={styles.content}>
          <Text style={styles.year}>DESDE 1987</Text>
          <Text style={styles.title}>La Real</Text>
          <Text style={styles.subtitle}>
            Uma experiência gastronômica única, preparada com ingredientes
            selecionados em um ambiente sofisticado.
          </Text>
          <TouchableOpacity style={styles.button}onPress={() => router.push("/explore")}>
            <Text style={styles.buttonText}>Ver Cardápio</Text>
          </TouchableOpacity>
        </View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  logo: {
    width: 170,
    height: 170,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    marginTop: -40,
  },
  year: {
    color: "#D4AF37",
    fontSize: 13,
    letterSpacing: 5,
    marginBottom: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 46,
    fontWeight: "700",
    marginBottom: 18,
  },
  subtitle: {
    color: "#EAEAEA",
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#D4AF37",
    borderRadius: 35,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#D4AF37",
    shadowOpacity: 0.45,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  buttonText: {
    color: "#111",
    fontSize: 18,
    fontWeight: "700",
  },
});