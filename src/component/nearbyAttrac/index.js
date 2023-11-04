import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function NearbyAttractions({ list }) {
  return (
    <Box>
      <div className="neardy__block">
        <Heading border>Пам'ятки поблизу</Heading>

        <div className="neardy__list">
          {list.map(({ id, ...rest }) => (
            <Fragment key={id}>
              <Item {...rest} />
            </Fragment>
          ))}
        </div>
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <a className=" nearby" href={link}>
      {name}
    </a>
  );
}
