type CustomDrawerDataType = {
  navigation: {
    navigate: (routeName: string, { screen }: { screen: string }) => void;
  };
};

type NavigationDataType = {
  navigate: (screen: string) => void;
  openDrawer: () => void;
};

export type { CustomDrawerDataType, NavigationDataType };
