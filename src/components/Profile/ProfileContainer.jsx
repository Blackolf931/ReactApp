import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        debugger;
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