import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2563EB",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          animation: "slide_from_right",
          contentStyle: {
            backgroundColor: "#F5F7FA",
          },
        }}
      >
        {/* Home Screen */}
        <Stack.Screen
          name="index"
          options={{
            title: "B.Pharm Syllabus",
            headerShown: true,
          }}
        />

        {/* Semester Screen */}
        <Stack.Screen
          name="semester/[id]"
          options={{
            title: "Semester",
            headerBackTitle: "Back",
          }}
        />

        {/* PDF Screen */}
        <Stack.Screen
          name="pdf/[id]"
          options={{
            title: "Syllabus PDF",
            headerBackTitle: "Back",
          }}
        />
      </Stack>
    </>
  );
}