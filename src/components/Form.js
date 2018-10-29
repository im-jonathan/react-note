import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    render () {
        return(
            <form className={"addnote" + (this.state.open ? 'open' : '')} onFocus={this.open.bind(this)} onSubmit={this.save.bind(this)} >
                <input className="addnote-title" type="text" placeholder="Título" ref="title" />
                <textarea className="addnote-text" placeholder="Añadir Nota" ref="text" />
                <div className="addnote-toolbar">
                    <button>Guardar</button>
                    <a className="addnote-btn-list" />
                </div>
            </form>
        );
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', function(e) {
            e.stopPropagation();
        })
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
        // se evita que la pagina se recargue
        e.preventDefault();

        // se gusrda un objeto con los datos del formulario.
        var note = {
            id: new Date().getTime(),
            title: this.refs.title.value,
            text: this.refs.text.value
        }

        // se envia los datos de la nota para que los guarde el viewController
        this.props.onSave(note);

        // limpiamos los imputs del formulario
        this.refs.title.value = '';
        this.refs.text.value = '';

        // cerramos el formulario
        this.close();
    }
}

export default Form;