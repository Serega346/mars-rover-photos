import React, {useEffect, useState} from "react"
import axios from "axios";

import {Form} from "react-bootstrap";

import {CAMERAS, REACT_APP_API_KEY} from "../../API/api";
import style from "./style.module.css"

export const SearchForm = (props) => {

    const [date, setDate] = useState("2015-05-05")
    const [camera, setCamera] = useState("Any")
    const [data, setData] = useState([])

    const listOption = CAMERAS[props.name].map((opt) => <option key={opt} value={opt[0]}
                                                                className={style.opt}>{opt[1]}</option>)

    useEffect(() => {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.name}/photos?${'earth_date=' + date}${camera !== "Any" ? '&camera=' + camera.toLowerCase() : ''}&api_key=${REACT_APP_API_KEY}`)
            .then(response => setData(response.data["photos"]))
    }, [date, camera, props.name])


    const onChangeDate = (e) => {
        setDate(e.target.value)
    }

    const onChangeCamera = (e) => {
        setCamera(e.target.value)
    }

    const renderImages = data.map((img) => {
        return (
            <div key={img["id"]} className={style.imgContainer}>
                <img src={img["img_src"]} alt="mars" className={style.marsImage}/>
                <div>
                    <p>This photo was taken on {img["sol"]} sol ({new Date(img["earth_date"]).toLocaleDateString()})
                        on {img["camera"]["full_name"]}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            <form>
                <input className={style.date} type="date" value={date} onChange={onChangeDate}/>
                <Form.Control as="select" className={style.select} onChange={onChangeCamera}>
                    <option>Any</option>
                    {listOption}
                </Form.Control>
            </form>
            <div>
                {renderImages}
            </div>
        </div>
    )

}