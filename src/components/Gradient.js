import GradientTitle from "./GradientTitle"
import GradientPill from "./GradientPill"
import GradientCode from "./GradientCode"
import GradientTags from "./GradientTags"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { GradientContext } from "./../context/GradientContext"

const Gradient = ({ colorStart, colorEnd, name, tags, id }) => {

  const { filter } = useContext(GradientContext)
  
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags tags={tags} filter={filter} />
        <Link to={`/gradient/${id}`} className='btn btn-outline-dark w-100'>Plein écran</Link>
      </div>
    </li>
  )
}

export default Gradient
