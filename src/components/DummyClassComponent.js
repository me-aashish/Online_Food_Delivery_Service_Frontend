import React from "react";

/**
 *  - React Class Life Cycle:
 *      - first constructor is called,
 *      - then the component is rendered
 *      - then the componentDidMount is called
 */

class DummyClassComponent extends React.Component {
  constructor(props) {
    super(props);

    // to create state variable such as const[count] = useState(0), do this -
    this.state = {
      count: 0,
      count2: 0,
    };

    // to set the state variable count such as const[count, "setCount"], do this -
    this.setState = {
      count: 1,
    };
  }

  // this (componentDidMount) is the best place to make API call just like useEffect(()=>{},[])
  componentDidMount() {
    //API Calls
  }

  render() {
    return (
      <div>
        <div>
          <h1>Hello From Class Component</h1>
        </div>
        // to get props we do something like -<h2>Name : {this.props.name}</h2>
        // use state variable count as - <h3>Count : {count}</h3>

        //NEVER EVER DO SOMETHING LIKE THIS -
        //NEVER EVER MUTATE STATE VARIABLE DIRECTLY AS SHOWN BELOW AND ALSO AS - setCount=1
        <button onClick={() => this.setState({ count: 1 })}></button>
      </div>
    );
  }
}

/**
 *  - we can't create class based component without render component;
 *  - this render() method returns some JSX
 *  -
 */
