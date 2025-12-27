import Dropdown from "@/components/Dropdown";
import InputBox from "@/components/InputBox";
import { FONT } from "@/constants/font";
import { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  // 나중에 answers 연결 시 여기에 정의하기
};

export default function Step1(props: Props) {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("남아");
  const [speechLevel, setSpeechLevel] = useState("발화 없음");

  const scrollRef = useRef<ScrollView>(null);

  const scrollToY = (y: number) => {
    scrollRef.current?.scrollTo({
      y: Math.max(y - 120, 0), // 위 여백 확보
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>아이를 소개해주세요.</Text>

      <View style={{ gap: 30 }}>
        <Text style={styles.sectionTitle}>아이의 정보</Text>

        <View style={{ gap: 10 }}>
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
        <View style={{ gap: 10 }}>
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
        <View style={{ gap: 10 }}>
          <Text style={styles.label}>
            성별 <Text style={styles.required}>*</Text>
          </Text>

          <Dropdown
            placeholder="성별을 선택해주세요"
            options={[
              { label: "남아", value: "male" },
              { label: "여아", value: "female" },
            ]}
            onChange={(v) => console.log(v)}
          />
        </View>

        {/* Speech Level */}
        <View style={{ gap: 10 }}>
          <Text style={styles.label}>
            언어 발화 수준 <Text style={styles.required}>*</Text>
          </Text>
          <Dropdown
            placeholder="발화 수준을 선택해주세요"
            options={[
              { label: "발화 없음", value: "none" },
              { label: "조금의 단어 발화 가능", value: "some voca" },
              { label: "단어 발화 가능", value: "voca" },
              { label: "조금의 문장 발화 가능", value: " some sentence" },
              { label: "문장 발화 가능", value: "sentence" },
            ]}
            onChange={(v) => console.log(v)}
          />
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
    fontSize: 24,
    fontFamily: FONT.cookie.bold,
    color: "#232323",
    marginBottom: 50,
  },

  sectionTitle: {
    fontSize: 20,
    fontFamily: FONT.cookie.bold,
  },

  label: {
    fontSize: 14,
    color: "#232323",
    fontFamily: FONT.cookie.regular,
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
