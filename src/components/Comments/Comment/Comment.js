import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {id, name, body} = this.props.comment;

        return (
            <div>
                <div><b>id: </b>{id}</div>
                <div><b>name:</b> {name}</div>
                <div><b>body:</b> {body}</div>
                <br/>
            </div>
        );
    }
}

export {Comment};