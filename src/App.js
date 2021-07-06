import React from "react";
// import { v4 as uuid } from "uuid";
import { nanoid } from "nanoid";

import Form from "./Comps/Form/Form";
import Contacts from "./Comps/Contacts/Contacts";

export default class App extends React.Component {
  state = {
    contacts: [],
  };

  appDBase = (data) => {
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

  render() {
    console.log("---", this.state.contacts);
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.appDBase} />
        <Contacts dBase={this.state.contacts} />
      </>
    );
  }
}
