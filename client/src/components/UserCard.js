import React, { Component } from 'react';


class UserCard extends Component {
    render() {
        const user = this.props.user;
        const renderGreeting = this.props.renderGreeting ? this.props.renderGreeting : false;
        const renderEdit = this.props.renderEdit ? this.props.renderEdit : false;
        return (
            <div className="card">
                <div className="card-body">
                    {renderGreeting ? (
                        <h5 className="card-title">Hi {user.username}!</h5>)
                        : (
                            <h5 className="card-title">{user.username}</h5>
                        )}

                    <p className="card-text">Email: <a href={`mailto:${user.email}`}>{user.email}</a> </p>
                    <p className="card-text">Organization: {user.organization}</p>
                    <p className="card-text">Location: {user.location}</p>
                    <p className="card-text">Interests: {user.interest.interestOption}</p>
                    <p className="card-text">Profession: {user.profession.professionOption}</p>
                    {renderEdit && (
                        <a href="#" className="btn btn-primary">
                            Edit profile
                        </a>)}
                </div>
            </div>
        )
    }
}

export default UserCard;