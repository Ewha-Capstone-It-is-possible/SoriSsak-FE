import CheckBox from "@/components/CheckBox";
import InputBox from "@/components/InputBox";
import { FONT } from "@/constants/font";
import COLORS from "@/styles/colors";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const REPORT_OPTIONS = ["앱 내 알림", "이메일", "SMS"];
const SENSE_OPTIONS = ["청각", "시각", "촉각(진동)"];

export default function Step2() {
  const [pin, setPin] = useState("");
  const [reports, setReports] = useState<string[]>(["앱 내 알림"]);
  const [teacherCode, setTeacherCode] = useState("");
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [senses, setSenses] = useState<string[]>([]);

  const toggleReport = (item: string) => {
    setReports((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  const toggleSense = (item: string) => {
    setSenses((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        부모 정보 및 아이 추가 사항을{"\n"}입력해주세요.
      </Text>

      {/* 부모 정보 */}
      <View style={{ gap: 20 }}>
        {/* PIN */}
        <ScrollView style={{ gap: 20 }}>
          <Text style={styles.sectionTitle}>부모 정보</Text>
          <View style={styles.field}>
            <Text style={styles.label}>
              부모 모드 전환 비밀번호 <Text style={styles.required}>*</Text>
            </Text>
            <InputBox
              placeholder="숫자 4자리를 입력해주세요."
              value={pin}
              onChangeText={setPin}
              keyboardType="number-pad"
              maxLength={4}
              secureTextEntry
            />
            <Text style={styles.helper}>
              아이가 설정을 변경하지 못하도록 보호합니다
            </Text>
          </View>

          {/* Report */}
          <View style={styles.field}>
            <Text style={styles.label}>
              리포트 수신 방법 (복수 선택 가능)
              <Text style={styles.required}> *</Text>
            </Text>

            <View style={{ gap: 10 }}>
              {REPORT_OPTIONS.map((item) => {
                return (
                  <View key={item} style={styles.checkboxContainer}>
                    <CheckBox />
                    <Text style={styles.checkText}>{item}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>교사 코드 입력</Text>
            <InputBox
              placeholder="교사 코드를 입력해주세요."
              value={teacherCode}
              onChangeText={setTeacherCode}
            />
          </View>

          <View style={{ gap: 20 }}>
            <View style={{ gap: 15 }}>
              <Text style={styles.sectionTitle}>아이 추가 사항</Text>
              <Text style={styles.plus}>
                아이의 관심사에 맞춰 사용 환경을 제공합니다.
              </Text>
            </View>
            {/* Mood */}
            <View style={styles.field}>
              <Text style={styles.label}>
                좋아하는 그림의 분위기 <Text style={styles.required}>*</Text>
              </Text>

              <View style={styles.imageRow}>
                <Image
                  source={require("@/assets/images/onboarding/onboarding_img1.png")}
                  style={styles.imageBox}
                />
                <Image
                  source={require("@/assets/images/onboarding/onboarding_img2.png")}
                  style={styles.imageBox}
                />
                <Image
                  source={require("@/assets/images/onboarding/onboarding_img3.png")}
                  style={styles.imageBox}
                />
              </View>
            </View>
          </View>

          {/* Sense */}
          <View style={styles.field}>
            <Text style={styles.label}>
              이런 감각에 더 예민해요 <Text style={styles.required}>*</Text>
            </Text>

            <View style={styles.chipRow}>
              {SENSE_OPTIONS.map((item) => {
                const active = senses.includes(item);
                return (
                  <Pressable
                    key={item}
                    onPress={() => toggleSense(item)}
                    style={[styles.chip, active && styles.chipActive]}
                  >
                    <Text
                      style={[styles.chipText, active && styles.chipTextActive]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </ScrollView>
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
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 20,
    fontFamily: FONT.cookie.bold,
  },

  field: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#232323",
    fontFamily: FONT.cookie.regular,
  },

  plus: {
    fontSize: 17,
    marginBottom: 8,
    color: "#232323",
    fontFamily: FONT.cookie.regular,
  },

  required: {
    color: "#FF6B00",
  },

  helper: {
    marginTop: 6,
    fontSize: 12,
    color: "#C3C3C3",
  },

  checkboxContainer: {
    flexDirection: "row",
    gap: 11,
  },

  checkText: {
    fontSize: 14,
    color: COLORS.black,
  },

  imageRow: {
    flexDirection: "row",
    gap: 10,
  },

  imageBox: {
    width: 105,
    height: 105,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
  },

  imageBoxActive: {
    borderColor: "#FFE571",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  chipRow: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },

  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },

  chipActive: {
    backgroundColor: "#FFE571",
  },

  chipText: {
    fontSize: 13,
    color: "#8A8A8A",
  },

  chipTextActive: {
    color: "#232323",
    fontFamily: FONT.cookie.bold,
  },
});
