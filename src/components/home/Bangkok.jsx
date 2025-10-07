import React, { useState } from "react";
import RoomCard from "../cardBody/RoomCard";

const Bangkok = () => {
  const cardData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1555857241-11267868779c?w=800",
      title: "Apartment in Bukit Bintang",
      price: 76,
      nights: 2,
      rating: 4.87,
      isFavorite: true,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      title: "Place to stay in Cheras",
      price: 44,
      nights: 2,
      rating: 4.92,
      isFavorite: true,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-151291872884b2323f18b57b9f3d93b1?w=800",
      title: "Place to stay in Bukit Bintang",
      price: 45,
      nights: 2,
      rating: 4.95,
      isFavorite: true,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1513519106090-3d234cd0c90c?w=800",
      title: "PALAPOL",
      price: 77,
      nights: 2,
      rating: 4.88,
      isFavorite: true,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1517406691456-6a7e0f8f108d?w=800",
      title: "PALAPOL",
      price: 75,
      nights: 2,
      rating: 4.89,
      isFavorite: true,
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      title: "PALAPOL",
      price: 75,
      nights: 2,
      rating: 4.89,
      isFavorite: true,
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800",
      title: "PALAPOL",
      price: 75,
      nights: 2,
      rating: 4.89,
      isFavorite: true,
    },
  ];
  const [active, setActive] = useState(false);
  // console.log(active);
  return (
    <section
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <RoomCard
        cardData={cardData}
        title={"Available next month in Bangkok"}
        active={active}
      />
    </section>
  );
};

export default Bangkok;
