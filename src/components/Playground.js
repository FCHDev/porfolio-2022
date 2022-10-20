import React, {useEffect} from "react";
import {portfoliodb} from "../datas/portfoliodb";
import Card from "./Card";

const Playground = () => {

    portfoliodb.sort(function (a, b) {
        return -(b.id - a.id)});

    const display =
        <div className="playground">
            {portfoliodb
                .map(
                    ({
                         name,
                         id,
                         type,
                         url,
                         git,
                         cover,
                         description,
                         api,
                         apiUrl,
                         toolsLogo,
                         toolsLogo2,
                         toolsLogo3,
                         toolsLogo4,
                     }) => (
                        <Card
                            key={id}
                            cover={cover}
                            type={type}
                            name={name}
                            url={url}
                            git={git}
                            description={description}
                            api={api}
                            apiUrl={apiUrl}
                            toolsLogo={toolsLogo}
                            toolsLogo2={toolsLogo2}
                            toolsLogo3={toolsLogo3}
                            toolsLogo4={toolsLogo4}
                        />
                    )
                )}
        </div>


    useEffect(() => {
        portfoliodb.sort(function (a, b) {
            return -(a.id - b.id);
        });
    }, [])


    return (
        <>
            {display}
        </>
    );
};

export default Playground;
