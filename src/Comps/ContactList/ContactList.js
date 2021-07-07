export default function ContactList({ dBase, onDeleteContact }) {
  return (
    <ol>
      {dBase.map((el) => (
        <li key={el.id}>
          <p>
            <span>
              {el.name}: {el.number + "  "}
            </span>
            <button
              type="button"
              // className="TodoList__btn"
              onClick={() => onDeleteContact(el.id)}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ol>
  );
}
