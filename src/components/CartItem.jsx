import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/Slices/cartSlice';
import toast from 'react-hot-toast';

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error('Item Removed Successfully');
  };

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:h-[300px] p-5 m-5'>
        <img src={item.images[0]} alt='' className='w-full h-full' />
      </div>
      <div className='p-5 m-5 flex-1'>
        <h1 className='font-bold text-xl'>{item.title}</h1>
        <p className='text-gray-400 font-normal text-[10px] text-left'>
          {item.description.split(' ').slice(0, 10).join(' ') + '...'}
        </p>
        <div className='flex flex-col lg:flex-row justify-between items-center p-5 m-5'>
          <p className='font-bold text-green-700 mb-2 lg:mb-0'>
            ${item.price}
          </p>
          <div
            onClick={removeFromCart}
            className='rounded-full h-10 w-10 flex bg-red-300 justify-center items-center cursor-pointer'
          >
            <MdDelete />
          </div>
        </div>

        <div className='bg-black w-full h-0.5'></div>
      </div>
    </div>
  );
}

export default CartItem;
