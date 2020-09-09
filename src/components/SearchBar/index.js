import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // this.onChangeValue = this.onChangeValue.bind(this);
    this.state = { activeState: false, inputState: "" };
    this.wrapperRef = React.createRef();
    //  this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  handleClick(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      console.log(this.state.activeState);
      this.setState({ activeState: false });
    } else {
      this.setState({ activeState: true });
    }
  }

  //   const body = document.querySelector('body');
  // const searchBtn = document.querySelector('#search');
  // const searchInput = document.querySelector('#search-input');
  // let active = false;

  // body.addEventListener('click', (e) => {
  //   if(e.target.id === 'search' || e.target.id === 'search-input' || e.target.id === 'search-icon') {
  //     if(!active) {
  //       searchBtn.classList.add('active');
  //       searchInput.classList.add('active');
  //       active = true;
  //     }
  //   } else {
  //       searchBtn.classList.remove('active');
  //       searchInput.classList.remove('active');
  //       searchInput.value = '';
  //       active = false;
  //   }
  // });

  // sendData() {
  //   // GET artist data object from backend api
  //   fetch(`${"API_URL"}/${"artist_id"}`, {
  //     method: "GET",
  //   //   body: data,
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         // TODO: error handling
  //       }
  //     })
  //     .then((json) => {
  //       // TODO: Get artist data object
  //       // reset state
  //       this.resetState();
  //     })
  //     .catch((err) => {
  //       // TODO: error handling
  //       console.log(err.message);
  //     });
  // }

  render() {
    const { history, location } = this.props;
    return (
      <div className="searchbar" ref={this.wrapperRef}>
        <div id="search" className={this.state.activeState ? "active" : ""}>
          <FontAwesomeIcon icon={faSearch} id="search-icon" />
          <form
            onSubmit={() => {
              // this.sendData();
              history.push(`${location.pathname}/${this.state.inputState}`);
            }}
          >
            <input
              type="text"
              id="search-input"
              name="search"
              autoComplete="off"
              className={this.state.activeState ? "active" : ""}
              value={this.state.inputState}
              onChange={(e) =>
                this.setState({
                  inputState: e.target.value,
                })
              }
            />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
