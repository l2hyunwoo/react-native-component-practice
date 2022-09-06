import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Row, Rows } from './table/components/row';
import { Table } from './table/components/table';
import Font from './styles/font/base/base';

type Content = {
  title: string;
  subtitle?: string | null;
};

const App = React.memo(() => {
  const tableDatas: Content[] = [
    {title: '1'},
    {title: '김지연', subtitle: '고등학교 1학년'},
    {title: '주 1회 60분 수업'},
    {title: '수능 영어', subtitle: '고등학교'},
    {title: '2022-07-14', subtitle: '22:30:00'},
    {title: '20,000'},
  ];
  const tableViews = tableDatas.map(view => {
    return (
      <View>
        <Text style={styles.title}>{view.title}</Text>
        {view.subtitle && <Text style={styles.subTitle}>{view.subtitle}</Text>}
      </View>
    );
  });
  const tableViewArr = [tableViews, tableViews];
  const tableHead = ['No.', '학생명', '상품', '과목', '수업일시', '총액(원)'];
  const tableData = [
    ['1.', '김지연', '주 1회 60분 수업', '수능 영어', '2022-07-14', '20,000'],
    ['2.', '이현우', '주 1회 60분 수업', '수능 영어', '2022-07-14', '20,000'],
    ['3.', '조헨리', '주 1회 60분 수업', '수능 영어', '2022-07-14', '20,000'],
  ];
  return (
    <View style={styles.container}>
      <Table borderStyle={styles.border}>
        <Row data={tableHead} style={styles.head} />
        <Rows data={tableViewArr} textStyle={styles.text} />
      </Table>
    </View>
  );
});

type Style = {
  container: ViewStyle;
  border: ViewStyle;
  head: ViewStyle;
  text: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
  },
  border: {
    borderWidth: 0,
  },
  head: {
    height: 44,
    backgroundColor: '#F5F5F5',
  },
  text: {margin: 6},
  title: {
    ...Font.Body.m,
    color: '#000',
  },
  subTitle: {
    ...Font.Body.m,
    color: '#b2b2b2',
  },
});

export default App;
