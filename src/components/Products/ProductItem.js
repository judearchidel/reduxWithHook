import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {useStore} from '../../hooks-store/store';
import Card from '../UI/Card';
import './ProductItem.css';
import { toggleFav } from '../../store/actions/products';
import {productcontext} from '../../context/products-context';

 
const ProductItem = props => {
  const dispatch = useStore(false)[1];
 // const dispatch = useDispatch();
// const tooglefav = useContext(productcontext).toogaleFavrorite;
  const toggleFavHandler = () => {
   // dispatch(toggleFav(props.id));
 //  tooglefav(props.id);
 dispatch('TOOGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
