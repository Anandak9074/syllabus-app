import * as FileSystem from "expo-file-system/legacy";
import { router, useLocalSearchParams } from "expo-router";
import * as Sharing from "expo-sharing";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function SemesterScreen() {
  const { id } = useLocalSearchParams();

  const openPdf = () => {
    router.push(`/pdf/${id}`);
  };

  const downloadPdf = async () => {
  const pdfUrls: Record<string, string> = {
    "1": "https://raw.githubusercontent.com/Anandak9074/bpharm-syllabus-pdf/main/sem1.pdf",
    "2": "https://raw.githubusercontent.com/Anandak9074/bpharm-syllabus-pdf/main/sem2.pdf",
    "3": "https://raw.githubusercontent.com/Anandak9074/bpharm-syllabus-pdf/main/sem3.pdf",
    "4": "https://raw.githubusercontent.com/Anandak9074/bpharm-syllabus-pdf/main/sem4.pdf",
    "5": "https://raw.githubusercontent.com/Anandak9074/bpharm-syllabus-pdf/main/sem5.pdf",
    "6": "https://raw.githubusercontent.com/Anandak9074/bpharm-syllabus-pdf/main/sem6.pdf",
    "7": "https://raw.githubusercontent.com/Anandak9074/bpharm-syllabus-pdf/main/sem7.pdf",
    "8": "https://raw.githubusercontent.com/Anandak9074/bpharm-syllabus-pdf/main/sem8.pdf",
  };

  try {
    const url = pdfUrls[String(id)];

    if (!url) {
      Alert.alert("Error", "PDF not found.");
      return;
    }

    const fileUri =
      FileSystem.documentDirectory +
      `Semester_${id}_Syllabus.pdf`;

    const result = await FileSystem.downloadAsync(
      url,
      fileUri
    );

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(result.uri, {
        mimeType: "application/pdf",
        dialogTitle: "Save PDF",
      });
    } else {
      Alert.alert("Success", "PDF downloaded.");
    }
  } catch (e) {
    console.log(e);
    Alert.alert("Error", "Unable to download PDF.");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Semester {id} Syllabus
      </Text>

      <View style={styles.card}>
        <Text style={styles.pdfIcon}>📄</Text>

        <Text style={styles.pdfName}>
          Semester {id} Syllabus.pdf
        </Text>

        <TouchableOpacity
          style={styles.viewButton}
          onPress={openPdf}
        >
          <Text style={styles.buttonText}>
            View PDF
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.downloadButton}
          onPress={downloadPdf}
        >
          <Text style={styles.buttonText}>
            Download PDF
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 30,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    elevation: 5,
  },

  pdfIcon: {
    fontSize: 70,
  },

  pdfName: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 20,
    textAlign: "center",
  },

  viewButton: {
    width: "100%",
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  downloadButton: {
    width: "100%",
    backgroundColor: "#10B981",
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },

});