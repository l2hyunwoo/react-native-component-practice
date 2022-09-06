import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ChildView, TableViewProps } from '../interface';
import { sum } from '../utils';
import Cell from './cell';

export const Row: React.FC<TableViewProps<ChildView[]>> = React.memo(props => {
  const {data, style, widthArr, height, flexArr, textStyle, ...rest} = props;
  let width = widthArr ? sum(widthArr) : 0;
  return data ? (
    <View style={[height && {height}, width && {width}, styles.row, style]}>
      {data.map((item, index) => {
        const flex = flexArr && flexArr[index];
        const widthOfIndex = widthArr && widthArr[index];
        return (
          <Cell
            key={index}
            data={item}
            width={widthOfIndex}
            flex={flex}
            textStyle={textStyle}
            {...rest}
          />
        );
      })}
    </View>
  ) : null;
});

export const Rows: React.FC<TableViewProps<ChildView[][]>> = React.memo(
  props => {
    const {data, style, widthArr, heightArr, flexArr, textStyle, ...rest} =
      props;
    const flex = flexArr ? sum(flexArr) : 0;
    const width = widthArr ? sum(widthArr) : 0;

    return data ? (
      <View style={[flex && {flex}, width && {width}]}>
        {data.map((item, i) => {
          const height = heightArr && heightArr[i];
          return (
            <Row
              key={i}
              data={item}
              widthArr={widthArr}
              height={height}
              flexArr={flexArr}
              style={style}
              textStyle={textStyle}
              {...rest}
            />
          );
        })}
      </View>
    ) : null;
  },
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
