import axios from "axios";
import {Component} from "react";
import Offices from "./Offices";

class GetOffice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchUser: {
                categoryId: '',
                categoryName: '',
                products: ''
            }
        }
        this.fetchUser = this.fetchUser.bind(this);
    }

    fetchUser() {
        axios.get('https://localhost:5001/WeatherForecast/GetAllCategories')
            .then( (response) => {
                console.log("response", response);
                this.setState({
                    fetchUser: response.data
                });
                console.log("fetchUser", this.state.fetchUser);
            })
            .catch( (error) => {
                console.log(error);
            });
    }

    render() {
        return (
<div>
            {/*<button onClick={this.fetchUser}>Search</button>*/}
            <Offices name = {this.fetchUser}/>
</div>
            /*  <div>
                  {this.fetchUser()}<Table className={s.mainTable} >
                  <tr>
                      <td>
                          OfficeName
                      </td>
                      <td>
                          Address
                      </td>
                      <td>
                          Country
                      </td>
                      {this.state.fetch.fetchUser.categoryName}
                  </tr>
              </Table>
                  </div>*/
        )
    }
} export  default GetOffice