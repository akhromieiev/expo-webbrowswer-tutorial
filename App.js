import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {WebBrowser} from 'expo';

export default class App extends React.Component {

    state = {
        url: 'https://akhromieiev.com'
    };

    openWebPage = async (url) => {
        if (!url) throw 'MISSED_PARAMS';

        try {
            return await WebBrowser.openBrowserAsync(url);
        }
        catch (e) {
            console.log('Error', e);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '100%'}}
                    placeholder="Type url"
                    onChangeText={(text) => this.setState({url: text})}
                    value={this.state.url}
                />
                <Button
                    onPress={() => this.openWebPage(this.state.url)}
                    title="Open Web Page"
                    color="#841584"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

