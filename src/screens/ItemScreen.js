// import React, {useEffect, useState} from 'react';
// import {View, TextInput, Button, Text, SafeAreaView} from 'react-native';
// import {useItem} from '../hooks';

// export default function ItemScreen() {
//   useEffect(() => {
//     handleGet();
//   }, []);

//   const {
//     list,
//     handleGet,
//     handleCreate,
//     handleDelete,
//     handleUpdate,
//   } = useItem();

//   const [name, setName] = useState('');
//   const [id, setId] = useState('');

//   let ListItem = [];
//   ListItem = list.map((item, key) => {
//     return (
//       <SafeAreaView>
//         <View key={key}>
//           <View>
           
//             <Text>{item.name}</Text>
//           </View>
//           <View>
//             <Text>
//               <Button
//                 title="aaa"
//                 onClick={() => handleDelete({id: item._id})}
//               />
//             </Text>
//           </View>
//           <View>
//             <Text>
//               <Button
//                 title="aaa"
//                 onClick={() => {
//                   setId(item._id);
//                   setName(item.name);
//                 }}
//               />
//             </Text>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   });
//   return (
//     <SafeAreaView>
//       <View>
//         <View>
//           <TextInput onChange={e => setName(e.target.value)} value={name} />
//           <Button title="aaa" onClick={() => handleCreate({name: name})} />
//           <Button
//             title="aaa"
//             onClick={() => handleUpdate({id: id, name: name})}
//           />
//         </View>
//         <View>
//           <TextInput onChange={e => setTextSearchNew(e.target.value)} />
//           <Button
//             title="aaa"
//             onClick={() =>
//               handleSearch({textSearch: textSearchNew, activePage: 1})
//             }
//           />
//         </View>
//         <View>
//           <Text>ID</Text>
//           <Text>Name</Text>
//           <View>{ListItem}</View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }
