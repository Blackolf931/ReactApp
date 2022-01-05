import NotInFormationAboutSocialNetwork from "../../Common/Information/NotInFormationAboutSocialNetwork";
import React from "react";


let Contacts = (props) => {
    return (
        <div>
            My Social network :
            <div>
                Facebook : {props.profile.contacts.facebook != null ? props.profile.contacts.facebook :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Website: {props.profile.contacts.website != null ? props.profile.contacts.website :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                VK: {props.profile.contacts.vk != null ? props.profile.contacts.vk :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Twitter: {props.profile.contacts.twitter != null ? props.profile.contacts.twitter :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Instagram: {props.profile.contacts.instagram != null ? props.profile.contacts.instagram :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Youtube: {props.profile.contacts.youtube != null ? props.profile.contacts.youtube :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                Github: {props.profile.contacts.github != null ? props.profile.contacts.github :
                <NotInFormationAboutSocialNetwork/>}
            </div>
            <div>
                MainLink: {props.profile.contacts.mainLink != null ? props.profile.contacts.mainLink :
                <NotInFormationAboutSocialNetwork/>}
            </div>
        </div>
    )
}
export default Contacts