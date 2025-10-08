import React from 'react';
import RoomCard from '../cardBody/RoomCard';

const Toronto = () => {
    const cardData = [
  {
    id: 1,
     img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Alpine Cabin with Fireplace",
    price: 180,
    nights: 3,
    rating: 4.92,
    isFavorite: true,
    location: "Swiss Alps"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Mountain Retreat with Hot Tub",
    price: 220,
    nights: 4,
    rating: 4.97,
    isFavorite: true,
    location: "Colorado, USA"
  }, {
    id: 5,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Downtown Apartment",
    price: 190,
    nights: 2,
    rating: 4.85,
    isFavorite: false,
    location: "Tokyo, Japan"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Modern Studio in City Center",
    price: 125,
    nights: 3,
    rating: 4.79,
    isFavorite: true,
    location: "Paris, France"
  }, {
    id: 7,
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Private Island Villa",
    price: 1200,
    nights: 7,
    rating: 4.99,
    isFavorite: true,
    location: "Fiji"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Cliffside Mansion with Infinity Pool",
    price: 850,
    nights: 5,
    rating: 4.96,
    isFavorite: true,
    location: "Santorini, Greece"
  }
];

    return (
        <div>
            <RoomCard cardData={cardData} title={'Available next month in Toronto'}/>
        </div>
    );
};

export default Toronto;