import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class ProfileScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name','Name');
        const username = navigation.getParam('username','Username');
        const email = navigation.getParam('email','Email');

        return(
            <View style={ styles.body }>
                <Text style={ styles.title }>Info Xapiens Profile</Text>
                <Text style={ styles.label }>Name: { JSON.stringify(name) }</Text>
                <Text style={ styles.label }>Username: { JSON.stringify(username) }</Text>
                <Text style={ styles.label }>E-mail: { JSON.stringify(email) }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#0025cb',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    input: {
        width: '80%',
        height: 35,
        borderWidth: 1,
        backgroundColor: 'white',
    },

    label: {
        color: 'white',
        fontSize: 16,
    },
});

export default ProfileScreen;