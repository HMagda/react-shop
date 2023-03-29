import styles from '../Product/Product.module.scss';

const ProductImage = (props) => {
  const imageSource =
    props.name && props.color
      ? `${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`
      : null;

  return (
    <div className={styles.imageContainer}>
      {imageSource && (
        <img className={styles.image} alt={props.title} src={imageSource} />
      )}
    </div>
  );
};

export default ProductImage;
