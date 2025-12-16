import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { FONT } from "@/constants/font";

type Option = {
  label: string;
  value: string;
};

const REGIONS: Option[] = [
  { label: "서울", value: "SEOUL" },
  { label: "경기", value: "GYEONGGI" },
  { label: "인천", value: "INCHEON" },
  { label: "부산", value: "BUSAN" },
  { label: "대구", value: "DAEGU" },
  { label: "광주", value: "GWANGJU" },
  { label: "대전", value: "DAEJEON" },
  { label: "울산", value: "ULSAN" },
];

export default function Step5() {
  const [region, setRegion] = useState<string>("SEOUL");

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>활동 지역을{"\n"}선택해주세요.</Text>

      {/* Description */}
      <Text style={styles.description}>
        선택한 지역을 기준으로 아이에게{"\n"}더 적합한 콘텐츠를 제공해드려요.
      </Text>

      {/* Region options */}
      <View style={styles.optionGrid}>
        {REGIONS.map((opt) => {
          const active = region === opt.value;
          return (
            <Pressable
              key={opt.value}
              onPress={() => setRegion(opt.value)}
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

      {/* Finish message */}
      <View style={styles.finishBox}>
        <Text style={styles.finishText}>
          거의 다 왔어요! 🎉{"\n"}
          다음 단계에서 온보딩을 완료할 수 있어요.
        </Text>
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

  description: {
    fontSize: 14,
    color: "#6B6B6B",
    marginBottom: 28,
    lineHeight: 20,
  },

  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 32,
  },

  optionBox: {
    width: "48%",
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
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

  finishBox: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFF3C4",
  },

  finishText: {
    fontSize: 14,
    color: "#232323",
    lineHeight: 20,
    fontFamily: FONT.cookie.bold,
  },
});
