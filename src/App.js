import React from "react";
// import { v4 as uuid } from "uuid";
import { nanoid } from "nanoid";

import Form from "./Comps/Form/Form";
import Contacts from "./Comps/Contacts/Contacts";
import Filter from "./Comps/Filter";

export default class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rousie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermeone Kline", number: "443-89-12" },
      { id: "id-3", name: "Eaden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  appendDBase = (data) => {
    this.setState((pState) => ({
      contacts: [
        ...pState.contacts,
        {
          id: nanoid(10),
          ...data,
        },
      ],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    // console.log("---", this.state.contacts);
    const filterLowerC = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterLowerC)
    );
    console.log(filterContacts);

    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.appendDBase} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        {/* <Contacts dBase={this.state.contacts} /> */}
        <Contacts dBase={filterContacts} />
      </>
    );
  }
}
