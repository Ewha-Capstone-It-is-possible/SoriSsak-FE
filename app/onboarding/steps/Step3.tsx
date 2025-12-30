import { FONT } from "@/constants/font";
import COLORS from "@/styles/colors";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Step3() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={{ gap: 50 }}>
        <View style={{ gap: 15 }}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>약 5분 소요</Text>
          </View>
          <Text style={styles.title}>인지 발달 평가</Text>
          <Text style={styles.subTitle}>
            아이가 편안한 상태에서 진행해주세요
          </Text>
        </View>

        <View style={styles.descriptionBox}>
          <Image
            source={require("@/assets/icons/icon_eye.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={styles.description}>
            사과를 모두 찾아보세요 <Text style={styles.required}>*</Text>
          </Text>
        </View>

        <View style={{ gap: 15 }}>
          <View style={styles.testBox}>
            <Image
              source={require("@/assets/images/onboarding/onboarding_test1.png")}
              style={styles.imgBox}
            />
            <Image
              source={require("@/assets/images/onboarding/onboarding_test2.png")}
              style={styles.imgBox}
            />
            <Image
              source={require("@/assets/images/onboarding/onboarding_test3.png")}
              style={styles.imgBox}
            />
            <Image
              source={require("@/assets/images/onboarding/onboarding_test4.png")}
              style={styles.imgBox}
            />
          </View>

          <View style={styles.testBox}>
            <Image
              source={require("@/assets/images/onboarding/onboarding_test5.png")}
              style={styles.imgBox}
            />
            <Image
              source={require("@/assets/images/onboarding/onboarding_test6.png")}
              style={styles.imgBox}
            />
            <Image
              source={require("@/assets/images/onboarding/onboarding_test7.png")}
              style={styles.imgBox}
            />
            <Image
              source={require("@/assets/images/onboarding/onboarding_test8.png")}
              style={styles.imgBox}
            />
          </View>
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

  description: {
    fontSize: 17,
    fontFamily: FONT.cookie.bold,
  },

  required: {
    color: "#FF6B00",
  },

  descriptionBox: {
    gap: 15,
    alignItems: "center",
  },

  testBox: {
    flexDirection: "row",
    gap: 15,
  },

  imgBox: {
    width: 72.25,
    height: 72.25,
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
});
