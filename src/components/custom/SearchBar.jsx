import Button from "./Button";

export default function SearchBar(props) {
  return (
    <div className={props.searchbarcontainer}>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input className={props.inputclass} {...props} />
      <Button className="right-10 bottom-2 cursor-pointer relative">
        <i className="fa-solid fa-magnifying-glass text-pink-400 absolute"></i>
      </Button>
    </div>
  );
}
