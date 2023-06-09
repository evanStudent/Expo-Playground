import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const Cards= () => {
    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <Card>
              <Card.Title>CARD WITH DIVIDER</Card.Title>
              <Card.Divider />
              {users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.avatar }}
                    />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                );
              })}
            </Card>
            <Card containerStyle={{ marginTop: 15 }}>
              <Card.Title>FONTS</Card.Title>
              <Card.Divider />
              <Text style={styles.fonts} h1>
                h1 Heading
              </Text>
              <Text style={styles.fonts} h2>
                h2 Heading
              </Text>
              <Text style={styles.fonts} h3>
                h3 Heading
              </Text>
              <Text style={styles.fonts} h4>
                h4 Heading
              </Text>
              <Text style={styles.fonts}>Normal Text</Text>
            </Card>
            <Card>
              <Card.Title>HELLO WORLD</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0 }}
                source={{
                  uri:
                    'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}
              />
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                icon={
                  <Icon
                    name="code"
                    color="#ffffff"
                    iconStyle={{ marginRight: 10 }}
                  />
                }
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </Card>
          </View>
        </ScrollView>
      </>
    );
    };
    


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    });
    
    export default Cards;