/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import {useQuery, gql} from '@apollo/client';

const CharactersQuery = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
        location {
          name
        }
      }
    }
  }
`;

const Characters = () => {
  const {data, loading, error} = useQuery(CharactersQuery);

  console.log(data, error);
  const Item = character => {
    const {
      id,
      name,
      image,
      location: {name: locationName},
    } = character;
    console.log(character);
    return (
      <View
        style={{
          borderWidth: 2,
          borderColor: '#dbdbdb',
          borderRadius: 25,
          padding: 20,
          marginBottom: 10,
          alignItems: 'center',
        }}
        key={id}>
        <Image source={{uri: image}} style={{width: 200, height: 200}} />
        <Text>{name}</Text>
        <Text>{locationName}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      {loading ? (
        <Text>loading...</Text>
      ) : (
        <FlatList
          contentContainerStyle={{padding: 20}}
          data={data?.characters?.results ?? []}
          renderItem={({item}) => <Item {...item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Characters;
