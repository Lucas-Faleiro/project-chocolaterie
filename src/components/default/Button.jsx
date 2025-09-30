export default function Button(props) {
  return (
    <div>
      <button {...props}>{props.children}</button>
    </div>
  );
}
