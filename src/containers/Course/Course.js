import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
    
    componentDidMount () {
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

    parseQueryParams () {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            // param[1] => Is the 'Value of Title' of the course because => the object 'param = [title, value]'
            console.log(param); //  To understand the choice of 'param[1]'
            if (this.state.courseTitle !== param[1]) {
                this.setState({courseTitle: param[1]});
            }
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;