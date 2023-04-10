import { useContext, useEffect, useRef, useState } from "react";
import IFilter from "./IFilter";
import { DATACONTEXT } from "../../../App";

const Filter = ({ img, variables } : IFilter) => {
    const [selectedFilter, setFilter] = useState(variables.at(0));
    const [showVariables, setShowVariables] = useState(false);
    const refVacs = useRef(useContext(DATACONTEXT)?.vacations);

    const key = Math.random() % 2_000_000_000;
    let i = 0;

    return (
        <section className="filter"
                 >
            <img src={ img } alt="" onClick={ () => setShowVariables(!showVariables) }/>
            <span className="filter-text" onClick={ () => setShowVariables(!showVariables) }>
                { selectedFilter }
            </span>

            { showVariables &&
            <div className="variables">
                {
                    variables.map(el => 
                    <div className="variable">

                        <input type="radio" 
                               id={ `variable${key + i}` }
                               name={ `variable${key}` }
                               onClick={ () => setFilter(el) }/>
                        <label className="text"
                               htmlFor={ `variable${key + i++}` }>
                            { el }
                        </label>

                    </div>)
                }
            </div>
            }
        </section>
        );
}

export default Filter;