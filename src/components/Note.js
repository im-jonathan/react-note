import React, { Component } from 'react';
import ReactDOM from 'react-dom';


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

    setPosition(top, column) {
        var element = ReactDOM.findDOMNode(this);
        element.style.top = top + 'px';
        element.style.left = (column * 25) + '%';
    }

    getHeight() {
        var element = ReactDOM.findDOMNode(this);
        var computedStyle = window.getComputedStyle(element);
        var height = computedStyle.getPropertyValue('height');
        return parseInt(height);
    }

}

export default Note;