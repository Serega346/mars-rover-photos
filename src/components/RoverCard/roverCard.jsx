import React, {useEffect, useState} from "react";
import axios from 'axios';

import {REACT_APP_API_KEY} from "../../API/api";
import style from "./style.module.css";

export const RoverCard = (props) => {

    const [missionInfo, setMissionInfo] = useState({})

    useEffect(() => {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${props.name}?api_key=${REACT_APP_API_KEY}`)
            .then(response => setMissionInfo(response.data["photo_manifest"]));
    }, [props.name]);

    return (
        <div className={style.roverInfo}>
            <img src={`${props.name}.jpg`} alt={props.name} className={style.roverImage}/>
            <div>
                <div className={style.item}>Status<span>{missionInfo.status}</span></div>
                <div className={style.item}>Launch
                    date<span>{new Date(missionInfo["launch_date"]).toLocaleDateString()}</span></div>
                <div className={style.item}>Landing
                    date<span>{new Date(missionInfo["landing_date"]).toLocaleDateString()}</span></div>
                <div className={style.item}>Max
                    date<span>{new Date(missionInfo["max_date"]).toLocaleDateString()}</span></div>
                <div className={style.item}>Total photos<span>{missionInfo["total_photos"]}</span></div>
            </div>
        </div>
    )

}