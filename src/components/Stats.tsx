import { FACEBOOK_LIMIT, INSTAGRAM_LIMIT } from "../lib/constatnts";
import Stat from "./Stat";
type StatsProps = {
  charactersCount: number;
  wordsCount: number;
};
function Stats({ charactersCount, wordsCount }: StatsProps) {
  return (
    <section className="stats">
      <Stat number={wordsCount} tipo="words" />
      <Stat number={charactersCount} tipo="characters" />
      <Stat number={INSTAGRAM_LIMIT - charactersCount} tipo="instagram" />
      <Stat number={FACEBOOK_LIMIT - charactersCount} tipo="facebook" />
    </section>
  );
}

export default Stats;
