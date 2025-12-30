import GLOBAL from "@/styles/global.style";
import { useRouter } from "expo-router";
import { JSX, useEffect, useState } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import ProgressBar from "./ProgressBar";

// steps
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

// components
import Header from "@/components/Header";
import MainButton from "@/components/MainButton";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <SafeAreaView style={GLOBAL.safeArea}>
        <Header
          title="온보딩"
          onBack={stepNum === 1 ? router.back : handlePrev}
        />
        <View style={{ paddingHorizontal: 30 }}>
          <ProgressBar current={stepNum} total={TOTAL_STEPS} />
        </View>
        <View style={GLOBAL.container}>
          <View style={styles.content}>{stepComponents[stepNum]}</View>
        </View>
      </SafeAreaView>
      <View style={styles.bottom}>
        {stepNum > 1 && (
          <MainButton
            size="medium"
            style={styles.prevButton}
            onPress={handlePrev}
          >
            이전
          </MainButton>
        )}

        <MainButton
          size="medium"
          style={styles.nextButton}
          onPress={handleNext}
        >
          다음
        </MainButton>
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
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 24,
  },

  prevButton: {
    backgroundColor: "#F4F4F4",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    flex: 1,
  },
  nextButton: { flex: 1, borderWidth: 1, borderColor: "transparent" },

  bottom: {
    padding: 30,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    gap: 10,
  },
});
