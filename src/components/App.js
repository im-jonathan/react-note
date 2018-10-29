import React, { Component } from 'react';
import Form from './Form';
import Grid from './Grid';

class App extends Component {

    constructor(props) {
        super(props);
        var notes = window.localStorage.getItem('notes');

        if (notes === null) {
            notes = []; // Creamos una nueva lista vacía
        } else {
            notes = JSON.parse(notes); // Decodificamos la cadena
        }

        this.state = {notes: notes}
    }

    render() {
        return(
            <div id="wrapper">
                <Form onSave={this.saveNote.bind(this)} />
                <Grid notes={this.state.notes} />
            </div>
        );
    }

    saveNote(note) {
        // se obtienen las notas de localstorage
        var notes = this.state.notes;

        // Insertamos la nueva nota al principio de la lista
        notes.unshift(note);

        // Actualizamos el state
        this.setState({
            notes: notes
        });

        // Codificamos la lista como cadena de texto
        notes = JSON.stringify(notes);

        // Guardamos en localStorage
        window.localStorage.setItem('notes', notes);
    }
}

export default App;