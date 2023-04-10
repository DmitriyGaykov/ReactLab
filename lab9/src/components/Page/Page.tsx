import { useEffect } from "react";
import IVacation from "../../assets/models/IVacation";
import Catalog from "./Catalog/Catalog";
import FilterCatalog from "./Filters/FilterCatalog";
import IFilter from "./Filters/IFilter";
import IPage from "./IPage";

const Page = (props : IPage) => {
    return (
        <div className="page">
            { props.filters === undefined || <FilterCatalog filters={ props.filters as IFilter[] }/> }
            <Catalog vacs={props.vacations as IVacation[]}/>
        </div>
        )
}

export default Page;