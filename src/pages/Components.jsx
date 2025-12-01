import Avatar from "../components/default/Avatar";
import Button from "../components/default/Button";
import Card from "../components/default/Card";
import Icon from "../components/custom/Icon";
import Header from "../components/custom/Header";

export default function Components() {
  return (
    <div>
      <Header />
      <Avatar />
      <Button>Texto</Button>
      <Card />
      <Icon className="fa-regular fa-user text-4xl" />
    </div>
  );
}
