import Header from "@/components/Header";
import InputBox from "@/components/InputBox";
import MainButton from "@/components/MainButton";
import { FONT } from "@/constants/font";
import GLOBAL from "@/styles/global.style";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const router = useRouter();

  return (
    <>
      <SafeAreaView style={GLOBAL.safeArea}>
        <Header title="회원가입" onBack={() => router.back()} />
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/logo2.png")}
            style={{ width: 100, height: 66.67 }}
          />
        </View>
        <ScrollView>
          <View style={[GLOBAL.container, { gap: 20 }]}>
            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontFamily: FONT.cookie.regular,
                  fontSize: 14,
                }}
              >
                부모 이름 <Text style={{ color: "#FF3300" }}>*</Text>
              </Text>
              <InputBox
                placeholder="부모 이름을 입력해주세요."
                style={{
                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  width: "100%",
                }}
              />
            </View>

            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontFamily: FONT.cookie.regular,
                  fontSize: 14,
                }}
              >
                아이디 <Text style={{ color: "#FF3300" }}>*</Text>
              </Text>
              <InputBox
                placeholder="아이디를 입력해주세요."
                style={{
                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  width: "100%",
                }}
              />
            </View>

            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontFamily: FONT.cookie.regular,
                  fontSize: 14,
                }}
              >
                비밀번호 <Text style={{ color: "#FF3300" }}>*</Text>
              </Text>
              <InputBox
                placeholder="비밀번호를 입력해주세요."
                style={{
                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  width: "100%",
                }}
              />
            </View>

            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontFamily: FONT.cookie.regular,
                  fontSize: 14,
                }}
              >
                비밀번호 확인 <Text style={{ color: "#FF3300" }}>*</Text>
              </Text>
              <InputBox
                placeholder="비밀번호를 입력해주세요."
                style={{
                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  width: "100%",
                }}
              />
            </View>

            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontFamily: FONT.cookie.regular,
                  fontSize: 14,
                }}
              >
                이메일 <Text style={{ color: "#FF3300" }}>*</Text>
              </Text>
              <InputBox
                placeholder="이메일을 입력해주세요."
                style={{
                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  width: "100%",
                }}
              />
            </View>

            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontFamily: FONT.cookie.regular,
                  fontSize: 14,
                }}
              >
                핸드폰 번호 <Text style={{ color: "#FF3300" }}>*</Text>
              </Text>
              <InputBox
                placeholder="핸드폰 번호를 입력해주세요."
                style={{
                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  width: "100%",
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.bottom}>
        <MainButton onPress={() => router.push("/onboarding")}>다음</MainButton>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: { padding: 30, backgroundColor: "#ffffff" },
});
