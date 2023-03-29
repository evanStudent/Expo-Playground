import React from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import { ListItem, Icon, Avatar } from '@rneui/themed';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-web';



const SampleList = () => {
    
// define state, then name a function that will update state
// initial state is set as an empty array to ensure it will always be an array
const [crew, setCrew] = useState([]);

// retrieve our data 
// empty array ensures function only runs once (for the life of the component)

// useEffect watches the values

useEffect(() => {
    // fetch our crew list 
    // fetch returns a promise (an IOU, not the data)
    // await needs to happen within a function labelled async
    // await gives us the response 
    const fetchData = async () => {
        const response = await fetch('https://api.spacexdata.com/v4/crew')
        const json = await response.json()
        // now that we have the json data, we store it in state
        setCrew(data.sort((a,b)=>a.name.localeCompare(b.name)));
     }
    fetchData()
}, [])
    
    

    return(
        <SafeAreaView>
             <ScrollView>
                {
                    
                    crew.map(crewMember => {
                        return (
                            <ListItem   onPress={() => console.log(crewMember.id)} 
                                        bottomDivider 
                                        key={crewMember.id}>
                                <Avatar 
                                    rounded
                                    source={{ uri:crewMember.iamge }}
                                    />
                                <ListItem.Content>
                                    <ListItem.Title right>{crewMember.name}</ListItem.Title>
                                    <ListItem.Subtitle>{crewMember.agency}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        )
                    })
                } 
        </ScrollView>
        </SafeAreaView>
    );
}

export default SampleList;