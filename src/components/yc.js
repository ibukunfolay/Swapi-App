import React from "react";

const sortTypes = {
  up: {
    class: "sort-up",
    fn: (a, b) => {
      return a.name > b.name ? 1 : -1;
    },
  },
  down: {
    class: "sort-down",
    fn: (a, b) => {
      return a.name < b.name ? 1 : -1;
    },
  },
  default: {
    class: "sort",
    fn: (a, b) => a,
  },
};

class Table extends React.Component {
  state = {
    currentSort: "default",
  };

  onSortChange = () => {
    const { currentSort } = this.state;
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    this.setState({
      currentSort: nextSort,
    });
  };

  render() {
    const { data } = this.props;
    const { search } = this.props;
    const { currentSort } = this.state;
    console.log(data);

    let sum = data.reduce(function (prev, current) {
      return prev + +current.height;
    }, 0);
    console.log(sum);

    function toFeet(n) {
      var realFeet = (n * 0.3937) / 12;
      var feet = Math.floor(realFeet);
      var inches = Math.round((realFeet - feet) * 12);
      return feet + "ft" + inches + "in";
    }

    const tap = toFeet(sum);

    return (
      data.length > 0 && (
        <div>
          <table className="text-left">
            <thead>
              <tr>
                <th onClick={this.onSortChange}>Name</th>
                <th>Gender</th>
                <th>Height</th>
              </tr>
            </thead>
            <tbody>
              {[...data]
                .sort(sortTypes[currentSort].fn)
                .filter((item) => {
                  if (search === "") {
                    return item.gender;
                  } else if (
                    item.gender.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item.gender;
                  }
                })
                .map((p) => (
                  <tr>
                    <td>{p.name}</td>
                    {p.gender === "female" ? (
                      <td>F</td>
                    ) : p.gender === "male" ? (
                      <td>M</td>
                    ) : (
                      <td>N/A</td>
                    )}
                    <td>{p.height}</td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td>Total characters: {data.length}</td>
                <td>N/A</td>
                <td>
                  {sum}cm / {tap}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    );
  }
}

export default Table;
