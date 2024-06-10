import { useEffect } from "react"
import useApi from "../hooks/useApi"

const CharacterCard = ({character, key}) => {

    const [getCharacter, dataCharacter] = useApi()

    useEffect(() => {
        getCharacter(character)
    }, [character])

    let circleClass = "";

    if(dataCharacter?.status.toLowerCase() === 'dead'){
        circleClass = 'circle_dead'
    }else if (dataCharacter?.status.toLowerCase() === 'alive'){
        circleClass = 'circle_alive'
    }else{
        circleClass = 'circle_unknown'
    }

    return (
        <div className="character_box" key={key} >
            <div className="character_status_box">
                <div className={circleClass}></div>
                <p>{dataCharacter?.status}</p>
            </div>
            <figure>
                <img src={dataCharacter?.image} alt="Asd" />
            </figure>
            <h1>{dataCharacter?.name}</h1>
                <hr />
            <ul className="character_box_info">
                <li>
                    Especie 
                    <span>{dataCharacter?.species}</span>
                </li>
                <li>
                    Origen 
                    <span>{dataCharacter?.origin.name}</span>
                </li>
                <li>
                    Episodios donde aparece
                    <span>{dataCharacter?.episode.length}</span>
                </li>
            </ul>
        </div>
    )
}

export default CharacterCard