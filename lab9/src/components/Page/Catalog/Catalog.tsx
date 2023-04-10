import IVacation from "../../../assets/models/IVacation";
import Vacation from "./Vacation/Vacation";
import './../../../assets/sass/Catalog/catalog.scss';

const Catalog = ({ vacs } : { vacs : IVacation[] } ) => {
    return (
        <div className="catalog">
            { vacs?.map(el => <Vacation id={el.id}
                                       name={el.name}
                                       city={el.city}
                                       lans={el.lans}
                                       img={el.img}
                                       date={el.date}
                                       company={el.company}/>) }
        </div>
        )
}
export default Catalog;