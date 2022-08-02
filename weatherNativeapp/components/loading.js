//import liraries
import React, { Component } from 'react';
import { View, Text/* , StyleSheet  */} from 'react-native';

// create a component
const Loading = () => {
    return (
        <div /* style={styles.container} */>
            <div style={{color:'white'}} >Loading</div>
        </div>
    );
};

// define your styles
/* const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
}); */

//make this component available to the app
export default Loading;
