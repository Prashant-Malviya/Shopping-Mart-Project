import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import { FadeLoader } from 'react-spinners';
import { signOut } from 'firebase/auth';
import { database } from '../Authentication/firbaseConfig';
import { useNavigate } from 'react-router-dom';


function Home() {
    const api_url = "https:fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const history = useNavigate();

    async function fetchProductData(){
        setLoading(true);

        try {
            const res = await fetch(api_url);
            const data = await res.json();
            console.log(data)
            setPosts(data)

        } catch (error) {
            console.log("Error Occurred!!!!!")
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])

    const handleClick = ()=>{
      signOut(database).then(val =>{
        console.log(val+" value");
        history('/');
      })
    }

  return (
    <div className='flex flex-col'>
     { loading ? (<FadeLoader color="#36d7b7" className='flex justify-center items-center m-auto'/>) :( posts.length > 0 ? 
     (  
    <div className='grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>{
     posts.map((post) =>(
        <Product key={post.id} post={post} />
     ))
    }</div>
       ) : (<div className='flex justify-center items-center'>
        <p>No data found</p>
      </div>))}
      <div className='m-5 p-5'>
    <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleClick}>SignOut</button>
    </div>
    </div>
  )
}

export default Home
