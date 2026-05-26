// import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
// import React, {useState} from 'react';
// import {CONTENT_HEIGHT, WIN_HEIGHT, WIN_WIDTH} from '../../utils/constant';
// import {Colors} from '../../assets/colors';
// import AppDropDown from '../../components/AppDropDown';
// import {AppAppBar} from '../../components/AppAppBar';

// type Props = {};

// const SelectMachine = (props: Props) => {
//   const searchItems = [
//     'Thrissur - Railway station platform 1',
//     'New York - Central Park entrance',
//     'Tokyo - Shibuya Crossing',
//     'Paris - Eiffel Tower base',
//     'Sydney - Opera House foyer',
//     'Cape Town - Table Mountain viewpoint',
//     'Rio de Janeiro - Copacabana Beach',
//     'Dubai - Burj Khalifa observation deck',
//     'London - Buckingham Palace gates',
//     'Los Angeles - Hollywood Walk of Fame',
//   ];

//   const [inputValue, setInputValue] = useState('');
//   const [data, setData] = useState<string[]>([]);

//   const handleInputValue = (value: string) => {
//     if (value == '') {
//       setInputValue(value);

//       setData([]);
//     } else {
//       setInputValue(value);
//       const lowercasedValue = value.toLowerCase();

//       const searchResults = searchItems.filter(item =>
//         item.toLowerCase().includes(lowercasedValue),
//       );
//       setData(searchResults.length > 0 ? searchResults : ['No match found']);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor={Colors.lightGrey} />
//       <AppAppBar color={Colors.lightGrey} text="Select Machine" />
//       <AppDropDown
//         inputValue={inputValue}
//         handleInputValue={handleInputValue}
//       />

//       <ScrollView>
//         <View style={styles.content}>
//           {data?.map((item, i) => {
//             return (
//               <View style={styles.searchItem}>
//                 <Text style={styles.searchItemText}>{item}</Text>
//               </View>
//             )
//           })}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default SelectMachine;

// const styles = StyleSheet.create({
//   container: {
//     height: CONTENT_HEIGHT,
//     // width: WIN_WIDTH,
//     backgroundColor: Colors.lightGrey,
//     alignItems: 'center',
//   },
//   content: {
//     height: CONTENT_HEIGHT * 0.6,
//     // height: CONTENT_HEIGHT - 80,
//     backgroundColor: Colors.white,
//     width: WIN_WIDTH - 60,
//     margin: 20,
//     borderRadius: 15,
//   },
//   searchItem:{height:50, marginHorizontal:20, justifyContent:"center", borderBottomWidth:1, borderBottomColor:Colors.lightGrey},
//   searchItemText:{fontSize:15, fontFamily:'Inter-SemiBold', color:Colors.text20},
// });
