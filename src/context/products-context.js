import React, { useState } from 'react';

export const productcontext = React.createContext({
    products: [],
    toogaleFavrorite: (id)=>{}

});

export default props =>{
   const initialState = [
        {
          id: 'p1',
          title: 'Red Scarf',
          description: 'A pretty red scarf.',
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: 'A pretty blue t-shirt.',
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: 'A pair of lightly green trousers.',
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: 'Street style! An orange hat.',
          isFavorite: false
        }
      ];

    const tooglrfav = proctid =>  [
        setproductList(currentproductList=>{
            const prodIndex = currentproductList.findIndex(
                p => p.id === proctid
              );
              const newFavStatus = !currentproductList[prodIndex].isFavorite;
              const updatedProducts = [...currentproductList];
              updatedProducts[prodIndex] = {
                ...currentproductList[prodIndex],
                isFavorite: newFavStatus
              };
              return updatedProducts;        
        })
    ]

    const [productList, setproductList]= useState(initialState);
    return (
    <productcontext.Provider value={{products: productList, toogaleFavrorite: tooglrfav }} >
    {props.children}
    </productcontext.Provider>
)
}
