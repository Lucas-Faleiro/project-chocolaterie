import Avatar from "../components/default/Avatar";
import Button from "../components/default/Button";
import Card from "../components/default/Card";
import SearchBar from "../components/default/SearchBar";
import Icon from "../components/custom/Icon";
import Header from "../components/custom/Header";

export default function Components() {
  return (
    <div>
      <Header />
      <Avatar />
      <Button>Texto</Button>
      <Card />
      <SearchBar />
      <Icon className="fa-regular fa-user text-4xl" />
    </div>
  );
}
