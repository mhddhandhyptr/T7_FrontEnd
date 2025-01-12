// src/screens/Beranda/BerandaScreen.js
import React, { useState } from 'react'; // Tambahkan useState
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native'; // Tambahkan TextInput

const laptops = [
  { id: '1', name: 'ASUS TUF Gaming FX505DT-AL087T 3550H', price: 'Rp 8.900.000', image: require('../../../assets/laptop1.jpeg') },
  { id: '2', name: 'HP PAVILION GAMING 15 ec0001AX' , price: 'Rp 9.900.000', image: require('../../../assets/laptop2.jpeg') },
  { id: '3', name: 'HP Pavilion 15-CX0056WM', price: 'Rp 10.200.000', image: require('../../../assets/laptop3.jpeg') },
  { id: '4', name: 'ACER Predator Nitro 5 AN515-54-507M', price: 'Rp 9.699.000', image: require('../../../assets/laptop4.jpeg') },
  { id: '5', name: 'Lenovo IdeaPad L340 15', price: 'Rp 8.799.000', image: require('../../../assets/laptop5.jpg') },
  { id: '6', name: 'MSI GF63 Thin', price: 'Rp 11.000.000', image: require('../../../assets/laptop6.jpeg') },
];

export default function BerandaScreen() {
  const [searchQuery, setSearchQuery] = useState(''); // Inisialisasi state
  const [filteredLaptops, setFilteredLaptops] = useState(laptops);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter((laptop) =>
        laptop.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredLaptops(filtered);
    }
  };

  const renderLaptopItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Seller Laptops</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search laptops..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredLaptops}
        renderItem={renderLaptopItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No laptops found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 5,
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});
