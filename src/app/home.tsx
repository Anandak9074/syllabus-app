import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const semesters = [
  { id: "1", title: "Semester 1", color: "#2563EB" },
  { id: "2", title: "Semester 2", color: "#3B82F6" },
  { id: "3", title: "Semester 3", color: "#06B6D4" },
  { id: "4", title: "Semester 4", color: "#0EA5E9" },
  { id: "5", title: "Semester 5", color: "#10B981" },
  { id: "6", title: "Semester 6", color: "#22C55E" },
  { id: "7", title: "Semester 7", color: "#F59E0B" },
  { id: "8", title: "Semester 8", color: "#EF4444" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Header */}

        <View style={styles.header}>
          <Text style={styles.title}>VIDHYODHAYAM</Text>

          <Text style={styles.subtitle}>
            Semester-wise Syllabus & PDFs
          </Text>
        </View>

        {/* Banner */}

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Welcome 👋</Text>

          <Text style={styles.bannerText}>
            Select your semester to access the syllabus PDF quickly and easily.
          </Text>
        </View>

        {/* Semester Section */}

        <Text style={styles.sectionTitle}>
          Select Semester
        </Text>

        <View style={styles.grid}>
          {semesters.map((semester) => (
            <TouchableOpacity
              key={semester.id}
              style={[
                styles.card,
                { backgroundColor: semester.color },
              ]}
              activeOpacity={0.85}
              onPress={() =>
                router.push(`/semester/${semester.id}` as any)
              }
            >
              <Text style={styles.cardIcon}>📘</Text>

              <Text style={styles.cardTitle}>
                {semester.title}
              </Text>

              <Text style={styles.cardSubtitle}>
                View Syllabus
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Entrance Exams */}

        <Text style={styles.sectionTitle}>
          Entrance Exams
        </Text>

        <TouchableOpacity
          style={[
            styles.examButton,
            { backgroundColor: "#8B5CF6" },
          ]}
          activeOpacity={0.85}
          onPress={() =>
            router.push({ pathname: "/gpat" })
          }
        >
          <Text style={styles.examText}>
            📖 GPAT Preparation
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.examButton,
            { backgroundColor: "#F97316" },
          ]}
          activeOpacity={0.85}
          onPress={() =>
            router.push({ pathname: "/niper" })
          }
        >
          <Text style={styles.examText}>
            🎓 NIPER Preparation
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  scrollContainer: {
    paddingBottom: 30,
  },

  header: {
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E3A8A",
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
  },

  banner: {
    backgroundColor: "#2563EB",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    elevation: 5,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  bannerText: {
    color: "#EAF2FF",
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginHorizontal: 20,
    marginBottom: 15,
    marginTop: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  card: {
    width: "47%",
    borderRadius: 18,
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 18,
    elevation: 5,
  },

  cardIcon: {
    fontSize: 36,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  cardSubtitle: {
    color: "#EAF2FF",
    fontSize: 14,
    marginTop: 8,
  },

  examButton: {
    marginHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
  },

  examText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    color: "#777",
    marginTop: 25,
    fontSize: 14,
  },
});