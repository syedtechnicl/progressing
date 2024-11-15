"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Reduxx/store";
import ReactStars from "react-stars";
import { Removing } from "../Reduxx/slicer";

const page = () => {
  const maindata = useSelector((state: RootState) => state.NewOne_Learning);
  console.log(maindata);
  const dispatch = useDispatch();

  const RemovetoCard = (elem: any) => {
    dispatch(Removing(elem.id));
  };

  return (
    <div className="cards-container">
      {maindata.length > 0 ? (
        maindata.map((elem: CardsItem, ind) => (
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
                onClick={() => RemovetoCard(elem)}
                style={{ padding: "8px", marginBottom: "20px" }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Cart Empty</p>
      )}

      <hr />
      <div>
        <h1>total price :</h1>
      </div>
    </div>
  );
};

export default page;
