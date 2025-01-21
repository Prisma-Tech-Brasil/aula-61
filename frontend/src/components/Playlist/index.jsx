import icarusBk from "../../assets/icarus-bk.jpeg";
import hearth from "../../assets/hearth-liked.svg";

export default function Playlist() {
  return (
    <div className="flex flex-row justify-between">
      <div className=" flex flex-row gap-2">
        <img className="rounded-2xl h-20" src={icarusBk} alt="Music icon" />
        <div>
          <h4>Música de amor nunca mais</h4>
          <h3>BK, Luccas Carlos, Nansy Silvvz, Gigantes</h3>
        </div>
      </div>
      <img className="h-5" src={hearth} alt="Like icon" />
    </div>
  );
}
