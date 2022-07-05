import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import loading from "../../assets/images/loading.jpg";

export default function FavoriteItem(props) {
    const [base64, setBase64] = React.useState("");

    useEffect(() => {
        if (props.anime.poster_url) {
            fetch(`${process.env.REACT_APP_BASEURL}/convert-image-url-to-base64`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: props.anime.poster_url,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setBase64(data.image);
                })
                .catch((err) => console.log(err));
        }
    }, [props.anime.poster_url]);

    return (
        <div key={props.anime.id}>
            <Link to={`/anime-info/${props.id_name}`}>
                <div className="hover:scale-110  relative flex justify-center items-center transition duration-300 hover:text-white">
                    <img
                        className="mx-auto h-60 w-48 object-cover hover:opacity-90 transition duration-300 opacity-70 border-[3px] shadow rounded-md border-white"
                        src={base64 ? `data:image/png;base64,${base64}` : loading}
                        alt={props.anime.anime}
                    />
                    <button className="absolute">
                        <i className="bi bi-play-circle-fill text-4xl shadow-lg opacity-80 text-white"></i>
                    </button>
                </div>
            </Link>
            <h2 className="py-4 text-center font-semibold">
                {props.anime.anime.replace(/-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
            </h2>
        </div>
    );
}
