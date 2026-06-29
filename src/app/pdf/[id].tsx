import * as FileSystem from "expo-file-system/legacy";
import { useLocalSearchParams } from "expo-router";
import * as Sharing from "expo-sharing";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

export default function PdfScreen() {
  const { id } = useLocalSearchParams();

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

  const pdfUrl = pdfUrls[String(id)];

  const downloadPdf = async () => {
    try {
      const fileUri =
        FileSystem.documentDirectory + `Semester_${id}_Syllabus.pdf`;

      const result = await FileSystem.downloadAsync(
        pdfUrl,
        fileUri
      );

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(result.uri);
      } else {
        Alert.alert("Downloaded", "PDF downloaded successfully.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to download PDF.");
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri:
            "https://docs.google.com/gview?embedded=1&url=" +
            encodeURIComponent(pdfUrl),
        }}
        style={styles.webview}
      />

      <TouchableOpacity
        style={styles.downloadButton}
        onPress={downloadPdf}
      >
        <Text style={styles.downloadText}>
          ⬇ Download PDF
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  webview: {
    flex: 1,
  },

  downloadButton: {
    backgroundColor: "#10B981",
    padding: 16,
    alignItems: "center",
  },

  downloadText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});