import clsx from "clsx";
import styles from "../Product/Product.module.scss";

const OptionColor = (props) => {

  return (

    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
        {props.colors.map((color) => (
        <li key={color}>
            <button
            type="button"
            className={clsx(
                props.prepareColorClassName(color),
                color === props.currentColor && styles.active
            )}
            onClick={() => props.setCurrentColor(color)}
            ></button>
        </li>
        ))}
    </ul>
    </div>

  );
};

export default OptionColor;