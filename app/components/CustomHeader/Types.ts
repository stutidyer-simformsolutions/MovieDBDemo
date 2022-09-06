import type { ImageSourcePropType } from 'react-native';

type CustomHeaderPropsType = {
  leftIconName: string;
  onPress?: () => void;
  title?: string;
  logoIcon: ImageSourcePropType;
  rightIconName?: string;
  onRightPress?: () => void;
  isSearchIconVisible: boolean;
  onSearchPress?: () => void;
};

export type { CustomHeaderPropsType };
