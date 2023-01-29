import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const EviCard = () => {

    return (
        <View style={styles.card}>
            <Text>Hallo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 0.8,
        justifyContent: 'center',
        alignContent: "center",
        backgroundColor: '#ccc',
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },

});

export default EviCard;
