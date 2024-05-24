import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons từ thư viện @expo/vector-icons
import { useAuth } from "../provider/AuthProvider";

const SettingsScreen = ({ navigation }) => {

    const { setUserVerified } = useAuth();

  // Thay đổi hình đại diện, tên người dùng và các hành động khác ở đây
  const username = "John Doe"; // Thay đổi tên người dùng theo nhu cầu
  const avatarUrl = "https://placeimg.com/100/100/people"; // URL của hình đại diện

  const handleLogout = () => {
    setUserVerified(null);
  };

  const handleChangePassword = () => {
    // Điều hướng đến màn hình thay đổi mật khẩu
    // Ví dụ: navigation.navigate("ChangePassword");
    navigation.navigate('RechangePassword');
    console.log("Navigate to Change Password Screen");
  };

  return (
    <View style={styles.container}>
      {/* Icon "Quay lại" ở góc trái màn hình */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Hình đại diện */}
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />

      {/* Tên người dùng */}
      <Text style={styles.username}>{username}</Text>

      {/* Chức năng đăng xuất */}
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Đăng Xuất</Text>
      </TouchableOpacity>

      {/* Chức năng thay đổi mật khẩu */}
      <TouchableOpacity onPress={handleChangePassword} style={styles.button}>
        <Text style={styles.buttonText}>Thay Đổi Mật Khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f8f9fa", // Màu nền nhẹ nhàng
    paddingTop: 50, // Padding phía trên để icon "Quay lại" không bị che phủ
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase", // Chữ in hoa
  },
});

export default SettingsScreen;
