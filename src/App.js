import './App.css';
import FriendEl from './components/FriendsEl';
import Footer from './components/Footer';

function App() {
  const title = 'AMIGOS';
  const friends = [
    {name: 'Vitor', year: 2008},
    {name: 'Fabricio', year: 2013},
    {name: 'Eric', year: 2011},
    {name: 'Isaque', year: 2016},
  ];

  const change_mode = () => {
    document.querySelector('body').classList.toggle('background_2');
  };

  return (
    <div className="wrapper background_1">
      <div className="header">
        <div className="header_div_empty"></div>
        <div className="header_title">
          <h2 className="title">{title}</h2>
        </div>
        <div className="header_button">
        <button className="fa fa-lightbulb-o" onClick={change_mode}></button>
        </div>
      </div>
      <FriendEl name={friends[0].name} year={friends[0].year}></FriendEl>
      <FriendEl name={friends[1].name} year={friends[1].year}></FriendEl>
      <FriendEl name={friends[2].name} year={friends[2].year}></FriendEl>
      <FriendEl name={friends[3].name} year={friends[3].year}></FriendEl>
      <div className="footer_div">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
