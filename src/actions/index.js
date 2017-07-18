import axios from 'axios'

export function fetchProfile() {

  return function(dispatch) {
    dispatch({type: "ASYNC_START"});

    setTimeout(function(){
      axios.get("https://randomuser.me/api/").then( response => {
        let user = response.data.results[0];
        let firstName = user.name.first;
        let picture = user.picture.large;

        dispatch({type: "FETCH_PROFILE", payload: { firstName, picture } });
      });
    }, 1000);
  }
}
