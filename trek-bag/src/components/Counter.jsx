export default function Counter({ listData }) {
  const { itemsNr, checkedItemsNr } = listData;
  return (
    <p>
      <b>{checkedItemsNr}</b> / {itemsNr} items packed
    </p>
  );
}
