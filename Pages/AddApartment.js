import React, { useState }  from 'react';
import {View, Text, Button, Modal, TextInput, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Apartment} from "../Models/Model";

const ApartmentPage = (props) => {
    const { item } = props.route.params;
    const [showModal, setShowModal] = useState(false);
    const [newApartment, SetNewApartment] = useState({
        id: null,
        etage: "",
        orientation: ""
    });
    const navigation = useNavigation();

    const newA = new Apartment();
    const addApartment = () => {
        newA.etage = newApartment.etage;
        newA.orientation = newApartment.orientation;
        item.apartments.push(newA);
        SetNewApartment({id: null, etage: "", orientation: ""});
        setShowModal(false);
    }

    return (
        <View style={styles.container}>
            <Button
                title="Füge eine neue Wohnung hinzu"
                onPress={() => setShowModal(true)}
                style={styles.button}>
            </Button>
            <Modal visible={showModal}>
                <View style={styles.modal}>
                    <TextInput placeholder="Etage"
                               onChangeText={(text => newApartment.etage = text)}
                               style={styles.input}
                    >
                    </TextInput>
                    <TextInput placeholder="Orientierung"
                               onChangeText={(text => newApartment.orientation = text)}
                               style={styles.input}
                    >
                    </TextInput>
                    <Button
                        title="Hinzufügen"
                        onPress={() => addApartment()}
                        style={styles.button}>
                    </Button>
                </View>
            </Modal>
            <View style={styles.listContainer}>
                <FlatList data={item.apartments} renderItem={({ item }) =>
                    <View style={styles.listItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('Room', {item})}>
                            <Text>Stockwerk: {item.etage}</Text>
                            <Text>Orientierung: {item.orientation}</Text>
                        </TouchableOpacity>
                    </View>
                }/>
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

export default ApartmentPage;
