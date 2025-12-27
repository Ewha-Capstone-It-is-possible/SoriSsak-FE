import InputBox from "@/components/InputBox";
import { FONT } from "@/constants/font";
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

            <View style={styles.checkRow}>
              {REPORT_OPTIONS.map((item) => {
                const checked = reports.includes(item);
                return (
                  <Pressable
                    key={item}
                    onPress={() => toggleReport(item)}
                    style={[styles.checkBox, checked && styles.checkBoxActive]}
                  >
                    <Text
                      style={[
                        styles.checkText,
                        checked && styles.checkTextActive,
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Teacher Code */}
          <View style={styles.field}>
            <Text style={styles.label}>교사 코드 입력</Text>
            <InputBox
              placeholder="교사 코드를 입력해주세요."
              value={teacherCode}
              onChangeText={setTeacherCode}
            />
          </View>

          {/* 아이 추가 사항 */}

          <Text style={styles.sectionTitle}>아이 추가 사항</Text>
          <Text style={styles.plus}>
            아이의 관심사에 맞춰 사용 환경을 제공합니다.
          </Text>

          {/* Mood */}
          <View style={styles.field}>
            <Text style={styles.label}>
              좋아하는 그림의 분위기 <Text style={styles.required}>*</Text>
            </Text>

            <View style={styles.imageRow}>
              {[0, 1, 2].map((idx) => {
                const selected = selectedMood === idx;
                return (
                  <Pressable
                    key={idx}
                    onPress={() => setSelectedMood(idx)}
                    style={[styles.imageBox, selected && styles.imageBoxActive]}
                  >
                    <Image
                      source={require("@/assets/images/logo1.png")}
                      style={styles.image}
                    />
                  </Pressable>
                );
              })}
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
    marginVertical: 16,
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

  checkRow: {
    flexDirection: "row",
    gap: 8,
  },

  checkBox: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },

  checkBoxActive: {
    backgroundColor: "#FFE571",
  },

  checkText: {
    fontSize: 13,
    color: "#8A8A8A",
  },

  checkTextActive: {
    color: "#232323",
    fontFamily: FONT.cookie.bold,
  },

  imageRow: {
    flexDirection: "row",
    gap: 12,
  },

  imageBox: {
    width: 80,
    height: 80,
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
