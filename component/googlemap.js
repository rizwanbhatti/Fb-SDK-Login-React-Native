

import React from 'react';
import { StyleSheet, Alert, View ,Text} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: 400,
    width: 400,
  },
});

export default class Map extends React.Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
      <Text>
          Hello
      </Text>
        <MapView
          style={styles.map}
          region={{
            latitude: 24.882451,
            longitude: 67.069389,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
  }
}