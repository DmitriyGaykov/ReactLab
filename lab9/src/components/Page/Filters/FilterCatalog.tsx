import Filter from "./Filter";
import IFilterCatalog from "./IFilterCatalog";
import './../../../assets/sass/FilterCatalog/filter.scss';
import SearchButton from "../../Buttons/SearchButton/SearchButton";

const FilterCatalog = ({ filters } : IFilterCatalog) => {
    return (
        <div className="filter-catalog">
            { filters.map(el => <Filter img={ el.img }
                                        variables={ el.variables }/>) }

            <SearchButton context='Поиск'
                          command={ () => startFiltre() } />
        </div>
        )
}

function startFiltre() {
    const filtersTags = Array.from(document.getElementsByClassName('filter-text')) as HTMLSpanElement[];
    const filters = filtersTags.map(el => el.innerText);
}

export default FilterCatalog;