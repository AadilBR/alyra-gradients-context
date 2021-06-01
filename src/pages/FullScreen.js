import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import { GradientContext } from "./../context/GradientContext"

const FullScreen = () => {

      const {gradientList} = useContext(GradientContext)

      let { id } = useParams();
    
      let list = gradientList;

      let [gradientId, setGradientId] = useState(Number(id))

      const handleNextClick = () => {
         gradientId < (list.length) ? setGradientId(Number(gradientId) + 1) : setGradientId(list.length)
      }
      const handlePrevClick = () => {
         gradientId > 0 ? setGradientId(Number(gradientId) - 1) : setGradientId(1)
      }


      console.log(list[gradientId])
      return (
        <>
          <div
            className="flex-fill d-flex min-vh-100 d-flex flex-column"
            style={{
              backgroundImage: `linear-gradient(to right, ${
                list[gradientId]?.start
              }, ${list[gradientId-1].end})`,
            }}
          >
            <nav className="fixed-top nav">
              <li className="nav-item">
                <Link className="btn btn-dark text-white nav-link me-2" to="/">
                  Tous
                </Link>
              </li>
              {gradientId > 1 && 
              <li className="nav-item">
                <Link
                  className="btn btn-dark text-white nav-link me-2"
                  to={`/gradient/${Number(gradientId)-1}`}
                  onClick={handlePrevClick}
                >
                  Précédent
                </Link>     
              </li>
               }
              {gradientId < list.length  && 
              <li className="nav-item">
                <Link
                  className="btn btn-dark text-white nav-link"
                  to={`/gradient/${Number(gradientId)+1}`}
                  onClick={handleNextClick}
                >
                  Suivant
                </Link>     
              </li>
               }
            </nav>
            <div className="m-auto text-center">
              <h1 className="text-white display-1">{list[gradientId - 1]?.name}</h1>
              <div className="bg-white shadow p-2 rounded">
                <code>
                  background-image: linear-gradient(to right,{" "}
                  {list[gradientId - 1]?.start}, {list[gradientId - 1]?.end});
                </code>
              </div>
            </div>
          </div>
        </>
      );
}

export default FullScreen
