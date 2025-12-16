import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import { FONT } from "@/constants/font";

type Props = {
  // 나중에 answers 연결할 거라면 여기에 추가
};

export default function Step1(props: Props) {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("남아");
  const [speechLevel, setSpeechLevel] = useState("발화 없음");

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>아이를 소개해주세요.</Text>

      {/* Section */}
      <Text style={styles.sectionTitle}>아이의 정보</Text>

      {/* Name */}
      <View style={styles.field}>
        <Text style={styles.label}>
          아이 이름 <Text style={styles.required}>*</Text>
        </Text>
        <InputBox
          placeholder="아이 이름을 입력해주세요."
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Birth */}
      <View style={styles.field}>
        <Text style={styles.label}>
          생년월일 <Text style={styles.required}>*</Text>
        </Text>
        <InputBox
          placeholder="생년월일을 입력해주세요."
          value={birth}
          onChangeText={setBirth}
        />
      </View>

      {/* Gender */}
      <View style={styles.field}>
        <Text style={styles.label}>
          성별 <Text style={styles.required}>*</Text>
        </Text>

        <View style={styles.selectRow}>
          {["남아", "여아"].map((item) => {
            const selected = gender === item;
            return (
              <Pressable
                key={item}
                onPress={() => setGender(item)}
                style={[styles.selectBox, selected && styles.selectBoxActive]}
              >
                <Text
                  style={[
                    styles.selectText,
                    selected && styles.selectTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Speech Level */}
      <View style={styles.field}>
        <Text style={styles.label}>
          언어 발화 수준 <Text style={styles.required}>*</Text>
        </Text>

        <View style={styles.selectRow}>
          {["발화 없음", "단어", "문장"].map((item) => {
            const selected = speechLevel === item;
            return (
              <Pressable
                key={item}
                onPress={() => setSpeechLevel(item)}
                style={[styles.selectBox, selected && styles.selectBoxActive]}
              >
                <Text
                  style={[
                    styles.selectText,
                    selected && styles.selectTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
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
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: FONT.cookie.bold,
    marginBottom: 16,
  },

  field: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#232323",
  },

  required: {
    color: "#FF6B00",
  },

  selectRow: {
    flexDirection: "row",
    gap: 8,
  },

  selectBox: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  selectBoxActive: {
    backgroundColor: "#FFE571",
  },

  selectText: {
    fontSize: 14,
    color: "#8A8A8A",
  },

  selectTextActive: {
    color: "#232323",
    fontFamily: FONT.cookie.bold,
  },
});
