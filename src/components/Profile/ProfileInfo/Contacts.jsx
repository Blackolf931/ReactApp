import NotInFormationAboutSocialNetwork from "../../Common/Information/NotInFormationAboutSocialNetwork";
import React from "react";


let Contacts = (props) => {
    debugger;
    return (
        <div>
            My Social network :
            <div>
                Facebook : {props.profile.data.contacts.facebook != null ? props.profile.data.contacts.facebook :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Website: {props.profile.data.contacts.website != null ? props.profile.data.contacts.website :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                VK: {props.profile.data.contacts.vk != null ? props.profile.data.contacts.vk :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Twitter: {props.profile.data.contacts.twitter != null ? props.profile.data.contacts.twitter :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Instagram: {props.profile.data.contacts.instagram != null ? props.profile.data.contacts.instagram :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Youtube: {props.profile.data.contacts.youtube != null ? props.profile.data.contacts.youtube :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Gihub: {props.profile.data.contacts.github != null ? props.profile.data.contacts.github :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                MainLink: {props.profile.data.contacts.mainLink != null ? props.profile.data.contacts.mainLink :
                <NotInFormationAboutSocialNetwork/>}
            </div>
        </div>
    )
}
export default Contacts