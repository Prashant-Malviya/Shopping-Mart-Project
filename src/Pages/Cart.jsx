import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";

function Cart() {

  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
        setTotalAmount( cart.reduce((acc,curr) => acc + curr.price,0));
    },[cart])

  return (
    <div>
    <div className='bg-slate-900'>
        <Navbar />
      </div>
    <div>
      {cart.length > 0 ? (
        <div className="flex">
            <div className="w-3/5">
                {
                    cart.map((item,index) =>{
                        return <CartItem key={item.id} item={item} itemIndex={index} />
                    })
                }
            </div>
            
            <div className="w-2/5">
                <div className="p-5 mb-5">
                    <div className="font-bold text-xl ">Your Cart</div>
                    <div className="font-bold  text-3xl p-4 text-green-700">SUMMARY</div>
                    <p className="text-sm font-bold p-3">
                        <span>Total Items :{cart.length} </span>
                    </p>
                </div>

                <div className="p-5">
                    <p className="text-sm font-bold p-2 mb-5">Total Amount : {totalAmount} </p>

                    <button class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        CheckOut Now
                    </button>
                </div>

            </div>

        </div>
      ) : (
        <div className="flex flex-col h-screen justify-center items-center m-auto">
          <h1 className="text-red-500 font-bold text-2xl p-4 m-4">Cart Is Empty</h1>
          <Link to={"/"}>
            <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
    </div>
  ); 
}

export default Cart;
