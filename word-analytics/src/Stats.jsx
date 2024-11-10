export default function Sats({ stats }) {
  const { characters, words } = stats;
  return (
    <section className="stats">
      <Stat number={words} label="Words" />
      <Stat number={characters} label="Characters" />
      <Stat number={280 - characters} label="Instagram" />
      <Stat number={2200 - characters} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
