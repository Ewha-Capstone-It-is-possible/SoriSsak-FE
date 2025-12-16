import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { FONT } from "@/constants/font";

type Option = {
  label: string;
  value: string;
};

const HOME_STAY: Option[] = [
  { label: "집에 있는 시간이 많아요", value: "HIGH" },
  { label: "보통이에요", value: "MEDIUM" },
  { label: "외출이 잦아요", value: "LOW" },
];

const NOISE: Option[] = [
  { label: "매우 예민해요", value: "HIGH" },
  { label: "보통이에요", value: "MEDIUM" },
  { label: "둔감한 편이에요", value: "LOW" },
];

const SLEEP: Option[] = [
  { label: "잠에 많이 민감해요", value: "HIGH" },
  { label: "보통이에요", value: "MEDIUM" },
  { label: "잘 자는 편이에요", value: "LOW" },
];

const VISITOR: Option[] = [
  { label: "낯선 사람을 어려워해요", value: "HIGH" },
  { label: "보통이에요", value: "MEDIUM" },
  { label: "잘 어울려요", value: "LOW" },
];

export default function Step3() {
  const [homeStay, setHomeStay] = useState<string>("HIGH");
  const [noise, setNoise] = useState<string>("MEDIUM");
  const [sleep, setSleep] = useState<string>("MEDIUM");
  const [visitor, setVisitor] = useState<string>("MEDIUM");

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
      <Text style={styles.title}>아이의 생활 습관을{"\n"}알려주세요.</Text>

      {/* Home stay */}
      <View style={styles.field}>
        <Text style={styles.label}>
          집에 있는 시간은 어느 정도인가요?
          <Text style={styles.required}> *</Text>
        </Text>
        {renderOptions(HOME_STAY, homeStay, setHomeStay)}
      </View>

      {/* Noise */}
      <View style={styles.field}>
        <Text style={styles.label}>
          소음에 얼마나 민감한가요?
          <Text style={styles.required}> *</Text>
        </Text>
        {renderOptions(NOISE, noise, setNoise)}
      </View>

      {/* Sleep */}
      <View style={styles.field}>
        <Text style={styles.label}>
          수면에 얼마나 민감한가요?
          <Text style={styles.required}> *</Text>
        </Text>
        {renderOptions(SLEEP, sleep, setSleep)}
      </View>

      {/* Visitor */}
      <View style={styles.field}>
        <Text style={styles.label}>
          방문객(손님)에 대한 반응은 어떤가요?
          <Text style={styles.required}> *</Text>
        </Text>
        {renderOptions(VISITOR, visitor, setVisitor)}
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
