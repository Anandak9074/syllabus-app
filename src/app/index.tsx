import { useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { router } from "expo-router";

export default function SplashScreen() {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        B.Pharm Syllabus
      </Text>

      <ActivityIndicator
        size="large"
        color="#2563EB"
        style={{ marginTop: 30 }}
      />

      <Text style={styles.loading}>
        Loading...
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FFFFFF"
  },

  logo:{
    width:170,
    height:170
  },

  title:{
    marginTop:20,
    fontSize:30,
    fontWeight:"bold",
    color:"#2563EB"
  },

  loading:{
    marginTop:15,
    fontSize:16,
    color:"#666"
  }

});