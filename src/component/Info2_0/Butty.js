import { useHistory } from "react-router-dom";
var imeg = { imgLink: "", Name: "" };
function Butty(props) {
  let history = useHistory();

  function goTo() {
    history.push(props.rink);
  }
  switch (props.id) {
    case 2:
      imeg = {
        imgLink: "https://i.ibb.co/M58Bw58/img2.png",
        Name: props.namae,
      };
      break;
    case 3:
      imeg = {
        imgLink: "https://i.ibb.co/ymzsP73/img1.png",
        Name: props.namae,
      };
      break;
    case 4:
      imeg = {
        imgLink: "https://i.ibb.co/M58Bw58/img2.png",
        Name: props.namae,
      };
      break;
    case 5:
      imeg = {
        imgLink: "https://i.ibb.co/ymzsP73/img1.png",
        Name: props.namae,
      };
      break;
    case 6:
      imeg = {
        imgLink: "https://i.ibb.co/M58Bw58/img2.png",
        Name: props.namae,
      };
      break;
    case 7:
      imeg = {
        imgLink: "https://i.ibb.co/ymzsP73/img1.png",
        Name: props.namae,
      };
      break;
    case 8:
      imeg = {
        imgLink: "https://i.ibb.co/M58Bw58/img2.png",
        Name: props.namae,
      };
      break;
    case 9:
      imeg = {
        imgLink: "https://i.ibb.co/ymzsP73/img1.png",
        Name: props.namae,
      };
      break;
    case 10:
      imeg = {
        imgLink: "https://i.ibb.co/M58Bw58/img2.png",
        Name: props.namae,
      };
      break;
    case 11:
      imeg = {
        imgLink: "https://i.ibb.co/ymzsP73/img1.png",
        Name: props.namae,
      };
      break;
    default:
      imeg = {
        imgLink: "https://i.ibb.co/ymzsP73/img1.png",
        Name: props.namae,
      };
      break;
  }
  return (
    <button onClick={goTo} className="Butty">
      <img className="icun" src={imeg.imgLink} />
      {console.log(imeg.imgLink)}
      <br />
      {/* <img src="https://i.ibb.co/ymzsP73/img1.png"/> */}
      {imeg.Name}
    </button>
  );
}
export default Butty;
