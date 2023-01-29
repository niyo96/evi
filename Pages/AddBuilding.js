import React, {useState} from 'react';
import {View, Text, Button, Modal, TextInput, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Building} from "../Models/Model";
import { useNavigation } from '@react-navigation/native';

const BuildingPage = (props) => {
    const { item } = props.route.params;
    const [showModal, setShowModal] = useState(false);
    const [newBuilding, setNewBuilding] = useState({
        id: null,
        address: "",
        note: ""
    });
    const newB = new Building();
    const navigation = useNavigation();


    const addBuilding = () => {
        newB.address = newBuilding.address;
        newB.note = newBuilding.note;
        item.buildings.push(newB);
        setShowModal(false);
    };


    return (
        <View>
            <Text>Du bearbeitest das Bauvorhaben {item.name} in {item.address}</Text>
            <Button
                title="Füge ein neues Gebäude hinzu"
                onPress={() => setShowModal(true)}
                style={styles.button}>
            </Button>
            <Modal visible={showModal}>
                <View style={styles.modal}>
                    <TextInput placeholder="Notiz"
                               onChangeText={(text => newBuilding.note = text)}
                               style={styles.input}
                    >
                    </TextInput>
                    <TextInput placeholder="Gebäude Addresse"
                               onChangeText={(text => newBuilding.address = text)}
                               style={styles.input}
                    >
                    </TextInput>
                    <Button
                        title="Hinzufügen"
                        onPress={() => addBuilding()}
                        style={styles.button}>
                    </Button>
                </View>
            </Modal>
            <View style={styles.listContainer}>
                <FlatList data={item.buildings} renderItem={({ item }) => <View style={styles.listItem}><TouchableOpacity onPress={() => navigation.navigate('Apartment', {item})}><Text>Gebäude: {item.address}</Text></TouchableOpacity></View>}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        borderRadius: 5,
    },
    modal: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    input: {
        width: '80%',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    listContainer: {
        marginTop: 20,
        width: '100%',
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 5,
    },
});

export default BuildingPage;
