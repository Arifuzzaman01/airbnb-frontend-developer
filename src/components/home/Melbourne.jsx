import React from 'react';
import RoomCard from '../cardBody/RoomCard';

const Melbourne = () => {
    const cardData = [
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Alpine Cabin with Fireplace",
    price: 180,
    nights: 3,
    rating: 4.92,
    isFavorite: true,
    location: "Swiss Alps"
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Mountain Retreat with Hot Tub",
    price: 220,
    nights: 4,
    rating: 4.97,
    isFavorite: true,
    location: "Colorado, USA"
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Forest Cabin by the Lake",
    price: 155,
    nights: 2,
    rating: 4.85,
    isFavorite: false,
    location: "Canada"
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Ski Chalet with Mountain Views",
    price: 310,
    nights: 5,
    rating: 4.93,
    isFavorite: true,
    location: "Austria"
  },
  {
    id: 12,
     img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    
    title: "Riverside Cabin with Fishing",
    price: 140,
    nights: 3,
    rating: 4.79,
    isFavorite: false,
    location: "Montana, USA"
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Hilltop Villa with Panoramic Views",
    price: 270,
    nights: 4,
    rating: 4.90,
    isFavorite: true,
    location: "Italy"
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Wilderness Lodge with Wildlife",
    price: 195,
    nights: 3,
    rating: 4.86,
    isFavorite: true,
    location: "Kenya"
  }
];

    return (
        <div>
            <RoomCard cardData={cardData} title={'Check out homes in Melbourne'} />
        </div>
    );
};

export default Melbourne;