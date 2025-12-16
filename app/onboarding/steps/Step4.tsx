import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { FONT } from "@/constants/font";

type Option = {
  label: string;
  value: string;
};

const TIDY_LEVEL: Option[] = [
  { label: "매우 깔끔해요", value: "HIGH" },
  { label: "보통이에요", value: "MEDIUM" },
  { label: "정리에 큰 관심은 없어요", value: "LOW" },
];

const CLEAN_FREQ: Option[] = [
  { label: "거의 매일 해요", value: "HIGH" },
  { label: "주 1~2회 해요", value: "MEDIUM" },
  { label: "필요할 때만 해요", value: "LOW" },
];

const RESTROOM: Option[] = [
  { label: "아직 도움을 받아요", value: "ASSIST" },
  { label: "부분적으로 혼자 해요", value: "PARTIAL" },
  { label: "혼자서 잘 해요", value: "INDEPENDENT" },
];

const FOOD_ODOR: Option[] = [
  { label: "냄새에 매우 민감해요", value: "HIGH" },
  { label: "보통이에요", value: "MEDIUM" },
  { label: "거의 신경 쓰지 않아요", value: "LOW" },
];

export default function Step4() {
  const [tidy, setTidy] = useState<string>("MEDIUM");
  const [cleanFreq, setCleanFreq] = useState<string>("MEDIUM");
  const [restroom, setRestroom] = useState<string>("PARTIAL");
  const [foodOdor, setFoodOdor] = useState<string>("MEDIUM");

  const renderOptions = (
    options: Option[],
    selected: string,
    onSelect: (v: string) => void
  ) => {
    return (
      <View style={styles.optionRow}>
        {options.map((opt) => {
          const active = selected === opt.value;
          return (
            <Pressable
              key={opt.value}
              onPress={() => onSelect(opt.value)}
              style={[styles.optionBox, active && styles.optionBoxActive]}
            >
              <Text
                style={[styles.optionText, active && styles.optionTextActive]}
              >
                {opt.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>생활 습관에 대해{"\n"}알려주세요.</Text>

      {/* Tidy */}
      <View style={styles.field}>
        <Text style={styles.label}>
          정리 정돈 수준은 어떤가요?
          <Text style={styles.required}> *</Text>
        </Text>
        {renderOptions(TIDY_LEVEL, tidy, setTidy)}
      </View>

      {/* Clean */}
      <View style={styles.field}>
        <Text style={styles.label}>
          청소는 얼마나 자주 하나요?
          <Text style={styles.required}> *</Text>
        </Text>
        {renderOptions(CLEAN_FREQ, cleanFreq, setCleanFreq)}
      </View>

      {/* Restroom */}
      <View style={styles.field}>
        <Text style={styles.label}>
          화장실 사용은 어떤가요?
          <Text style={styles.required}> *</Text>
        </Text>
        {renderOptions(RESTROOM, restroom, setRestroom)}
      </View>

      {/* Food odor */}
      <View style={styles.field}>
        <Text style={styles.label}>
          음식 냄새에 대한 반응은 어떤가요?
          <Text style={styles.required}> *</Text>
        </Text>
        {renderOptions(FOOD_ODOR, foodOdor, setFoodOdor)}
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
    marginBottom: 28,
  },

  field: {
    marginBottom: 24,
  },

  label: {
    fontSize: 14,
    color: "#232323",
    marginBottom: 10,
  },

  required: {
    color: "#FF6B00",
  },

  optionRow: {
    gap: 8,
  },

  optionBox: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
  },

  optionBoxActive: {
    backgroundColor: "#FFE571",
  },

  optionText: {
    fontSize: 14,
    color: "#8A8A8A",
  },

  optionTextActive: {
    color: "#232323",
    fontFamily: FONT.cookie.bold,
  },
});
