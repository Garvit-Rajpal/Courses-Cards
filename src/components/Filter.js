import React from 'react'

const Filter = (props) => {
    const data=props.data;
  return (
    <div>
        {
      data.map(
        (val)=>(
          <button
          key={val.id}>
            {val.title}
          </button>
        )

      )
}
    </div>
  )
}

export default Filter;