import React from "react";
import {connect} from "react-redux";
import {
    followSuccess,
    setCurrentPage,
    unfollowSuccess,
    toggleFollowingProgress,
    requestUsers
} from "../../redux/user-reducer";
import Users from "./Users";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/user-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.followSuccess}
                   unfollow={this.props.unfollowSuccess}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers}),
) (UsersContainer)
