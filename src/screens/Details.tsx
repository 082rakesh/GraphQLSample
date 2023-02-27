import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function DetailsScreen() {
  return (
    <View style={styles.detailsViewStyle}>
      <Text>Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default DetailsScreen;
