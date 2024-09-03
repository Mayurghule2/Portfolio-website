import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
function Loader() {
  return (
    <div>
      <CirclesWithBar
        height="200"
        width="200"
        color="#ff4545"
        outerCircleColor="#ff4545"
        innerCircleColor="#ff4545"
        barColor="#ff4545"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loader