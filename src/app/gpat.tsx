import { router } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GPATScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>📖 GPAT Preparation</Text>

        <Text style={styles.subtitle}>
          Graduate Pharmacy Aptitude Test
        </Text>

        <View style={styles.card}>
          <Text style={styles.heading}>Coming Soon</Text>

          <Text style={styles.text}>
            This section will include:
          </Text>

          <Text style={styles.item}>• GPAT Syllabus</Text>
          <Text style={styles.item}>• Previous Year Question Papers</Text>
          <Text style={styles.item}>• Mock Tests</Text>
          <Text style={styles.item}>• Study Notes</Text>
          <Text style={styles.item}>• Practice Questions</Text>
          <Text style={styles.item}>• Video Lectures</Text>
          <Text style={styles.item}>• Daily Quiz</Text>
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
    color: "#8B5CF6",
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
    backgroundColor: "#8B5CF6",
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