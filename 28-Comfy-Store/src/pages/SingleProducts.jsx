import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const loader = async({params})=>{
  const response = await customFetch(`/products/${params.id}`);
  return {product : response.data.data};
};
const SingleProducts = () => {
  const { product } = useLoaderData();
  const {image, title, price, description, color, company} = product.attributes;
  const dollarsAmount = formatPrice(price);
  return (
    <div className='text-4xl'>SingleProducts</div>
  )
}

export default SingleProducts