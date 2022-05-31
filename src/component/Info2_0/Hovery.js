import { useHistory } from "react-router-dom";
import { RocketFilled, ReadFilled, MehFilled } from "@ant-design/icons";

function Hovery(props) {
  let history = useHistory();

  function goTo() {
    history.push(props.rinko);
  }

  return (
    <div className="Hovery">
      <RocketFilled style={{ fontSize: "2rem" }} />
      <button onClick={goTo}>{props.wot}</button>
    </div>
  );
}
export default Hovery;
