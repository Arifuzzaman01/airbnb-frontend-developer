import React from 'react';
import RoomCard from '../cardBody/RoomCard';

const London = () => {
    const cardData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Modern Apartment in Downtown",
    price: 120,
    nights: 3,
    rating: 4.92,
    isFavorite: true,
    location: "New York, NY"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Beachfront Villa with Ocean View",
    price: 250,
    nights: 5,
    rating: 4.87,
    isFavorite: false,
    location: "Miami, FL"
  },
  {
    id: 3,
  img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Shared Room in Hostel",
    price: 95,
    nights: 2,
    rating: 4.95,
    isFavorite: false,
    location: "Aspen, CO"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Penthouse with City Lights",
    price: 350,
    nights: 4,
    rating: 4.89,
    isFavorite: true,
    location: "Los Angeles, CA"
  },
  {
    id: 5,
     img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Cozy Studio Apartment",
    price: 180,
    nights: 3,
    rating: 4.83,
    isFavorite: false,
    location: "Boston, MA"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Modern Studio Near Beach",
    price: 110,
    nights: 2,
    rating: 4.91,
    isFavorite: true,
    location: "San Diego, CA"
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 140,
    nights: 3,
    rating: 4.88,
    isFavorite: false,
    location: "Austin, TX"
  }
];
    return (
        <div>
            <RoomCard cardData={cardData} title={'Stay in London'} />
        </div>
    );
};

export default London;