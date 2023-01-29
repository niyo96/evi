import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const EviImageComp = () => {

    return (
        <View>
            <Text>Nimm ein neues Bild auf:</Text>
            <Button style={styles.button} title="Bild Aufnehmen"></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        borderRadius: 5,
    },

});

export default EviImageComp;
