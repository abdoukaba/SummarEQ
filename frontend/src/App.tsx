import GHLDataSummary from "./components/GHLDataSummary";

const App = () => {
  return (
    <div style={styles.appContainer}>
      <GHLDataSummary />
    </div>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    margin: "0",
    padding: "0",
    backgroundColor: "#f4f4f4",
  },
};

export default App;