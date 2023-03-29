import { SafeAreaView, Text } from "react-native";
import React from "react";
import { Button } from '@rneui/themed';

const HomeScreen = ( { navigation }) => {
    console.log(navigation)
    return(
        <SafeAreaView>
            <Text>This is the home screen</Text>
            <Button
                title="Go to Screen 2"
                buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 8,
                }}
                containerStyle={{
                width: 290,
                marginHorizontal: 50,
                marginVertical: 10,
                }}
                onPress={() => {
                    navigation.navigate('Screen2')
                }}
                />
        </SafeAreaView>
    )
}

export default HomeScreen;