import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {id, title, body} = this.props.post;
        return (
            <div>
                <div><b>id: </b>{id}</div>
                <div><b>title: </b>{title}</div>
                <div><b>body: </b>{body}</div>
                <br/>
            </div>
        );
    }
}

export {Post};