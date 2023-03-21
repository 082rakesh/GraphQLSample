import {Alert} from 'react-native';
import Strings from '../constants/Strings';

interface Props {
  title: string;
  message: string;
  withButton: boolean;
  onPress: () => void;
}

export const showSimpleAlertDialog1 = (props: Props) => {
  const {title, message, withButton, onPress} = props;
  Alert.alert(
    title,
    message,
    withButton
      ? [
          {
            text: Strings.GENERAL_OK.toLocaleUpperCase(),
            onPress,
          },
        ]
      : [],
    {cancelable: false},
  );
};
