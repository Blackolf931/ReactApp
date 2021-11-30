import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {setUserProfile} from "../../redux/profile-reducer";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }

        profileAPI.getProfile(userId)
            .then(data =>{
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)