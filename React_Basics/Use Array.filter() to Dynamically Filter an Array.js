//Use Array.filter() to Dynamically Filter an Array
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      };
    }
    render() {
     const usersOnline = this.state.users.filter(user => user.online === false); // change code here
      const renderOnline = usersOnline.map(user => <li key={user.username}>
        {user.username}</li>); // change code here
      
      return (
        <div>
          <h1>Current Online Users:</h1>
          <ul>{renderOnline}</ul>
        </div>
      );
    }
  }

  //OUTPUT:Current Online Users: 
  //It filters the true user only
//Jeff
//Mary
//Sara
//Laura