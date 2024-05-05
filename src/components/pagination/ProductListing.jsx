import React from 'react'

const ProductListing = ({products, loading}) => {
  return (
    <div className='h-auto w-screen mt-10 ml-10'>
        <ul className='flex flex-wrap w-screen justify-center'>
            { !loading ? 
                products.map((product, idx)=>{
                    return (
                    <li className="bg-white w-80 h-96 m-5 rounded-2xl shadow-2xl hover:scale-110 transition-all ease-in-out p-2" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} className='object-cover rounded-t-xl h-52 border w-screen' />
                <span style={{ fontWeight: "bold" }}>{product.title}</span> - $
                {product.price}
                    </li>
                    )
                })
                 :
                <p>Loainng ...</p>

            }
        </ul>
    </div>
  )
}

export default ProductListing


// description
// category
// stock
// brand
// rating
// discountPercentage