import Button from "../custom/Button";

export default function Card(props) {
  return (
    <div {...props}>
      <img
        className="rounded-lg max-h-[350px] object-cover"
        src={`/images/${props.chocolateimg}`}
        alt={props.chocolateName}
      />
      <div className="flex flex-col items-center justify-center p-2 gap-1 grow">
        <div className="font-bold">{props.chocolatename} </div>
        <div>R${props.chocolateprice}</div>
        <Button
          type="button"
          className="bg-bg-header text-pink-200 shadow cursor-pointer hover:bg-pink-400 hover:text-white px-4 py-2 rounded-full"
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
