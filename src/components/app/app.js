import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-pannel/search-pannel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/emplyers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import "./app.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Stepan S.",
          salary: 800,
          increase: false,
          id: 1,
          like: true,
        },
        {
          name: "Andriy A.",
          salary: 1000,
          increase: true,
          id: 2,
          like: false,
        },
        {
          name: "Nazar N.",
          salary: 1200,
          increase: false,
          id: 3,
          like: false,
        },
      ],
      term: '',
      filter: 'all',
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    this.setState(({ data }) => {
      let lastElement = data[data.length - 1];
      data.push({
        name: name,
        salary: salary,
        increase: false,
        like: false,
        id: lastElement.id + 1,
      });
      return {
        data: data,
      };
    });
  };

  onToggleIncrease = (id) => {
    //   this.setState(({data})=>{
    // const index  = data.findIndex(elem=>elem.id === id);
    // const old = data[index];
    // const newItem = {...old,increase: !old.increase};
    // const newArr = [...data.slice(0,index),newItem, ...data.slice(index + 1)]
    // return{
    //   data: newArr
    // }
    //   })

    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  // onToggleIncrease = (id) => {
  //   console.log(`Increase this ${id}`);
  // };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case 'like':
        return items.filter((item) => item.like);
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items
    }
  };

  onFilterSelect =(filter)=>{
   this.setState({filter});
  }

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter); 
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-pannel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter}onFilterSelect ={this.onFilterSelect}/>
        </div>
        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
