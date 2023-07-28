import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
function CartProduct({ data, Remove }) {
  const [quantity, setQuantity] = useState(data?.qty);
  const [emailTimeout, setEmailTimeout] = useState();
  const DecreaseQuantity = async (pidd) => {
    const token = localStorage.getItem("tmToken");
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const IncreaseQuantity = async (pidd) => {
    setQuantity(quantity + 1);
    const token = localStorage.getItem("tmToken");
  };

  useEffect(() => {
    const updateCartQuantity = async () => {
      const token = localStorage.getItem("tmToken");
      try {
        const config = {
          headers: {
            "access-token": token,
          },
        };

        const response = await axios.post(
          "https://admin.tradingmaterials.com/api/lead/product/update-cart-item",
          {
            item_id: data?.id,
            qty: quantity,
          },
          config
        );
        if (response.data.status) {
          window.location.reload();
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (data?.id && quantity !== data?.qty) {
      clearTimeout(emailTimeout);
      setEmailTimeout(
        setTimeout(() => {
          updateCartQuantity();
        }, 1500)
      );
    }
  }, [data?.id, quantity]);
  return (
    <tr className="">
      <td class="tp-cart-img ">
        <a href="product-details.html">
          {" "}
          <img src={data?.product?.img_1} alt="" />
        </a>
      </td>

      <td class="tp-cart-title px-3 ">
        <a href="product-details.html">{data?.product?.name}</a>
      </td>

      <td class="tp-cart-price ">
        <span>₹{data?.price}</span>
      </td>

      <td class="tp-cart-quantity ">
        <div class=" flex gap-2 items-center ">
          <span
            class="font-bold text-xl cursor-pointer"
            onClick={() => DecreaseQuantity(data?.id)}
          >
            <AiOutlineMinus />
          </span>
          <p>{quantity}</p>
          <span
            class="font-bold text-xl cursor-pointer"
            onClick={() => IncreaseQuantity(data?.id)}
          >
            <AiOutlinePlus />
          </span>
        </div>
      </td>

      <td class="tp-cart-action px-4 ">
        <button
          class="text-red-500 cursor-pointer"
          onClick={() => Remove(data?.id, data?.product?.img_1)}
        >
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
}

export default CartProduct;
