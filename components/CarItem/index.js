import React from 'react';
import {View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';


const carItem = (props) => {

    const { name, tagline, taglineCTA, image} = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={image}
                style={styles.image}
            />
        
        <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
                {tagline}
                {' '}
                <Text style={styles.subtitleCTA}>
                    {taglineCTA}
                </Text>
            </Text>
        </View>

        <View style={styles.buttonContainer}>
            <StyledButton 
                type="primary"
                content={"Custom order"}
                onPress={() =>{
                console.warn("Custom Order was Pressed");
                }}
            />

            <StyledButton 
                type="secondary"
                content={"Existing Inventory"}
                onPress={() =>{
                console.warn("Existing Inventory was Pressed");
                }}
            />
        </View>

        </View>
    );
};

export default carItem;