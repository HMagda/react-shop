import styles from './Product.module.scss';
import clsx from 'clsx';
import { ReactPropTypes, useState } from 'react';

// import PropTypes from 'prop-types';

import Button from '../Button/Button';

import productsData from '../../data/products';


const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  // const [currentSize, setCurrentSize] = useState(props.sizes.name[0]);

  // const prepareColorClassName = color => {
  //   return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  // }

  const prepareColorClassName = color => {
    return `styles.color${color.charAt(0).toUpperCase() + color.slice(1)}`;
  }
  

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>

              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}

              {props.sizes.map(size_item => 
                <li key={size_item}>
                  <button type="button" 
                  // className={clsx(size_item === size && styles.active)}
                  >{props.sizes.name}fff</button>
                </li>)}

            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>

              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}

              {props.colors.map(color_item => 
                <li key={color_item}>
                  <button type="button" className={clsx(prepareColorClassName(color_item)
                    // , color_item === color && styles.active
                    )
                    }>red</button>
                </li>)}

            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

// Product.propTypes = {}

export default Product;