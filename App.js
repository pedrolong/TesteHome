import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./Styles/Style";

export default function App() {
  const imagem = {
    uri: "https://img.freepik.com/fotos-premium/cor-de-fundo-para-apresentacoes-de-modelo-de-design-decorativo-inserir-texto-com-espaco-para-copia_7954-4083.jpg",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TREK TREK TURISMOS</Text>
      <ImageBackground source={imagem} resizeMode="cover" style={styles.image}>
        <TouchableOpacity styles={styles.button}></TouchableOpacity>
        <TouchableOpacity styles={styles.button}></TouchableOpacity>
        <TouchableOpacity styles={styles.button}></TouchableOpacity>
        <TouchableOpacity styles={styles.button}></TouchableOpacity>
        <TouchableOpacity styles={styles.button}></TouchableOpacity>
      </ImageBackground>
      <View style={styles.footer}>
        <Text style={styles.trektext}> trektrek</Text>
      </View>
    </View>
  );
}
