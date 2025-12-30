import { FONT } from "@/constants/font";
import COLORS from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

export default function Step4() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={{ gap: 50 }}>
        <View style={{ gap: 15 }}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>약 5분 소요</Text>
          </View>
          <Text style={styles.title}>인지 발달 평가</Text>
          <Text style={styles.subTitle}>자주 사용하는 단어와 문장</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontFamily: FONT.cookie.bold,
    color: "#232323",
  },

  subTitle: {
    fontSize: 17,
    fontFamily: FONT.cookie.regular,
    color: COLORS.black,
  },

  tag: {
    backgroundColor: "#D3F6DF",
    borderRadius: 1000,
    width: 71,
    height: 24,
    paddingVertical: 4,
  },

  tagText: {
    fontSize: 12,
    color: "#66AB7E",
    textAlign: "center",
  },
});
