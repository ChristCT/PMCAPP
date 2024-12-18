// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
//   Modal,
//   TextInput,
//   Button,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const NotificationsAdminPage = () => {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       title: "Introduce Yourself",
//       description:
//         "Introduce yourself to the community by telling us a little bit about yourself and your interest or experience of Sign Language.",
//       time: "30m",
//     },
//     {
//       id: 2,
//       title: "Why are you learning sign lan..",
//       description:
//         "Why did you decide to learn Sign Language? Share your story with the community.",
//       time: "12h",
//     },
//   ]);

//   const [modalVisible, setModalVisible] = useState(false);
//   const [newNotification, setNewNotification] = useState({
//     title: "",
//     description: "",
//     time: "Just now",
//   });

//   const handleAddNotification = () => {
//     if (newNotification.title && newNotification.description) {
//       setNotifications((prevNotifications) => [
//         ...prevNotifications,
//         { ...newNotification, id: prevNotifications.length + 1 },
//       ]);
//       setNewNotification({ title: "", description: "", time: "Just now" });
//       setModalVisible(false);
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   const handleDeleteNotification = (notificationId) => {
//     setNotifications((prevNotifications) =>
//       prevNotifications.filter((notif) => notif.id !== notificationId)
//     );
//   };

//   return (
//     <ImageBackground
//       source={require("../../assets/initial/notif.png")}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Manage Notifications</Text>
//           <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
//             <Ionicons name="add" size={24} color="white" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.card}>
//           <ScrollView
//             contentContainerStyle={styles.scrollContainer}
//             showsVerticalScrollIndicator={false}
//           >
//             {notifications.map((notification) => (
//               <View key={notification.id} style={styles.notification}>
//                 <View style={styles.iconAndText}>
//                   <View style={styles.iconCircle}>
//                     <Image
//                       source={require("../../assets/initial/bell.png")}
//                       style={styles.icon}
//                     />
//                   </View>
//                   <View style={styles.textContainer}>
//                     <Text style={styles.title}>{notification.title}</Text>
//                     <Text style={styles.description}>{notification.description}</Text>
//                   </View>
//                 </View>
//                 <View style={styles.actions}>
//                   <TouchableOpacity
//                     onPress={() => handleDeleteNotification(notification.id)}
//                   >
//                     <Ionicons name="trash" size={24} color="#FF6A00" />
//                   </TouchableOpacity>
//                   <Text style={styles.time}>{notification.time}</Text>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>

//         <Modal visible={modalVisible} animationType="slide" transparent={true}>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Create New Notification</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Notification Title"
//                 value={newNotification.title}
//                 onChangeText={(text) =>
//                   setNewNotification({ ...newNotification, title: text })
//                 }
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Notification Description"
//                 value={newNotification.description}
//                 onChangeText={(text) =>
//                   setNewNotification({ ...newNotification, description: text })
//                 }
//               />
//               <View style={styles.modalButtons}>
//                 <Button title="Cancel" color="#999" onPress={() => setModalVisible(false)} />
//                 <Button title="Add Notification" color="#FF6A00" onPress={handleAddNotification} />
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     paddingTop: 40,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 15,
//     backgroundColor: "#FF6A00",
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "white",
//   },
//   addButton: {
//     backgroundColor: "#00aaff",
//     borderRadius: 20,
//     padding: 10,
//   },
//   card: {
//     flex: 1,
//     backgroundColor: "white",
//     borderRadius: 15,
//     padding: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 4,
//     marginTop: 10,
//   },
//   scrollContainer: {
//     paddingVertical: 10,
//   },
//   notification: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//     paddingBottom: 10,
//   },
//   iconAndText: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     flex: 1,
//   },
//   iconCircle: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#f0f0f0",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//   },
//   icon: {
//     width: 25,
//     height: 25,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//     marginTop: 5,
//   },
//   actions: {
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   time: {
//     fontSize: 12,
//     color: "#999",
//     marginTop: 5,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     width: "80%",
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   modalButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
// });

// export default NotificationsAdminPage;
