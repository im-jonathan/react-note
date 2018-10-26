import React, { Component } from 'react';
import Note from './Note';

class Grid extends Component {

    constructor(props) {
        super(props);
        
        var notes = window.localStorage.getItem('notes');
        if (notes === null) {
            notes = [];
        } else {
            notes = JSON.parse(notes);
        }

        this.state = {notes:notes}
    }

    render() {
        var notes = this.state.notes.map(function(note, idx) {
            return (
                <Note id={note.id} title={note.title} text={note.text} key={idx} />
            );
        })

        return (
            <div className="grid">
                {notes}
            </div>
        );
    }
}

export default Grid;