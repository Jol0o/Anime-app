import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, Image, ImageBackground, TouchableOpacity, Animated, FlatList, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SlideItem from './../components/SlideItem';

const Home = () => {
    const [data, setData] = useState([]);
    const [dataPopular, setDataPopular] = useState([]);
    const [dataAdvanceSearch, setDataAdvanceSearch] = useState([]);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [loading, setLoading] = useState(true); // Initially set loading to true
    const url = "https://api.consumet.org/meta/anilist/trending";
    const urlPopular = "https://api.consumet.org/meta/anilist/popular"
    const advanceSearch = "https://api.consumet.org/meta/anilist/advanced-search"

    useEffect(() => {
        fetch(advanceSearch)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => setDataAdvanceSearch(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)); // Set loading to false when the request is complete
    }, [advanceSearch]);


    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)); // Set loading to false when the request is complete
    }, [url]);

    useEffect(() => {
        fetch(urlPopular)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => setDataPopular(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)); // Set loading to false when the request is complete
    }, [urlPopular]);

    const handleOnScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    );

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                {!loading && (
                    <View style={styles.featuredContainer}>
                        <ImageBackground
                            source={{ uri: data?.results[0]?.image }}
                            resizeMode="cover"
                            style={styles.featuredImageBackground}
                        >
                            <View style={styles.featuredContent}>
                                <Text style={styles.featuredTitle}>
                                    {data?.results[0]?.title?.userPreferred}
                                </Text>
                                <Text style={styles.featuredDescription}>
                                    {data?.results[0]?.description?.slice(0, 60) + '...'}
                                </Text>
                                <View style={styles.featuredButtons}>
                                    <TouchableOpacity
                                        style={styles.playButton}
                                    >
                                        <MaterialCommunityIcons name='play-circle' color='#fff' size={15} />
                                        <Text style={styles.buttonText}>Play</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.myListButton}
                                    >
                                        <MaterialCommunityIcons name='plus' color='#fff' size={15} />
                                        <Text style={styles.buttonText}>My List</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                )}

                {/* Trending Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>Trending</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                </View>

                {!loading && (
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.horizontalScrollView}
                    >
                        {data?.results.map((item, index) => (
                            <View style={styles.imageContainer} key={item.id}>
                                <TouchableOpacity style={styles.imageItem}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.imageItemInner}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                                <Text style={styles.imageIndexText}>{index + 1}</Text>
                                {item.rating && (
                                    <Text style={styles.ratingText}>
                                        {item.rating / 10}
                                    </Text>
                                )}
                            </View>
                        ))}
                    </ScrollView>
                )}

                {/* Popular Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>Popular</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                </View>

                {!loading && (
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.horizontalScrollView}
                    >
                        {dataPopular?.results?.map((item, index) => (
                            <View style={styles.imageContainer} key={item.id}>
                                <TouchableOpacity style={styles.imageItem}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.imageItemInner}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                                <Text style={styles.imageIndexText}>{index + 1}</Text>
                                {item.rating && (
                                    <Text style={styles.ratingText}>
                                        {item.rating / 10}
                                    </Text>
                                )}
                            </View>
                        ))}
                    </ScrollView>
                )}

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>Advance Searchs</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                </View>

                {!loading && (
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.horizontalScrollView}
                    >
                        {dataAdvanceSearch && dataAdvanceSearch.results?.map((item, index) => (
                            <View style={styles.imageContainer} key={item.id}>
                                <TouchableOpacity style={styles.imageItem}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.imageItemInner}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                                <Text style={styles.imageIndexText}>{index + 1}</Text>
                                {item.rating && (
                                    <Text style={styles.ratingText}>
                                        {item.rating / 10}
                                    </Text>
                                )}
                            </View>
                        ))}
                    </ScrollView>
                )}

                {loading && <ActivityIndicator size={50} color="#38E54D" />}
            </ScrollView>
        </SafeAreaView>

    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: 'rgba(24, 26, 32, 1)',
        width: '100%',
    },
    featuredContainer: {
        flex: 1,
        height: 300,
    },
    featuredImageBackground: {
        flex: 1,
        width: '100%',
    },
    featuredContent: {
        width: '100%',
        flex: 1,
        padding: 10,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    featuredTitle: {
        fontSize: 20,
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: 5, height: 2 },
        textShadowRadius: 10,
    },
    featuredDescription: {
        fontSize: 13,
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 5, height: 2 },
        textShadowRadius: 10,
        width: '80%',
    },
    featuredButtons: {
        flexDirection: 'row',
    },
    playButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#06C149',
        borderRadius: 20,
        padding: 5,
        marginTop: 10,
        width: '18%',
    },
    myListButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        padding: 5,
        marginTop: 10,
        marginLeft: 5,
        width: '23%',
    },
    buttonText: {
        color: '#fff',
        marginLeft: 5,
    },
    sectionHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'flex-end',
    },
    sectionHeaderText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    seeAllText: {
        color: '#38E54D',
        fontSize: 13,
    },
    horizontalScrollView: {
        flexDirection: 'row',
        maxHeight: 190,
    },
    imageContainer: {
        width: 130,
        marginLeft: 10,
    },
    imageItem: {
        width: '100%',
    },
    imageItemInner: {
        width: '100%',
        height: 180,
        borderRadius: 5,
    },
    imageIndexText: {
        position: 'absolute',
        bottom: 10,
        color: '#fff',
        fontWeight: 'bold',
        left: 10,
        fontSize: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 5, height: 2 },
        textShadowRadius: 10,
    },
    ratingText: {
        backgroundColor: '#38E54D',
        width: 30,
        position: 'absolute',
        left: 10,
        top: 10,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
    },
});
