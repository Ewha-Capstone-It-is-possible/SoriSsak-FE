import { FONT } from "@/constants/font";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Speaking() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Scroll Area */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profile}>
            <Image
              source={require("@/assets/images/profile_img.png")}
              style={styles.avatar}
            />
            <Text style={styles.name}>김서준</Text>
          </View>

          <View style={styles.toggle}>
            <View style={[styles.toggleItem, styles.toggleActive]}>
              <Text style={styles.toggleActiveText}>아이</Text>
            </View>
            <View style={styles.toggleItem}>
              <Text style={styles.toggleText}>부모</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DF",
  },

  content: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },

  /* Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#DDD",
  },

  name: {
    fontSize: 16,
    fontFamily: FONT.cookie.bold,
    color: "#232323",
  },

  toggle: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 2,
  },

  toggleItem: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
  },

  toggleActive: {
    backgroundColor: "#FFE571",
  },

  toggleText: {
    fontSize: 12,
    color: "#8A8A8A",
  },

  toggleActiveText: {
    fontSize: 12,
    color: "#232323",
    fontFamily: FONT.cookie.bold,
  },

  /* Talk Button */
  talkButton: {
    backgroundColor: "#FFE571",
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 16,
  },

  talkText: {
    fontSize: 18,
    fontFamily: FONT.cookie.bold,
    color: "#232323",
  },

  /* Suggest */
  suggestBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 20,
  },

  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  chipText: {
    fontSize: 13,
    color: "#232323",
  },

  /* Section */
  sectionTitle: {
    fontSize: 16,
    fontFamily: FONT.cookie.bold,
    marginBottom: 12,
  },

  favoriteRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
  },

  /* Category */
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 32,
  },

  categoryBox: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    fontSize: 14,
    fontFamily: FONT.cookie.bold,
    color: "#232323",
  },

  /* Bottom */
  bottomButtons: {
    flexDirection: "row",
    gap: 12,
  },

  mainButton: {
    flex: 1,
    backgroundColor: "#FFE571",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },

  mainButtonText: {
    fontSize: 16,
    fontFamily: FONT.cookie.bold,
    color: "#232323",
  },

  subButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },

  subButtonText: {
    fontSize: 16,
    color: "#232323",
  },
  safe: {
    flex: 1,
    backgroundColor: "#FFF8DF",
  },

  bottomFixed: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 30,
    paddingBottom: 12,
    paddingTop: 12,
    backgroundColor: "#FFF8DF",
  },
});
