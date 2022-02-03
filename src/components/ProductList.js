import React, {useState, useEffect} from 'react';

import {BsCart2, BsCartFill, BsHeart, BsHeartFill} from 'react-icons/bs'

export default function ProductList(props) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Adela Top",
      price: "$121",
      image: "image1.png",
      liked: false,
      inCart: false
    },
    {
      id: 2,
      name: "Leather Jacket",
      price: "$990",
      image: "image2.png",
      liked: false,
      inCart: false
    },
    {
      id: 3,
      name: "Men Suit",
      price: "$999",
      image: "image3.png",
      liked: false,
      inCart: false
    },
    {
      id: 4,
      name: "Ladies Top",
      price: "$332",
      image: "image12.png",
      liked: false,
      inCart: false
    },
    {
      id: 5,
      name: "Black Dress",
      price: "$802",
      image: "image22.png",
      liked: false,
      inCart: false
    },
    {
      id: 6,
      name: "Trills Company",
      price: "$2234",
      image: "image32.png",
      liked: false,
      inCart: false
    },
  ])

  const [filteredItems, setFilterItems] = useState([]);
 
  const addToCart = async(id) => {
      let i = [...items]
      let n = 0
      await items.filter((thisItem, index)=>{
        if(thisItem.id === id){
          i[index].inCart = !i[index].inCart
        }
        if(thisItem.inCart){
          n++
        }
        return false
      })
      setItems(i)
      props.setNumberInCart(n)
  }
  const toggleLike = async (id) => {
    let i = [...items]
    await items.filter((thisItem, index)=>{
      if(thisItem.id === id){
        i[index].liked = !i[index].liked
      }
      return false
    })
    setItems(i)
   

  }
  const filterItems = async () =>{
      let found;
      console.log(props.searchText)
      found = await items.filter((thisItem)=>{
          if(thisItem.name.toLowerCase().includes(props.searchText.toLowerCase())){
            return true
          }else if(thisItem.price.toLowerCase().includes(props.searchText.toLowerCase())){
            return true
          }
          return false
      })
      setFilterItems(found)
  }

  useEffect(()=>{
    if(typeof props.searchText !== "undefined"){
      filterItems()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.searchText, items])


  return (
  <div className=''>
    <div className='productWrapper row'>
      
      {filteredItems.map((thisItem, index)=>(
      <div className='productBox' key={index}>
        <div className="inner">
          <div className='productImage'
          style={{
            backgroundImage: `url("./products/${thisItem.image}")`,
            backgroundSize:'cover',
            backgroundPosition: 'center'
          }}
          >
              
          </div>
          <div className='productContent'>
              <div className='productText'>
                <div className='productTitle'>{thisItem.name}</div>
                <div className='productPrice'>{thisItem.price}</div>
              </div>
              <div className='productIcons'>
                <div className='productIcon'>

                  {thisItem.inCart &&
                      <BsCartFill 
                      style={{ transform: 'scaleX(-1)' }}
                      onClick={()=>addToCart(thisItem.id)}/>
                  }
                  {!thisItem.inCart &&
                      <BsCart2
                      style={{ transform: 'scaleX(-1)' }}
                      onClick={()=>addToCart(thisItem.id)}/>
                  }  

                </div>

                <div className='productIcon'>
                  {thisItem.liked &&
                      <BsHeartFill onClick={()=>toggleLike(thisItem.id)}/>
                  }
                  {!thisItem.liked &&
                      <BsHeart onClick={()=>toggleLike(thisItem.id)}/>
                  }
                  
                </div>
              </div>
          </div>
        </div>
      </div>
      ))}

      
      

      
    </div>
  </div>
  )}
