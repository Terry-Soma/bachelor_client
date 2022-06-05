import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Card,
  CardBody,
  InputGroup,
  Input,
  InputGroupAddon,
  Table,
} from 'reactstrap';
import axios from '../../../utils/axios.js';
export default function Info() {
  let location = useLocation();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get('/views/allinfo')
      .then(({ data }) => setInfo(data.data))
      .catch((err) => console.log(err));
  }, []);

  const [q, setQ] = useState('');
  const [searchParam] = useState(['h_name']);
  const handleSearch = (event) => {
    setQ(event.target.value);
  };

  return (
    <>
      <Card style={{ backgroundColor: '#f2f2f2' }}>
        {/* <CardHeader>
          {Contex.succ == true ? '-----> Мэргэжил сонгох' : ''}
        </CardHeader> */}
        <CardBody>
          <Table striped bordered hover responsive>
            <thead className="text-primary">
              <tr>
                <th className="lead fs-5 text-center">Сургуулийн нэр</th>
                <th className="lead fs-5 text-center">Хөтөлбөрийн нэр</th>
                <th className="lead fs-5 text-center">Мэргэжил</th>
                <th className="lead fs-5 text-center">Мэргэшил</th>
                <th className="lead fs-5 text-center">Босго оноо</th>
                <th className="lead fs-5 text-center">Шалгуур 1</th>
                <th className="lead fs-5 text-center">Шалгуур 2</th>
                <th className="text-right">
                  <form>
                    <InputGroup className="no-border">
                      <Input
                        sle={{ minWidth: '100px' }}
                        onChange={handleSearch}
                        placeholder="Search..."
                      />
                      <InputGroupAddon addonType="append"></InputGroupAddon>
                    </InputGroup>
                  </form>
                </th>
              </tr>
            </thead>
            <tbody>
              {info &&
                info.map(function (e, index, array) {
                  let sh2;
                  if (
                    index < info.length &&
                    array[++index]?.MergejilId === e.MergejilId
                  ) {
                    sh2 = array[index]?.shalgalt;
                  } else if (array[index - 2]?.MergejilId === e.MergejilId) {
                    return;
                  }
                  return (
                    <tr key={index}>
                      <td className="lead fs-5">{e.s_name}</td>
                      <td className="lead fs-5">{e.h_name}</td>
                      <td className="lead fs-5">{e.m_name}</td>
                      <td>
                        <div className="mergeshil lead fs-5">{e.mergeshil}</div>
                      </td>
                      <td className="lead fs-5">{e.bosgo_onoo}</td>
                      <td className="lead fs-5">{e.shalgalt}</td>

                      <td className="lead fs-5">{sh2}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}
