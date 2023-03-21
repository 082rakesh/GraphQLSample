import * as React from 'react';
import {Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {LAUNCH_LIST} from '../graphql/queries.graphql';
import {
  LaunchList,
  LaunchListVariables,
} from '../graphql/__generated__/LaunchList';

const Item = ({launch, onPress}) => {
  const {details} = launch;

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.header}>{details}</Text>
    </Pressable>
  );
};

export default ({navigation}) => {
  const {data, loading} = useQuery<LaunchList, LaunchListVariables>(
    LAUNCH_LIST,
    {
      variables: {
        limit: 5,
      },
    },
  );
  console.log('data is: ', data);

  const onPressAction = () => {
    console.log('inside onPressAction');
    navigation.navigate('HomeDetails');
  };

  if (loading) {
    return <Text>Loading ...</Text>;
  }
  return (
    <FlatList
      data={data?.launches}
      renderItem={({item}) => <Item launch={item} onPress={onPressAction} />}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
  },
  subheader: {
    paddingTop: 10,
  },
});

// export default HomeScreen;
