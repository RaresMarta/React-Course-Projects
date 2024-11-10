export default function ItemList({ items, listFunctions }) {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} listFunctions={listFunctions} />;
      })}
    </ul>
  );
}

function Item({ item, listFunctions }) {
  const { handleRemoveItem, handleToggleItem } = listFunctions;

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            handleToggleItem(item.id);
          }}
        />
        {item.name}
      </label>
      <button
        onClick={() => {
          handleRemoveItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
