import React, { useState } from 'react'
import './filter.css'

function Filter( ) {

// { selected, setSelected, pokemon, data, setData } 
//     const [active, setActive] = useState(0);

//     const result = (i) => {
//     const gg = [...data];
//     setActive(i);

//     if (i === 0) {
//       setActive(i);
//       return;
//     } else if (i === 1) {
//       gg.sort(function (a, b) {
//         return (
//           a.name.toLowerCase().charCodeAt() -
//           b.name.toLowerCase().charCodeAt()
//         );
//       });
//       setData(gg);
//     } else if (i === 4) {
//       gg.sort(function (a, b) {
//         return (
//           b.name.toLowerCase().charCodeAt() -
//           a.name.toLowerCase().charCodeAt()
//         );
//       });
//     } else if (i === 2) {
//       gg.sort(function (a, b) {
//         return a.sprites.front_default - b.price;
//       });
//     } else if (i === 3) {
//       gg.sort(function (a, b) {
//         return b.sprites.front_default - a.price;
//       });
//     } 
//     setData(gg);
//     console.log(gg);
//   };


  return (
    <div>
        <div class="sort">
            <h2 class="mb-20">Сортировать по:</h2>
            <div class="sort-items">
                <p>Популярности</p>
                <p>Рейтингу</p>
                <p>Уровню силы</p>
            </div>
        </div>
    </div>
  )
}

export default Filter