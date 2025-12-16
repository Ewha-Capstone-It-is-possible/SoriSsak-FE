// app/onboarding/ProgressBar.tsx
import { View, StyleSheet } from "react-native";

type Props = {
  current: number; // 현재 step (1부터)
  total: number; // 전체 step 수
};

export default function ProgressBar({ current, total }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {Array.from({ length: total }).map((_, idx) => {
          const step = idx + 1;
          const isActive = step <= current;

          return (
            <View
              key={step}
              style={[styles.bar, isActive ? styles.active : styles.inactive]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 24, // 상태바 위 여백 (상단 SafeArea 아래)
    marginBottom: 28, // 콘텐츠와 간격
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bar: {
    flex: 1,
    height: 3, // 얇은 선
    borderRadius: 2,
    marginHorizontal: 4, // 스텝 간 간격
  },

  active: {
    backgroundColor: "#FFE571", // 메인 노랑 (버튼이랑 통일)
  },

  inactive: {
    backgroundColor: "#E5E5E5", // 연한 회색
  },
});
