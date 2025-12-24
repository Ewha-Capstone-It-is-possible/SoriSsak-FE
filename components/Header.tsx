import { FONT } from "@/constants/font";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export default function Header({ title, onBack }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack} hitSlop={10} style={styles.left}>
        <Image
          source={require("@/assets/icons/icon_arrow.png")}
          style={styles.arrowImage}
        />
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.right} />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#FFF8DF",
  },

  container: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30, // 전역 규칙
  },

  left: {
    width: 40,
    alignItems: "flex-start",
  },

  backText: {
    fontSize: 20,
    color: "#232323",
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontFamily: FONT.cookie.bold,
    color: "#232323",
  },

  right: {
    width: 40,
  },
  arrowImage: {
    width: 10,
    height: 19,
    resizeMode: "contain",
  },
});
