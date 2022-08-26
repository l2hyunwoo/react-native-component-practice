import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ChildView, TableViewProps } from '../interface';

const Cell: React.FC<TableViewProps<ChildView>> = React.memo(props => {
  const {data, width, height, flex, style, textStyle, borderStyle, ...rest} =
    props;

  const textDom = React.isValidElement(data) ? (
    data
  ) : (
    <Text style={[textStyle, styles.text]} {...rest}>
      {data}
    </Text>
  );

  const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderRightWidth = borderTopWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <View
      style={[
        {
          borderTopWidth,
          borderRightWidth,
          borderColor,
        },
        styles.cell,
        width && {width},
        height && {height},
        flex && {flex},
        !width && !flex && !height && !style && {flex: 1},
        style,
      ]}>
      {textDom}
    </View>
  );
});

type Style = {
  cell: ViewStyle;
  text: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  cell: {
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
  },
});

export default Cell;
