type textProps = {
  number: number;
  tipo: "words" | "characters" | "instagram" | "facebook";
};
function Stat({ number, tipo }: textProps) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2
        className={`second-heading ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {tipo}
      </h2>
    </section>
  );
}

export default Stat;
