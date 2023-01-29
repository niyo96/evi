import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddProject from "./Pages/AddProject";
import AddBuilding from "./Pages/AddBuilding";
import AddApartment from "./Pages/AddApartment";
import AddRoom from "./Pages/AddRoom";
import AddEvidence from "./Pages/AddEvidence";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Project">
            <Stack.Screen name="Project"
                          options={{title: "Herzlich willkommen bei Evi <3"}}
                          component={AddProject}
                          />
            <Stack.Screen name="Building"
                          options={{title: "Gebäude"}}
                          component={AddBuilding}
                          />
            <Stack.Screen name="Apartment"
                          options={{title: "Wohnungen"}}
                          component={AddApartment}
            />
            <Stack.Screen name="Room"
                          options={{title: "Räume"}}
                          component={AddRoom}
            />
            <Stack.Screen name="Evidence"
                          options={{title: "Beweise"}}
                          component={AddEvidence}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
