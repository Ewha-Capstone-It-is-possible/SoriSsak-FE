import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "@/components/InputBox";
import { FONT } from "@/constants/font";
import MainButton from "@/components/MainButton";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // 로그인 성공했다고 가정
    router.push("/onboarding");
  };

  return (
    <LinearGradient
      colors={["#FFF8DF", "#FFF8DF", "#DBFFB5"]}
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Image
              source={require("@/assets/images/logo1.png")}
              style={{
                width: 200,
                height: 133.33,
              }}
            />
          </View>

          <View style={{ gap: 20 }}>
            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontFamily: FONT.cookie.regular,
                  fontSize: 14,
                }}
              >
                아이디
              </Text>
              <InputBox
                placeholder="아이디를 입력하세요."
                style={{ borderColor: "#EEEEEE", borderWidth: 1 }}
              />
            </View>

            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontFamily: FONT.cookie.regular,
                  fontSize: 14,
                }}
              >
                비밀번호
              </Text>
              <InputBox
                placeholder="비밀번호를 입력하세요."
                style={{ borderColor: "#EEEEEE", borderWidth: 1 }}
              />
            </View>
            <View style={{ gap: 13 }}>
              <MainButton size="medium" selected onPress={handleLogin}>
                로그인
              </MainButton>
              <Text
                style={{
                  color: "#949494",
                  fontFamily: FONT.pretendard.regular,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                계정을 잊으셨나요?
              </Text>
            </View>
          </View>

          <View
            style={{ width: "100%", height: 1, backgroundColor: "#e9e9e9" }}
          ></View>

          <View style={{ gap: 10 }}>
            <MainButton size="medium" selected>
              카카오로 시작하기
            </MainButton>
            <Pressable>
              <Text
                style={{
                  color: "#949494",
                  fontFamily: FONT.pretendard.regular,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                회원가입
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 57.3,
    gap: 34,
  },
});
