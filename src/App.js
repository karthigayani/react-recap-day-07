import './App.css';

function App() {
  // ---- js starts here ----

  // ---- js ends here ----
  return (
    // ---- jsx starts here ----
    <div className="App">
      {/* component call */}
      <Dashboard />
    </div>
    // ---- jsx endss here ----
  );
}

// component declaration
function Dashboard(){
  return (
    <div>
      <h1>Welcome to Dashlead 🎉🎊✨</h1>
      <SummaryBox />
    </div>
  );
}

function SummaryBox(){
  const data = {
    text:"Number Of Sales",
    number: 568,
    percent: 0.7,
    performance: "up",
    time: "Last Month",
    // type: "money",
    type: "number",
  }
  return (
    <div className="summary-box-container">
      <p className="summary-box-text">{data.text}</p>
      <h2 className="summary-box-number">
        {data.type === "money" ? "$" : null}
        {data.number}
        </h2>
      <div className="summary-box-time-container">
        <p>{data.time}</p>
        <p>{data.percent}%</p>
      </div>
    </div>
  );
}

export default App;
