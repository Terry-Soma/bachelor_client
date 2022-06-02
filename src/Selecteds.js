import { useEffect, useState } from 'react';
import axios from 'axios';
import Contex from './context';
import { Button } from 'reactstrap';

export default function Selecteds() {
  const [classes, setClasses] = useState('Maj-see');
  const [data, setData] = useState([]);
  const handleClick = () => {
    // var config3 = {
    //   method: "get",
    //   url: `https://ikhzasag-backend.herokuapp.com/api/v1/elsegch/${Contex.bt}/mergejil`,
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };
    // axios(config3)
    //   .then(function (response) {
    //     setData(response.data.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    if (classes === 'Maj-see') {
      setClasses('Maj');
    } else {
      setClasses('Maj-see');
    }
  };
  console.log(Contex.bt);
  if (Contex.bt === '0') {
    return null;
  }
  const wot = (
    <>
      {console.log('data')}
      <Button onClick={handleClick}>Таны сонгосон мэргэжилүүд</Button>
      <div>
        {data.map((e) => {
          console.log(e);
          return <div>{e.MergejilName}</div>;
        })}
      </div>
    </>
  );

  return <>{!data[0] ? '' : wot}</>;
}
