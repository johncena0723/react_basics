
//Add Inline Styles in React

const styles= {
    color: 'purple',
    fontSize: 25,
    border: '2px solid pixel',
  
    
    };
    // Change code above this line
  class Colorful extends React.Component {
    render() {
      // Change code below this line
      return (
        <div style={styles}>Style Me!</div>
      );
      // Change code above this line
    }
  };

  //OUTPUT: Style ME! shown as Purple Color