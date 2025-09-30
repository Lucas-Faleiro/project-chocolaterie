export default function Card(props) {
  return (
    <div>
      <div {...props}>{props.children}</div>
    </div>
  );
}
