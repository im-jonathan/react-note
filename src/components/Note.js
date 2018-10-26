import React, { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div className="note">
                <div className="note-text">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text}</p>
                </div>
                <div className="note-toolbar">
                    <a className="note-btn-delete" />
                </div>
            </div>
        );
    }
}

export default Note;