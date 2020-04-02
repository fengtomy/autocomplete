import "./App.css";
import React, {Component} from "react";
import SearchBar from "./components/SearchBar";
import SearchPreview from "./components/SearchPreview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Andrew R. Kelly", age: 22, position: "Janitor" },
        { name: "Adrian Sanchez", age: 30, position: "Teacher" },
        { name: "Anderson Brown", age: 25, position: "Principal" },
        { name: "Anna Valio", age: 30, position: "guidance councelor" },
        { name: "Asha Mathews", age: 50, position: "Teacher" },
        { name: "Alicia keys", age: 25, position: "Librarian" },
        { name: "Alexa Dot", age: 30, position: "teacher" },
        { name: "Bob Squarepants", age: 20, position: "secretary" },
      ],
      filterForm: {
        keyword: "",
        ignoreCase: false
      },
      inputValue: ""
    };
    this.updateFieldOfFilterForm = this.updateFieldOfFilterForm.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.choosePerson = this.choosePerson.bind(this);
  }

  updateFieldOfFilterForm(key, value) {
    this.setState(prevState => ({
      filterForm: Object.assign({}, prevState.filterForm, {
        [key]: value
      })
    }));
  }

  updateInputValue(value) {
    this.setState({
      inputValue: value
    });
  }

  choosePerson(exactName) {
    this.updateInputValue(exactName);
    this.updateFieldOfFilterForm("keyword", "");
  }
  
  render() {
    const { filterForm, inputValue, data } = this.state;
    const { ignoreCase, keyword } = filterForm;
    const matchLogic = {
      ignoreCase(name, keyword) {
        return name.toLowerCase() === keyword.toLowerCase();
      },
      nonIgnoreCase(name, keyword) {
        return name === keyword;
      }
    };
    const filterData = (data, keyword, ignoreCase = false) => {
      const len = keyword.length;
      if (!len) return [];
      let matchFunc = matchLogic.nonIgnoreCase;
      if (ignoreCase) {
        matchFunc = matchLogic.ignoreCase;
      }
      return data.filter(person => matchFunc(person.name.slice(0, len), keyword));
    }
    const filteredData = filterData(data, keyword, ignoreCase);
    return (
      <div className="App">
        <SearchBar 
          ignoreCase={ignoreCase} 
          inputValue={inputValue} 
          updateField={this.updateFieldOfFilterForm}
          updateInput={this.updateInputValue}
         />
        <SearchPreview data={filteredData} choosePerson={this.choosePerson} />
      </div>
    );
  }
}

export default App;