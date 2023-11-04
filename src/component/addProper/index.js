import "./index.css";
import Heading from "../heading";
import Box from "../box";

export default function AddProperties({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkIn_instructions,
}) {
  return (
    <Box shadow className="addProp">
      <Heading border>Додаткові властивості</Heading>

      <strong className="add__list">Правила дому</strong>
      <div className="add">{house_rules}</div>

      <div className="add__list">Політика скасування</div>
      <div className="add">{cancellation_policy}</div>

      <div className="add__list">Місцевий транспорт</div>
      <div className="add">{local_transportation}</div>

      <div className="add__list">Мови хоста</div>
      <div className="add">{host_languages}</div>

      <div className="add__list">Спеціальні пропозиції:</div>
      <div className="add">{special_offers}</div>

      <div className="add__list">Інструкції щодо реєстрації</div>
      <div className="add">{checkIn_instructions}</div>
    </Box>
  );
}
