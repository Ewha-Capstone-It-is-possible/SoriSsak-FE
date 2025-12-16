import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      {/* 말하기 탭 */}
      <Tabs.Screen
        name="(speaking)"
        options={{
          title: "말하기",
        }}
      />

      {/* 배지 탭 */}
      <Tabs.Screen
        name="(badge)"
        options={{
          title: "배지",
        }}
      />
    </Tabs>
  );
}
