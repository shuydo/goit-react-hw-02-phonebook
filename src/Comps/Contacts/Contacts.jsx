export default function Contacts({ dBase }) {
  // console.log(dBase);
  // console.log(dBase[0].name);

  return (
    <div>
      <h2>Contacts</h2>
      <ol>
        {dBase.map((el) => (
          <li key={el.id}>
            <p>
              {el.name}: {el.number}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
