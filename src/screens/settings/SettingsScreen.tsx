import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../../components/Button';

function SettingsScreen({navigation}) {
  return (
    <View style={styles.settingViewStyle}>
      <Button
        title="Branch Locator"
        onPress={() => navigation.navigate('Branch Locator')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  settingViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default SettingsScreen;
