import React, { useState }  from 'react';
import {View, Text, Button, Modal, TextInput, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Project} from "../Models/Model";

const ProjectPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [newProject, setNewProject] = useState({
        id: null,
        name: "",
        street: "",
        postcode: "",
        city: ""
    });
    const [projectList, setNewProjectList] = useState([]);
    const navigation = useNavigation();

    const newP = new Project();

    const addProject = () => {
        newP.address = newProject.address;
        newP.name = newProject.name;
        setNewProjectList([...projectList, newP]);
        setNewProject({id: null, name: "", street: "", postcode: "", city: ""});
        setShowModal(false);
    }

    return (
        <View style={styles.container}>
            <Button
                title="Füge ein neues Projekt hinzu"
                onPress={() => setShowModal(true)}
                style={styles.button}>
            </Button>
            <Modal visible={showModal}>
                <View style={styles.modal}>
                    <TextInput placeholder="Name"
                               onChangeText={(text => newProject.name = text)}
                               style={styles.input}
                    >
                    </TextInput>
                    <TextInput placeholder="Address"
                               onChangeText={(text => newProject.address = text)}
                               style={styles.input}
                    >
                    </TextInput>
                    <Button
                        title="Hinzufügen"
                        onPress={() => addProject()}
                        style={styles.button}>

                    </Button>
                </View>
            </Modal>
            <View style={styles.listContainer}>
                <FlatList data={projectList} renderItem={({ item }) => <View style={styles.listItem}><TouchableOpacity onPress={() => navigation.navigate('Building', {item})}><Text>{item.name} in</Text><Text>{item.address}</Text></TouchableOpacity></View>}/>
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

export default ProjectPage;
