import React from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/Paradip';
import { useState } from 'react';
import Dropdown from '../components/dropdown';

const Paradip = () => {
  const [selected, setSelected] = useState('Choose One');
  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={20.265762}
        longitude={86.676326}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=b2526835890942fe94c3608269adaeb7"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/paradeep.csv"
      />
      <DataMap map_url="https://stupendous-toffee-fd38f4.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default Paradip;
