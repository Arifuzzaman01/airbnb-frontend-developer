import React from 'react';
import RoomCard from '../cardBody/RoomCard';

const Sydney = () => {
    const cardData = [
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Downtown Apartment",
    price: 190,
    nights: 2,
    rating: 4.85,
    isFavorite: false,
    location: "Tokyo, Japan"
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Modern Studio in City Center",
    price: 125,
    nights: 3,
    rating: 4.79,
    isFavorite: true,
    location: "Paris, France"
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Penthouse with City Skyline",
    price: 420,
    nights: 4,
    rating: 4.97,
    isFavorite: true,
    location: "New York, USA"
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Historic Apartment in Old Town",
    price: 160,
    nights: 3,
    rating: 4.82,
    isFavorite: false,
    location: "Prague, Czech Republic"
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Designer Loft with Rooftop",
    price: 280,
    nights: 2,
    rating: 4.91,
    isFavorite: true,
    location: "London, UK"
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Family Apartment Near Attractions",
    price: 210,
    nights: 5,
    rating: 4.84,
    isFavorite: false,
    location: "Rome, Italy"
  },
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Business Suite with Office Space",
    price: 195,
    nights: 2,
    rating: 4.78,
    isFavorite: true,
    location: "Singapore"
  }
];
    return (
        <div>
            <RoomCard cardData={cardData} title={'Popular homes in Sydney'}/>
        </div>
    );
};

export default Sydney;