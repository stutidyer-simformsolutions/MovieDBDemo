import React, { useCallback, useState, type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../theme';
import styles from './CustomDropDownStyles';
import type { CustomDropDownPropTypes } from './Types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDropDown: FC<CustomDropDownPropTypes> = ({
  data,
  dropDownTextStyle,
  dropDownTintStyle,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(data?.[0]);

  const onItemSelect = useCallback((filterValue: string) => {
    setShowOptions(false);
    setSelectedItem(filterValue);
  }, []);

  return (
    <View style={styles.dropDownContainerStyle}>
      <LinearGradient
        colors={[Color.dropDownGradientStart, Color.dropDownGradientEnd]}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 0 }}>
        <TouchableOpacity
          onPress={() => setShowOptions(!showOptions)}
          style={styles.dropDownItemContainerStyle}>
          <Text style={[styles.dropDownMainTextStyle, dropDownTextStyle]}>
            {selectedItem}
          </Text>
          <Icon
            name="chevron-down"
            size={15}
            color={Color.dropDownGradientStart}
            style={[styles.expandIconStyle, dropDownTintStyle]}
          />
        </TouchableOpacity>
        {showOptions && (
          <>
            {data
              .filter(item => item !== selectedItem)
              .map((filteredItem: string): JSX.Element => {
                return (
                  <TouchableOpacity
                    onPress={() => onItemSelect(filteredItem)}
                    style={styles.dropDownListItem}>
                    <Text style={styles.dropDownListTextStyle}>
                      {filteredItem}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </>
        )}
        <></>
      </LinearGradient>
    </View>
  );
};

export default CustomDropDown;
