import styles from "../Product/Product.module.scss";
import Button from "../Button/Button";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";

const ProductForm = (props) => {

  return (

    <form>

        <OptionSize setCurrentSize={props.setCurrentSize} currentSize={props.currentSize} {...props.productProps}/>

        <OptionColor setCurrentColor={props.setCurrentColor} prepareColorClassName={props.prepareColorClassName} {...props.productProps}/>

        <Button className={styles.button} {...props.productProps} price={props.price} color={props.color} size={props.size}>
            <span className="fa fa-shopping-cart"  />
        </Button>

    </form>

  );
};

export default ProductForm;

