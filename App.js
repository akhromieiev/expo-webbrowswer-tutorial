import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebBrowser} from 'expo';

export default class App extends React.Component {

    openWebPage = async (url) => {
        if (!url) throw 'MISSED_PARAMS';

        let result = await WebBrowser.openBrowserAsync(url);
        this.setState({result});
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
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
