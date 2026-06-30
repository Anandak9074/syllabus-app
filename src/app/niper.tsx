import { router } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NIPERScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>🎓 NIPER Preparation</Text>

        <Text style={styles.subtitle}>
          National Institute of Pharmaceutical Education and Research
        </Text>

        <View style={styles.card}>
          <Text style={styles.heading}>Coming Soon</Text>

          <Text style={styles.text}>
            This section will include:
          </Text>

          <Text style={styles.item}>• NIPER Syllabus</Text>
          <Text style={styles.item}>• Previous Year Question Papers</Text>
          <Text style={styles.item}>• Mock Tests</Text>
          <Text style={styles.item}>• Study Notes</Text>
          <Text style={styles.item}>• Interview Questions</Text>
          <Text style={styles.item}>• Admission Guidance</Text>
          <Text style={styles.item}>• Important Topics</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>← Back</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F97316",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  text: {
    fontSize: 16,
    marginBottom: 12,
  },

  item: {
    fontSize: 16,
    marginVertical: 6,
  },

  button: {
    backgroundColor: "#F97316",
    padding: 16,
    borderRadius: 12,
    marginTop: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});