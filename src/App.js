import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faChartLine, faCoins, faDollar, faSignal } from '@fortawesome/free-solid-svg-icons'
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
      {/* <SummaryBox /> */}
      <SummaryBoxList />
    </div>
  );
}

function SummaryBoxList(){
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count"
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money"
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money"
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money"
    }
  ];

  return (
    <div className="summary-box-list">
      {dataList.map((dt) => (
        // <SummaryBox/>
        <SummaryBox data={dt}/>
      ))}
    </div>
  );
}
// Object destructuring
function SummaryBox({data}){
  // const data = {
  //   text:"Number Of Sales",
  //   number: 568,
  //   percent: 0.7,
  //   performance: "up",
  //   time: "Last Month",
  //   // type: "money",
  //   type: "count",
  //   icon: faChartLine,
  //   iconColor: "hsl(255deg 94% 68%)",
  // }
  return (
    <div className="summary-box-container">
      <div className="summary-box-spec">
        <p className="summary-box-text">{data.text}</p>
        {/* <FontAwesomeIcon icon={faChartLine} /> */}
        {/* <FontAwesomeIcon style={{color:"deepskyblue"}} icon={faChartLine} /> */}
        <FontAwesomeIcon style={{color: data.iconColor}} icon={data.icon} />
      </div>
      <h2 className="summary-box-number">
        {data.type === "money" ? "$" : null}
        {data.number}
        </h2>
      <div className="summary-box-time-container">
        <p>{data.time}</p>
        <p>
          <FontAwesomeIcon
            style={{
              // color: data.performance === "up" ? "green" : "red"
              color: data.performance === "up" ? "hsl(164deg 97% 40%)" : "hsl(3deg 99% 62%)"
            }} 
            icon={data.performance === "up" ? faCaretUp : faCaretDown} 
          />
          {" "}
          {data.percent}%
        </p>
      </div>
    </div>
  );
}

export default App;
