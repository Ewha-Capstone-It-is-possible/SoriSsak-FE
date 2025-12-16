import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONT } from "@/constants/font";

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export default function Header({ title, onBack }: HeaderProps) {
  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.container}>
        {/* Left */}
        <Pressable onPress={onBack} hitSlop={10} style={styles.left}>
          <Text style={styles.backText}>←</Text>
        </Pressable>

        {/* Center */}
        <Text style={styles.title}>{title}</Text>

        {/* Right (placeholder for center alignment) */}
        <View style={styles.right} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#FFF8DF",
  },

  container: {
    height: 48,
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
    fontSize: 16,
    fontFamily: FONT.cookie.bold,
    color: "#232323",
  },

  right: {
    width: 40,
  },
});
