import Image from "next/image";
import React from "react";

const Menu = ({ foods }) => {
  const { dish_name, price, image_link } = foods;
  // console.log(dish_name, price)

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image width={300} height={300} src={image_link}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline"> $ {price} </div>
          <div className="badge badge-outline">Order</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
