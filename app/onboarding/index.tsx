// app/onboarding/index.tsx
import { useEffect, useState, JSX } from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import { useRouter } from "expo-router";

import ProgressBar from "./ProgressBar";

// steps
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

// components
import MainButton from "@/components/MainButton";
import Header from "@/components/Header"; // ← 뒤로가기 + 온보딩

const TOTAL_STEPS = 5;

export default function Onboarding() {
  const router = useRouter();
  const [stepNum, setStepNum] = useState(1);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (stepNum > 1) {
          setStepNum((prev) => prev - 1);
          return true;
        }
        router.back();
        return true;
      }
    );

    return () => backHandler.remove();
  }, [stepNum]);

  /** step 컴포넌트 매핑 */
  const stepComponents: Record<number, JSX.Element> = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
    5: <Step5 />,
  };

  /** 다음 버튼 */
  const handleNext = () => {
    if (stepNum < TOTAL_STEPS) {
      setStepNum((prev) => prev + 1);
    } else {
      router.replace("/(tabs)");
    }
  };
  /** 이전 버튼 */
  const handlePrev = () => {
    if (stepNum > 1) {
      setStepNum((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header
        title="온보딩"
        onBack={stepNum === 1 ? router.back : handlePrev}
      />
      <View style={styles.container}>
        <ProgressBar current={stepNum} total={TOTAL_STEPS} />

        <View style={styles.content}>{stepComponents[stepNum]}</View>

        <View style={styles.footer}>
          {stepNum > 1 && (
            <MainButton
              size="medium"
              style={styles.prevButton}
              onPress={handlePrev}
            >
              ← 이전
            </MainButton>
          )}

          <MainButton size="medium" onPress={handleNext}>
            다음 →
          </MainButton>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DF",
    paddingHorizontal: 30,
  },

  content: {
    flex: 1,
    marginTop: 16,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 24,
  },

  prevButton: {
    backgroundColor: "#FFFFFF",
  },
});
