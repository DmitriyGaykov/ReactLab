import './../../assets/sass/header.scss';
import logo from './../../assets/image/logo.svg';
import MenuLink from './../Links/MenuLink/MenuLink';
import { useContext, useEffect, useRef, useState } from 'react';
import pointsMenu from './pointsMenu';
import IMenuLink from '../Links/MenuLink/IMenuLink';

const Header = () => {
    const [burger, setBurger] = useState(false);
    const [burgerMenu, setShowBurgerMenu] = useState(false);
    const [points, setPoints] = useState(pointsMenu);
    const [selectedPoint, setSelectedPoint] = useState<IMenuLink>();

    useEffect(() => {
        if(!burger) {
            setShowBurgerMenu(false);
        }
    }, [burger]);

    useEffect(() => {
        setPoints(points.map((el, i) => {

            if(el.active === undefined && i === 0) {
                el.active = true;
            } else {
                el.active = el.text === selectedPoint?.text && 
                            el.href === selectedPoint?.href;
            }

            return el;
        }));

        const cookie = "last-page:" + selectedPoint?.href + ";";
        document.cookie = cookie;
    }, [selectedPoint]);

    useEffect(() => setBurger(window.innerWidth < 650), []);

    document.onload = window.onresize = () => {
        setBurger(window.innerWidth < 650);
    };

    let i = 0;

    return (
        <header className="site-header">

            <img src={ logo }
                 className="logo"
                 alt="Logo"/>

            { !burger ?
            <>
                { points.map(el => <MenuLink text={ el.text }
                                             href={ el.href }
                                             active={ el.active }
                                             onClick={ () => setSelectedPoint(el) }
                                             key={el.text}/>) }
            </>
            : 
            <>
              <div className={ burgerMenu ? "burger burger-active" : 'burger'}
                   onClick={ () => setShowBurgerMenu(!burgerMenu) }>
                <span></span>
                <span></span>
                <span></span>
              </div>

              { burger &&
              <div className={ burgerMenu ? "burger-menu burger-menu-active" : "burger-menu" }>
                { points.map(el => <MenuLink text={ el.text }
                                             href={ el.href }
                                             key={el.text}
                                             active={ el.active }
                                             onClick={ () => setSelectedPoint(el) }/>)  }
              </div>
              }
            </>
            }
        </header> 
        )
}

export default Header;