import React from 'react';
import {Picker} from '@react-native-picker/picker';

export const Dropdown = ({
  title,
  selectedValue,
  pickerList,
  keyField,
  labelField,
  valueField,
  onSelect,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={value => {
          onSelect(value);
        }}>
        <Picker.Item label="--Select--" value="" />
        {pickerList?.map(item => {
          <Picker.Item
            key={item[keyField]}
            label={item[labelField]}
            value={item[valueField]}
          />;
        })}
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
});
