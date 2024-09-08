import Main from './components/Main';
import 'normalize.css';
import '../src/style/Main.css';
import Category from './components/Category';

function App() {
  return (
    <div className='container'>
      <Category />
      <div className="content">
        <h1>Main</h1>
        <p>이곳은 메인 콘텐츠 영역입니다.</p>
      </div>
      <Main />
    </div>
  );
}

export default App;
