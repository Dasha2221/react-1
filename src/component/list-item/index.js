import "./index.css";

export default function ListItem({ children, imageSrc, title }) {
  return (
    <li className="list-item">
      {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}
      <div className="list-item__block">
        {title && <stong className="list-item__title">{title}</stong>}
        <div className="list-item__content">{children}</div>
      </div>
    </li>
  );
}
