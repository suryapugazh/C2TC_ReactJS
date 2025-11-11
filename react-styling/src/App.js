import "./App.css";
import styles from "./App.module.css"; 

function App() {
  const inlineStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
      <div>
          <h1>React Styling</h1>
          <br />
          <h2 style={inlineStyle}>Inline Style</h2>
          <br />
          <h2 className="external">External Style</h2>
          <br />
          <h2 className={styles.moduleStyle}>Module Style</h2>
      </div>
  );
}

export default App;
