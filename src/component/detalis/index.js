import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import peole from "./peole.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function Detalis({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="detalis">
      <Heading border>Деталі властивості</Heading>

      <ListItem imageSrc={peole} className="detalis__list">
        {guests} гості
      </ListItem>
      <ListItem imageSrc={bedroom} className="detalis__list">
        {bedrooms} спальня
      </ListItem>
      <ListItem imageSrc={bed} className="detalis__list">
        {beds} ліжко
      </ListItem>
      <ListItem imageSrc={bathroom} className="detalis__list">
        {baths} ванна кімната
      </ListItem>
    </Box>
  );
}
