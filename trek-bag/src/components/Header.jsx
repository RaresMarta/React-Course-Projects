import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ listData }) {
  return (
    <header>
      <Logo />
      <Counter listData={listData} />
    </header>
  );
}
