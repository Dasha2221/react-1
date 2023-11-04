import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import pool from "./pool.svg";
import gym from "./gym.svg";
import freeBreakfast from "./freeBreakfast.svg";
import freeWiFi from "./freeWiFi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import airoport from "./airoport.svg";
import concierge from "./concierge.svg";
import roomServis from "./roomServis.svg";
import children from "./children.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>

      {hasPool && (
        <ListItem imageSrc={pool} className="amenities__list">
          Басейн
        </ListItem>
      )}

      {hasGym && (
        <ListItem imageSrc={gym} className="amenities__list">
          Спортивний зал
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc={freeBreakfast} className="amenities__list">
          Безкоштовний сніданок
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc={freeWiFi} className="amenities__list">
          Безкоштовний Wi-Fi
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc={parking} className="amenities__list">
          Безкоштовний вуличний паркінг
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={pets} className="amenities__list">
          Дозволено розміщення з домашніми тваринами
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={airoport} className="amenities__list">
          Трансфер до/з аеропорту
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={concierge} className="amenities__list">
          Консьєрж-сервіс
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={roomServis} className="amenities__list">
          Обслуговування номерів
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={children} className="amenities__list">
          Підходить для дітей
        </ListItem>
      )}
    </Box>
  );
}
