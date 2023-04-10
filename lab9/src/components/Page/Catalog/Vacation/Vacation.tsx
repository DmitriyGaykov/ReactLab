import { useEffect, useState } from "react";
import IVacation from "../../../../assets/models/IVacation";
import LanTag from "../../../Tags/LanTag/LanTag";
import { ReactComponent as Like } from './../../../../assets/image/heart.svg'
import './../../../../assets/sass/Catalog/Vacation/vacation.scss'

const Vacation = (vac : IVacation) => {
    const [like, setLike] = useState(false);

    useEffect(() => {
        
    }, [like]);

    return (
        <section className="vacation"
                 id={ vac.id.toString() }>
            <img src={ vac.img } alt="" className="logo" />

            <div className="info">
                <div className="company">{ vac.city }</div>
                <div className="name">{ vac.name }</div>
                <div className="city">{ vac.city }</div>
                <div className="lans">
                    { vac.lans.map(el => <LanTag text={ el }/>) }
                </div>
            </div>

            <div className="like-and-date">
                <Like className={ like ? "like like-active" : "like"}
                      onClick={() => setLike(!like)}/>
                <div className="date">
                    { vac.date }
                </div>
            </div>

        </section>
        )
}

export default Vacation;