import React from 'react';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Big Ben',
        description: '16-storey Gothic clocktower and national symbol at the Eastern end of the Houses of Parliament.',
        imageUrl: 'https://assets.londonist.com/uploads/2016/08/i875/westminster.jpg',
        address: 'Westminster, London SW1A 0AA, United Kingdom',
        location: {
            lat: 51.5007292,
            lng: -0.1268141
        },
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Big Ben',
        description: '16-storey Gothic clocktower and national symbol at the Eastern end of the Houses of Parliament.',
        imageUrl: 'https://assets.londonist.com/uploads/2016/08/i875/westminster.jpg',
        address: 'Westminster, London SW1A 0AA, United Kingdom',
        location: {
            lat: 51.5007292,
            lng: -0.1268141
        },
        creator: 'u2',
    }
];

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;