import React, { useRef, useEffect } from 'react';
import { Image, StyleSheet, View, Animated, Easing, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('screen');

const SlideItem = ({ item }) => {
    const translateYImage = useRef(new Animated.Value(40)).current;
    console.log('item', item);

    useEffect(() => {
        Animated.timing(translateYImage, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.bounce,
        }).start();
    }, []);

    const img = [
        {
            id: 1,
            img: 'https://res.cloudinary.com/dkibnftac/image/upload/v1685537680/air-jordan-1-mid-se-shoes-p48zQ5_rhu7g9.jpg',
        },
        {
            id: 2,
            img: 'https://res.cloudinary.com/dkibnftac/image/upload/v1693321085/web/Nike_air_max_dawn_ittas6.png',
        },
        {
            id: 3,
            img: 'https://res.cloudinary.com/dkibnftac/image/upload/v1693321090/web/Nike_air_presto_zkfssd.png',
        },
        {
            id: 4,
            img: 'https://res.cloudinary.com/dkibnftac/image/upload/v1693284461/web/pp_cm164u.png',
        },
        {
            id: 5,
            img: 'https://res.cloudinary.com/dkibnftac/image/upload/v1693284461/web/pp_cm164u.png',
        },
        {
            id: 6,
            img: 'https://res.cloudinary.com/dkibnftac/image/upload/v1693284461/web/pp_cm164u.png',
        },
        {
            id: 7,
            img: 'https://res.cloudinary.com/dkibnftac/image/upload/v1693284461/web/pp_cm164u.png',
        },
    ];

    return (
        <View style={styles.container}>
            <Animated.Image
                source={{ uri: img.img }}
                resizeMode="cover"
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                translateY: translateYImage,
                            },
                        ],
                    },
                ]}
            />
            <Text>DFASDF</Text>
        </View>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width,
        height: '100%',
        alignItems: 'center',
    },
    image: {
        flex: 0.5,
        width: '100%',

    },
});
