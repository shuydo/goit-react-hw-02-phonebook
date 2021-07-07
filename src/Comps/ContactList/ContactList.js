export default function ContactList({ dBase }) {
  return (
    <ol>
      {dBase.map((el) => (
        <li key={el.id}>
          <p>
            {el.name}: {el.number}
          </p>
        </li>
      ))}
    </ol>
  );
}
