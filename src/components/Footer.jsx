import Icon from "./Icon"
import {RiFacebookCircleLine, RiInstagramLine} from "react-icons/ri"
import {TiSocialTwitterCircular} from "react-icons/ti"

export default function Footer(){
    return(
        <div className="text-terciary bg-secondary">
            <div className="flex flex-wrap items-center text-base justify-center">
            <ul className="container mx-auto flex flex-wrap p-5 flex-col items-center flex-1">
                <div className="p-5 font-bold">APOIOS</div>
                <li>SONANGOL INTERNACIONAL</li>
                <li>SAMSUMG CORPORÇÁO</li>
                <li>TECNO</li>
                <li>ENDIAMA</li>
                <li>GOVERNO DE ANGOLA</li>
            </ul>
            <ul className="container mx-auto flex flex-wrap p-5 flex-col items-center flex-1">
                <div className="p-5 font-bold">PARCEIROS</div>
                <li>CAIXA ANGOLA</li>
                <li>NOVO HAMBIENTE</li>
                <li>GUINER</li>
                <li>TOTAL ENERGY</li>
                <li>JORNAL DE ANGOLA</li>
            </ul>
            <ul className="container mx-auto flex flex-wrap p-5 flex-col items-center flex-1">
                <div className="p-5 font-bold">OBJECTIVOS</div>
                <li>DESENVOLVIMENTO PESSOAL</li>
                <li>CONSTRUIR PROJECTOS</li>
                <li>ACOMPANHAMENTO</li>
                <li>CONSULTORIA</li>
                <li>CRIATIVIDADE</li>
            </ul>
            </div>
            <div className="p-5">
                <div  className="flex flex-wrap items-center text-base justify-center">
                    <Icon icon={<RiFacebookCircleLine size="50"/>} className="p-3"/>
                    <Icon icon={<TiSocialTwitterCircular size="85" className="p-3"/>}/>
                    <Icon icon={<RiInstagramLine size="50"/>} className="p-3"/>
                </div>
                <p className="container mx-auto flex flex-wrap p-1 flex-col items-center flex-1">Metasolutions Oficial @Copyright 2023</p>
            </div>
        </div>
    )
}