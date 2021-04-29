
import './index.css';

function App() {
  return (
    <div className='container'>
      <aside></aside>
      <header>
        <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', alignSelf:'center', height:'100%',margin: '0 12px'}}>
          <div style={{flexGrow: 1, textAlign:'center'}}><span style={{color: "white"}}>Left</span></div>
          <div  style={{flexGrow: 5, textAlign:'center'}}><span style={{color: "white"}}>Middle</span></div>
          <div  style={{flexGrow: 2, textAlign:'center'}}><span style={{color: "white"}}>Right</span></div>
        </div>
      </header>
      <section></section>
      <section></section>
      <section></section>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
