"use client";
import React, { useEffect, useState } from "react";
import "../Styles/cards.css";
import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { Adding } from "../Reduxx/slicer";
interface CardsItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const CardsData = () => {
  const [data, setdata] = useState<CardsItem[]>([]);
  const [price, setprice] = useState(0);
  const dispatch = useDispatch();
  const main = [];
  const CardAdding = (elem: CardsItem) => {
    // dispatch(Adding(elem));
    const main1 = main.push(setprice(elem.price));
    console.log(main1);
  };

  useEffect(() => {
    const fetching = async () => {
      try {
        const maindata = await fetch(`https://fakestoreapi.com/products`);
        const maindata2 = await maindata.json();
        setdata(maindata2);
      } catch (err) {
        console.log(err);
      }
    };
    fetching();
  }, []);

  return (
    <div className="cards-container">
      <h1>hhhhhh {price} </h1>
      {data.length > 0 ? (
        data.map((elem: CardsItem, ind) => (
          <div className="card" key={ind}>
            <img src={elem.image} alt={elem.category} className="card-image" />
            <div className="card-content">
              <h1 className="card-category">{elem.category}</h1>
              <h3 className="card-title">{elem.title}</h3>
              <ReactStars
                className="ss"
                count={elem.rating.rate}
                size={40}
                color2={"#ffd700"}
              />

              <h3 className="card-id">ID: {elem.id}</h3>
              <h3 className="card-price">Price: ${elem.price}</h3>
              <button
                onClick={() => CardAdding(elem)}
                style={{ padding: "8px", marginBottom: "20px" }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
};

export default CardsData;
