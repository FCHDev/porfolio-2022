import React, {useEffect} from "react";
import { portfoliodb } from "../datas/portfoliodb";
import Card from "./Card";

const Playground = () => {
  const display =
    <div className="playground">
      {portfoliodb
        .sort((a, b) => b.name - a.name)
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


  function SortArray(x, y) {
    return x.name.localeCompare(y.name);
  }
  useEffect(() => {
      portfoliodb.sort(SortArray);
  }, [])



  return (
    <>
      {display}
    </>
  );
};

export default Playground;
