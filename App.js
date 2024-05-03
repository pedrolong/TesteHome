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
    uri: "https://i.pinimg.com/474x/37/8a/96/378a96b7ef43eeae34b895087ceee556.jpg",
  };
  const imagem1 = {
    uri: "https://cdn-icons-png.flaticon.com/512/2106/2106114.png",
  };
  const imagem2 = {
    uri: "https://cdn-icons-png.flaticon.com/512/83/83712.png",
  };
  const imagem3 = {
    uri: "https://cdn-icons-png.flaticon.com/512/4967/4967006.png",
  };
  const imagem4 = {
    uri: "https://cdn-icons-png.flaticon.com/512/1020/1020719.png",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TREK TREK TURISMOS</Text>
      <ImageBackground source={imagem} resizeMode="cover" style={styles.image}>
        <TouchableOpacity style={styles.button1}>
          <Image source={imagem1} style={styles.imgbtn} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image source={imagem2} style={styles.imgbtn2} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3}>
          <Image source={imagem3} style={styles.imgbtn3} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <Image source={imagem4} style={styles.imgbtn4} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
