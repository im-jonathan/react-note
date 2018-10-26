import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    render() {
        return (
            <form className={"addnote" + (this.state.open ? 'open' : '')} onFocus={this.open.bind(this)} onSubmit={this.save.bind(this)} >
                <input className="addnote-title" type="text" placeholder="Tìtulo" ref="title" />
                <textarea className="addnote-text" placeholder="Añadir Nota" ref="text" />
                <div className="addnote-toolbar">
                    <button>Hecho</button>
                    <a className="addnote-btn-list" />
                </div>
            </form>
        );
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', function(e){
            e.stopPropagation();
        });
    }

    open() {
        document.addEventListener('click', this.close.bind(this));
        this.setState({
            open: true
        });
    }

    close() {
        document.removeEventListener('click', this.close.bind(this));
        this.setState({
            open: false
        });
    }

    save(e) {
        // se gusrda un objeto con los datos del formulario.
        var note = {
            id: new Date().getTime(),
            title: this.refs.title.value,
            text: this.refs.text.value
        }
        // se obtienen las notas de localstorage
        var notes = window.localStorage.getItem('notes');

        if (notes === null) {
            notes = []; // Creamos una nueva lista vacía
        } else {
            notes = JSON.parse(notes); // Decodificamos la cadena
        }

        // Insertamos la nueva nota al principio de la lista
        notes.unshift(note);

        // Codificamos la lista como cadena de texto
        notes = JSON.stringify(notes);

        // Guardamos en localStorage
        window.localStorage.setItem('notes', notes);

        // limpiamos los imputs del formulario
        this.refs.title.value = '';
        this.refs.text.value = '';

        // cerramos el formulario
        this.close();
    }
}

export default Form;