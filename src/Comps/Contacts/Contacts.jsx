export default function Contacts({ dBase }) {
  // console.log(dBase);
  // console.log(dBase[0].name);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {dBase.map((el) => (
          <li key={el.id}>
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
