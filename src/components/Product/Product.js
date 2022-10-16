import styles from "./Product.module.scss";
import { useMemo, useState } from "react";
// import {ReactPropTypes, useState} from "react";
// import PropTypes from 'prop-types';
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles["color" + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

const getPrice = useMemo(() => {
    
  const found = props.sizes.find(element => {
    return element.name === currentSize
  }); 

  const priceSum = props.basePrice + found.additionalPrice;

  return priceSum
}, [currentSize, props.basePrice, props.sizes]);

  return (
    <article className={styles.product}>

      <ProductImage color={currentColor} title={props.title} name={props.name}/>

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>

        <ProductForm price={getPrice} productProps={props} color={currentColor} size={currentSize}
        setCurrentColor={setCurrentColor} prepareColorClassName={prepareColorClassName}
        setCurrentSize={setCurrentSize} currentSize={currentSize} 
        />

      </div>
    </article>
  );
};

// Product.propTypes = {}

export default Product;
