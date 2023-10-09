import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const currentScreen = route.name;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name='arrow-left' color='white' size={26} style={{ backgroundColor: 'transparent', marginRight: 10 }} />
                </TouchableOpacity>
                <Text style={styles.text}>{currentScreen}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
        height: '100%',
        backgroundColor: '#181A20',
        width: '100%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#38E54D',
        textAlign: 'center',
        flex: .9,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white'
    }
})
