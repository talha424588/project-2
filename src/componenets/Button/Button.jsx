import styles from "./Button.module.css";
function Button(props) {
  console.log(props);
  const { text, icon, isOutline } = props; //de sturctring
  return (
    <>
      <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon} {text}
      </button>
    </>
  );
}
export default Button;
