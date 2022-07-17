import React, { useState } from 'react'
import './Sort.css'

function Sort( value, onChangeSort ) {
  const [open, setOpen] = useState(false)
  const list = [
    {name: 'Популярности', sortProperty: 'order'},
    {name: 'Рейтингу', sortProperty: 'id'},
    {name: 'Уровню силы', sortProperty: 'name'}
  ]


  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  }

  return (
    <div>
        <div class="sort">
            <h2 class="mb-20">Сортировать по:</h2>
            <div class="sort-items">
            {list.map((obj, i) => (
              <p 
              key={i}
              onClick={() => onClickListItem(obj)}
              className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </p>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Sort