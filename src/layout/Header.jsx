import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <header className="header-container">
            <section className="header-container-oscurecer">
                <nav className="header-navegacion">
                    <Hamburger color="#FFF" toggled={isOpen} toggle={setOpen} />
                </nav>

                <section className="header-container-flex">
                    <h1 className="header-heading text-white">Transportes Martinez</h1>

                    <p className="text-white header-parrafo">Conectando destinos, entregando confianza. <span>Nuestros compromiso en cada viaje.</span></p>

                    <button className="text-white btn-consultar">Consulta ahora</button>
                </section>
                <div className="header-arrow-container">
                    <IoIosArrowDown color='#fff' size={"2.5rem"} />
                </div>
            </section>
        </header>
    )
}

export default Header