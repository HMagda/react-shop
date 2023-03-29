import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
  function addToCart(e) {
    e.preventDefault();
    console.log('Summary');
    console.log('======================');
    console.log('Name: ' + props.title);
    console.log('Price: ' + props.price);
    console.log('Color: ' + props.color);
    console.log('Size: ' + props.size);
  }

  return (
    <button
      className={clsx(styles.button, props.className)}
      onClick={addToCart}
    >
      {props.children}
    </button>
  );
};

export default Button;
