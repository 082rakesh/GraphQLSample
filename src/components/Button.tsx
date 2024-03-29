import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: number;
  margin?: number;
}

const Button = (props: Props) => {
  const {title, onPress, backgroundColor, color, width, height, margin} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, height, width, margin, backgroundColor}}>
      <Text style={{...styles.textStyle, color}}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  backgoundColor: 'blue',
  color: 'yellow',
  width: '50%',
  height: 45,
  margin: 5,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 2.28,
    shadowRadius: 15.25,
    elevation: 22,
  },
  textStyle: {
    alignItems: 'center',
    fontWeight: 'bold',
    letterSpacing: 1.1,
    fontSize: 16,
  },
});

export default Button;
