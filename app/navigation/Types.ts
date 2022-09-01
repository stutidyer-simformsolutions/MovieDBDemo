type CustomDrawerDataType = {
  navigation: {
    navigate: (routeName: string, { screen }: { screen: string }) => void;
  };
};

export type { CustomDrawerDataType };
