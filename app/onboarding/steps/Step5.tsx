import { FONT } from "@/constants/font";
import COLORS from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

export default function Step5() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.title}>프로필 설정</Text>
      </View>
      <View style={{ gap: 40 }}>
        <View style={{ gap: 20 }}>
          <View>
            <Text style={styles.sectionTitle}>
              좋아하는 색상 <Text style={styles.required}>*</Text>
            </Text>
          </View>
          <View style={{ gap: 10, flexDirection: "row" }}>
            <View style={[styles.colorBox, { backgroundColor: "#FF6B9E" }]} />
            <View style={[styles.colorBox, { backgroundColor: "#9D74FF" }]} />
            <View style={[styles.colorBox, { backgroundColor: "#4E96FF" }]} />
            <View style={[styles.colorBox, { backgroundColor: "#60D168" }]} />
            <View style={[styles.colorBox, { backgroundColor: "#FFDA3C" }]} />
            <View style={[styles.colorBox, { backgroundColor: "#FFA046" }]} />
          </View>
        </View>

        <View>
          <Text style={styles.sectionTitle}>
            프로필 사진 <Text style={styles.required}>*</Text>
          </Text>
        </View>

        <View>
          <Text style={styles.sectionTitle}>음성 설정</Text>
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
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 17,
    fontFamily: FONT.cookie.regular,
    color: COLORS.black,
  },

  required: {
    color: "#FF6B00",
  },

  colorBox: {
    width: 47,
    height: 47,
    borderWidth: 3,
    borderColor: "#ffffff",
    borderRadius: 10,
  },
});
