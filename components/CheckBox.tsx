import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable
      onPress={() => setChecked((prev) => !prev)}
      style={styles.wrapper}
    >
      {checked && (
        <View style={styles.checkedBox}>
          <Image
            source={require("@/assets/icons/icon_check.png")}
            style={styles.icon}
          />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 20,
    height: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  checkedBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "#FFE55C", // 노란 배경
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 11.66,
    height: 8.33,
    resizeMode: "contain",
  },
});
