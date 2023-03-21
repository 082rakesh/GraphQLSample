import {createNavigationContainerRef} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigateTo(routeName: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}

export function goBack(times: number = 1) {
  if (navigationRef.isReady()) {
    for (let i = 0; i < times; i += 1) {
      if (navigationRef.canGoBack()) {
        navigationRef.goBack();
      }
    }
  }
}
