import styles from "./Product.module.scss";
import clsx from "clsx";
import { useState } from "react";
// import {ReactPropTypes, useState} from "react";
// import PropTypes from 'prop-types';
import Button from "../Button/Button";

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles["color" + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

 const getPrice = () => {

    const found = props.sizes.find(element => {
      return element.name === currentSize
    }); 

    const priceSum = props.basePrice + found.additionalPrice;

    return priceSum
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={size}>
                  <button
                    type="button"
                    className={clsx(size.name === currentSize && styles.active)}
                    onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(
                      prepareColorClassName(color),
                      color === currentColor && styles.active
                    )}
                    onClick={() => setCurrentColor(color)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>

          <Button className={styles.button} {...props} price={getPrice()} color={currentColor} size={currentSize}>
            <span className="fa fa-shopping-cart"  />
          </Button>

        </form>
      </div>
    </article>
  );
};

// Product.propTypes = {}

export default Product;
