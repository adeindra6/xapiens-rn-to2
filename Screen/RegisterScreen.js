import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
} from 'react-native';

class RegisterScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          name: '',
          username: '',
          email: '',
          password: '',
        };
    }

    render() {
        return(
            <View style={ styles.body }>
                <Image source={ require('../Image/xapiens.jpeg') } />                
                <Text style={ styles.title }> {'\n'} Register to Xapiens Profile {'\n'}</Text>
                <Text style={ styles.label }>Name {'\n'}</Text>
                <TextInput                
                    style={ styles.input }
                    value={ this.state.name }
                    onChangeText={ name => this.setState({name}) }
                />
                <Text style={ styles.label }>Username {'\n'}</Text>
                <TextInput
                    style={ styles.input }
                    value={ this.state.username }
                    onChangeText={ username => this.setState({username}) }
                />
                <Text style={ styles.label }>E-mail Address {'\n'}</Text>
                <TextInput
                    style={ styles.input }
                    value={ this.state.email }
                    onChangeText={ email => this.setState({email}) }
                />
                <Text style={ styles.label }>Password {'\n'}</Text>
                <TextInput
                    style={ styles.input }
                    value={ this.state.password }
                    secureTextEntry={true}
                    onChangeText={ password => this.setState({password}) }
                />
                <Text>{'\n'}</Text>
                <Button
                    title="Register"
                    color="#aa0ed0"
                    onPress={() => this.props.navigation.navigate("Profile", {
                        name: this.state.name,
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                    })
                }
                />
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

export default RegisterScreen;