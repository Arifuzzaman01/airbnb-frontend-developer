
import RoomCard from "../cardBody/RoomCard";

const Bangkok = () => {
  const cardData = [
  {
    id: 22,
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Private Island Villa",
    price: 1200,
    nights: 7,
    rating: 4.99,
    isFavorite: true,
    location: "Fiji"
  },
  {
    id: 23,
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Cliffside Mansion with Infinity Pool",
    price: 850,
    nights: 5,
    rating: 4.96,
    isFavorite: true,
    location: "Santorini, Greece"
  },
  {
    id: 24,
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Glass Treehouse in Forest",
    price: 380,
    nights: 3,
    rating: 4.94,
    isFavorite: true,
    location: "Costa Rica"
  },
  {
    id: 25,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Converted Windmill Cottage",
    price: 295,
    nights: 4,
    rating: 4.87,
    isFavorite: true,
    location: "Netherlands"
  },
  {
    id: 26,
    img: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Desert Dome with Star Gazing",
    price: 420,
    nights: 3,
    rating: 4.98,
    isFavorite: true,
    location: "Dubai, UAE"
  },
  {
    id: 27,
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Floating House on Lake",
    price: 560,
    nights: 4,
    rating: 4.95,
    isFavorite: true,
    location: "Sweden"
  },
  {
    id: 28,
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Castle Suite with Historic Charm",
    price: 680,
    nights: 5,
    rating: 4.93,
    isFavorite: true,
    location: "Scotland"
  }
];
 
  return (
    <section
     
    >
      <RoomCard
        cardData={cardData}
        title={"Available next month in Bangkok"}
        
      />
    </section>
  );
};

export default Bangkok;
