import type { CustomCardPropType } from '../../components/CustomCard/Types';

type HomeComponentPropType = {
  title: string;
  dropDowndData: string[];
  dataList: CustomCardPropType[];
  navigateToDetailsScreen: () => {};
};

export type { HomeComponentPropType };
