import React from 'react';
import RoomCard from '../cardBody/RoomCard';

const Osaka = () => {
    // Array 1: Beach & Coastal Properties
const cardData = [
  {
    id: 1,
   img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Budget Hotel Room Downtown",
    title: "Oceanfront Villa with Private Beach",
    price: 450,
    nights: 7,
    rating: 4.95,
    isFavorite: true,
    location: "Maldives"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Beach House with Sunset Views",
    price: 320,
    nights: 5,
    rating: 4.88,
    isFavorite: false,
    location: "Bali, Indonesia"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Seaside Bungalow with Ocean Access",
    price: 280,
    nights: 4,
    rating: 4.91,
    isFavorite: true,
    location: "Phuket, Thailand"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Coastal Cottage with Private Deck",
    price: 195,
    nights: 3,
    rating: 4.83,
    isFavorite: false,
    location: "California, USA"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Beachfront Apartment",
    price: 380,
    nights: 6,
    rating: 4.96,
    isFavorite: true,
    location: "Miami, Florida"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Island Villa with Infinity Pool",
    price: 520,
    nights: 7,
    rating: 4.98,
    isFavorite: true,
    location: "Seychelles"
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Cliffside House with Ocean View",
    price: 340,
    nights: 5,
    rating: 4.89,
    isFavorite: false,
    location: "Portugal"
  }
];
    return (
        <div>
            <RoomCard cardData={cardData} title={'Places to stay in Osaka'} />
        </div>
    );
};

export default Osaka;