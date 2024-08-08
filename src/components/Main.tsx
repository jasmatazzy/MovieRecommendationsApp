import React, {useState} from 'react'

const Main = (): JSX.Element  => {
  const [puhleez, setPuhleez] = useState(6)
  return (
    <div>I'm the "main" page 😏 {puhleez}</div>
  )
}

export default Main