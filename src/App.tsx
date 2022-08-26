import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Row, Rows } from './components/row';
import { Table } from './components/table';

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
        <Text>{view.title}</Text>
        {view.subtitle && <Text>{view.subtitle}</Text>}
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
    borderRadius: 4,
  },
  text: {margin: 6},
});

export default App;
