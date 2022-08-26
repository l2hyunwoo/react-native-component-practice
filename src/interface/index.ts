import React, {ReactText} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ChildView = JSX.Element | ReactText[][] | ReactTextp[] | ReactText;

export interface TableViewProps<ViewType extends ChildView> {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  borderStyle?: ViewStyle;
  data: ViewType;
  width?: ReactText;
  height?: ReactText;
  flex?: number;
  heightArr?: number[];
  widthArr?: number[];
  flexArr?: number[];
}

export type TableComponent = React.FC<{
  style?: StyleProp<ViewStyle>;
  borderStyle?: ViewStyle;
}>;

export type TableProps = React.PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  borderStyle?: ViewStyle;
}>;
