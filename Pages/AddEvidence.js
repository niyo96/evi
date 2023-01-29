import React, {useState} from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import Checkbox from 'expo-checkbox';
import {Evidence} from "../Models/Model";

const EvidencePage = (props) => {
    const { item } = props.route.params;
    const evidence = new Evidence();
    const [diagonal, setDiagonal] = useState(evidence.diagonal);
    const [horizontal, setHorizontal] = useState(evidence.horizontal);
    const [vertical, setVertical] = useState(evidence.vertical);
    const [crosswise, setCrosswise] = useState(evidence.crosswise);
    const [wallCeilingConnection, setWallCeilingConnection] = useState(evidence.wallCeilingConnection);
    const [wallWindowConnection, setWallWindowConnection] = useState(evidence.wallWindowConnection);
    const [wallDoorConnection, setWallDoorConnection] = useState(evidence.wallDoorConnection);
    const [wallWindowsillConnection, setWallWindowsillConnection] = useState(evidence.wallWindowsillConnection);
    const [wallSkirtingBoardConnection, setWallSkirtingBoardConnection] = useState(evidence.wallSkirtingBoardConnection);
    const [wallBracketConnection, setWallBracketConnection] = useState(evidence.wallBracketConnection);
    const [continuous, setContinuous] = useState(evidence.continuous);
    const [circulating, setCirculating] = useState(evidence.circulating);
    const [interrupted, setInterrupted] = useState(evidence.interrupted);
    const [overview, setOverview] = useState(evidence.overview);
    const [detail, setDetail] = useState(evidence.detail);
    const [repaint, setRepaint] = useState(evidence.repaint);

    return (
        <View>
            <Text>Diagonal:</Text>
            <Checkbox value={diagonal} onValueChange={setDiagonal} />

            <Text>Horizontal:</Text>
            <Checkbox value={horizontal} onValueChange={setHorizontal} />

            <Text>Vertical:</Text>
            <Checkbox value={vertical} onValueChange={setVertical} />

            <Text>Crosswise:</Text>
            <Checkbox value={crosswise} onValueChange={setCrosswise} />

            <Text>Wall-Ceiling Connection:</Text>
            <Checkbox value={wallCeilingConnection} onValueChange={setWallCeilingConnection} />

            <Text>Wall-Window Connection:</Text>
            <Checkbox value={wallWindowConnection} onValueChange={setWallWindowConnection} />

            <Text>Wall-Door Connection:</Text>
            <Checkbox value={wallDoorConnection} onValueChange={setWallDoorConnection} />

            <Text>Wall-Windowsill Connection:</Text>
            <Checkbox value={wallWindowsillConnection} onValueChange={setWallWindowsillConnection} />

            <Text>Wall-Skirting Board Connection:</Text>
            <Checkbox value={wallSkirtingBoardConnection} onValueChange={setWallSkirtingBoardConnection} />

            <Text>Wall-Bracket Connection:</Text>
            <Checkbox value={wallBracketConnection} onValueChange={setWallBracketConnection} />

            <Text>Continuous:</Text>
            <Checkbox value={continuous} onValueChange={setContinuous} />

            <Text>circulating:</Text>
            <Checkbox value={circulating} onValueChange={setCirculating} />

            <Text>interrupted:</Text>
            <Checkbox value={interrupted} onValueChange={ setInterrupted} />

            <Text>overview:</Text>
            <Checkbox value={overview} onValueChange={setOverview} />

            <Text>detail:</Text>
            <Checkbox value={detail} onValueChange={setDetail} />

            <Text>repaint:</Text>
            <Checkbox value={repaint} onValueChange={setRepaint}/>
        </View>
            );
};

const styles = StyleSheet.create({

});

export default EvidencePage;
