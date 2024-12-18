// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   Modal,
//   TextInput,
//   Button,
//   ImageBackground,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const CoursesAdminPage = () => {
//   const [courses, setCourses] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [newCourse, setNewCourse] = useState({
//     title: "",
//     image: "",
//   });

//   useEffect(() => {
//     // Simulated fetch for existing courses
//     const fetchCourses = async () => {
//       const simulatedResponse = [
//         { id: 1, title: "I. Gestures & Body Language", image: "https://via.placeholder.com/50" },
//         { id: 2, title: "II. ABC's, Colors & Intro to Pronouns", image: "https://via.placeholder.com/50" },
//       ];
//       setCourses(simulatedResponse);
//     };

//     fetchCourses();
//   }, []);

//   const handleAddCourse = () => {
//     if (newCourse.title && newCourse.image) {
//       setCourses((prevCourses) => [
//         ...prevCourses,
//         { ...newCourse, id: prevCourses.length + 1 },
//       ]);
//       setNewCourse({ title: "", image: "" });
//       setModalVisible(false);
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   const handleDeleteCourse = (courseId) => {
//     setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
//   };

//   return (
//     <ImageBackground
//       source={require('../newreg.png')}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Manage Courses</Text>
//         <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
//           <Ionicons name="add" size={24} color="white" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {courses.map((course) => (
//           <View key={course.id} style={styles.courseCard}>
//             <View style={styles.cardContent}>
//               <Image source={{ uri: course.image }} style={styles.imagePlaceholder} />
//               <Text style={styles.courseTitle}>{course.title}</Text>
//             </View>
//             <TouchableOpacity onPress={() => handleDeleteCourse(course.id)}>
//               <Ionicons name="trash" size={24} color="#FF6A00" />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       <Modal visible={modalVisible} animationType="slide" transparent={true}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Create New Course</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Course Title"
//               value={newCourse.title}
//               onChangeText={(text) => setNewCourse({ ...newCourse, title: text })}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Image URL"
//               value={newCourse.image}
//               onChangeText={(text) => setNewCourse({ ...newCourse, image: text })}
//             />
//             <View style={styles.modalButtons}>
//               <Button title="Cancel" color="#999" onPress={() => setModalVisible(false)} />
//               <Button title="Add Course" color="#FF6A00" onPress={handleAddCourse} />
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
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
//   scrollContainer: {
//     padding: 15,
//   },
//   courseCard: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#FFF",
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   cardContent: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   imagePlaceholder: {
//     width: 50,
//     height: 50,
//     borderRadius: 5,
//     marginRight: 15,
//   },
//   courseTitle: {
//     fontSize: 14,
//     fontWeight: "500",
//     color: "#333",
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

// export default CoursesAdminPage;
