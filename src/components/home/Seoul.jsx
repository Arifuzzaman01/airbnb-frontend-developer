import React from "react";
import RoomCard from "../cardBody/RoomCard";

const Seoul = () => {
  const cardData = [
    {
      id: 9,
     img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Cozy Studio Apartment",
      price: 65,
      nights: 2,
      rating: 4.72,
      isFavorite: false,
      location: "Bangkok, Thailand",
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Shared Room in Hostel",
      price: 25,
      nights: 1,
      rating: 4.35,
      isFavorite: false,
      location: "Berlin, Germany",
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Glass Treehouse in Forest",
      price: 280,
      nights: 3,
      rating: 4.94,
      isFavorite: true,
      location: "Costa Rica",
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Converted Windmill Cottage",
      price: 195,
      nights: 4,
      rating: 4.87,
      isFavorite: true,
      location: "Netherlands",
    },

    {
      id: 1,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Oceanfront Villa with Private Beach",
      price: 450,
      nights: 7,
      rating: 4.95,
      isFavorite: true,
      location: "Maldives",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Beach House with Sunset Views",
      price: 320,
      nights: 5,
      rating: 4.88,
      isFavorite: false,
      location: "Bali, Indonesia",
    },
  ];
  return <div>
    <RoomCard cardData={cardData} title={'Homes in Seoul'}/>
  </div>;
};

export default Seoul;
