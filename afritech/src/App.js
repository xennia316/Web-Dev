import logo from './logo.svg';
import './App.css';
import SecondView from './secondview';
import Users from './users';
import Counter from './counter';
function App() {
    return ( 
        <div className = "App" >
            {/* <SecondView></SecondView>
            <SecondView></SecondView>

            <SecondView></SecondView> */}
            <Users></Users>
            <Counter></Counter>
        </div>
    );
}

export default App;