export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  action,
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span />
          {eyebrow}
        </div>
        <h2>
          {title} <em>{highlight}</em>
        </h2>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  );
}
