import type { ImageSourcePropType } from 'react-native';

type CustomCardPropType = {
  imageURL: ImageSourcePropType;
  userScore: number;
  title: string;
  subTitle: string;
  onCardPress: () => void;
};

export type { CustomCardPropType };
