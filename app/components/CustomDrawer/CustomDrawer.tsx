import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import { ROUTES, Strings } from '../../constants';
import styles from './CustormDrawerStyles';
import type { CustomDrawerDataType } from '../../navigation';

const CustomDrawer = (props: CustomDrawerDataType) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View
          style={{
            ...styles.container,
            ...styles.profileView,
          }}>
          <Text style={styles.user}>{Strings.user}</Text>
        </View>
        <DrawerItem
          label={Strings.home}
          onPress={() => {
            navigation.navigate(ROUTES.TabRoute, {
              screen: ROUTES.HomeScreen,
            });
          }}
          icon={() => <Icon name={'home'} size={15} />}
          labelStyle={styles.label}
        />
        <DrawerItem
          label={Strings.movie}
          onPress={() => {
            navigation.navigate(ROUTES.TabRoute, {
              screen: ROUTES.MovieScreen,
            });
          }}
          icon={() => <Icon name={'movie'} size={15} />}
          labelStyle={styles.label}
        />
        <DrawerItem
          label={Strings.trailer}
          onPress={() => {
            navigation.navigate(ROUTES.TabRoute, {
              screen: ROUTES.TrailerScreen,
            });
          }}
          icon={() => <Icon name={'chip'} size={15} />}
          labelStyle={styles.label}
        />
        <DrawerItem
          label={Strings.community}
          onPress={() => {
            navigation.navigate(ROUTES.TabRoute, {
              screen: ROUTES.CommunityScreen,
            });
          }}
          icon={() => (
            <Icon name={'account-group-outline'} color={'pink'} size={15} />
          )}
          labelStyle={styles.label}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
