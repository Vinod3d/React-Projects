/* eslint-disable no-constant-condition */

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [food, setFood] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  const [bucket, setBucket] = useState([]);

  const handleInput = (e)=>{
    setFood(e.target.value);
  }

  const fetchItems = async (food)=>{
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const response = await fetch(url);
    const data = await response.json();
    setShoppingList(data);
  }

  useEffect(()=>{
    if(food.length >= 2){
      fetchItems(food);
    }
  },[food])

  const handleShoppingList = (e)=>{
    const target = e.target.closest('[data-id]');
    const id = target.dataset.id;
    if (id) {
      const obj = {
        id : Date.now(),
        data : shoppingList[id],
        isDone : false
      }
      setBucket([...bucket, obj]);
    }
    setFood('')
  }


  const handleRightClick = (id)=>{
    console.log(id)
    const copyBucket = [...bucket];
    const newBucket = copyBucket.map((item)=>{
      if(item.id === id){
        item.isDone = !item.isDone;
      }
      return item;
    })
    setBucket(newBucket);
   
  }

  const handleDelete = (id)=>{
    const newBucket = bucket.filter(item => item.id !== id);
    setBucket(newBucket);
  }

  const handleUpdate = (e)=>{
    
    const btnType = e.target.closest('[data-type]').dataset.type;
    const itemId = e.target.closest('[data-id]').dataset.id;
    const numId = parseInt(itemId)
    console.log(numId)
    if(btnType === 'check'){
      handleRightClick(numId);
      console.log(btnType)
    }
    if(btnType === 'delete'){
      handleDelete(numId);
    }
  }
 

  return (
    <div className='App'>
      <h1>My Shopping List </h1>
      <div>
        <input 
          type="text" 
          value={food}
          onChange={handleInput}
        />
      </div>
      {
        food.length >= 2 ? <div className="shopping-list" onClick={handleShoppingList}>
        {
         shoppingList?.map((item, index)=>{
           return  <div key={index} data-id={index}>
             <p>{item}</p>
           </div>
         })
        }
     </div>: null
      }
      <div className="bucket" onClick={handleUpdate}>
         {
          bucket?.map((item, index)=>{
            return  <div key={index} className='shopping-items'>
              <button data-type='check' data-id={item.id} >✅</button>
              <p className={item.isDone ? 'strik' : ''}>{item.data}</p>
              <button data-type='delete' data-id={item.id}>❌</button>
            </div>
          })
         }
      </div>
    </div>
  )
}

export default App
