import React from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import { ListItem } from '@rneui/themed';
import { Icon } from '@rneui/themed';

const courses = [
    {
        id: 1,
        title: 'Cross Platform',
        code: 5000
    },
    {
        id: 2,
        title: 'Full Stack 1',
        code:5055
    },
    {
        id: 3,
        title: 'Full Stack 2',
        code: 5010
    },
    {   
        id: 4,
        title: 'Agile Methodologies',
        code: 5200
    }
]

const SampleList = () => {
    return(
        <ScrollView>
            <View>
                {
                    courses.map(course => {
                        return (
                            <ListItem   onPress={() => console.log(course.id)} 
                                        bottomDivider 
                                        key={course.id}>
                                <ListItem.Content>
                                    <ListItem.Title right>{course.title}</ListItem.Title>
                                    <ListItem.Subtitle>{course.code}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        )
                    })
                }
            </View>
        </ScrollView>

    );
}

export default SampleList;