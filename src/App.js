import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faChartLine, faCoins, faDollar, faSignal } from '@fortawesome/free-solid-svg-icons'
// import LinearProgress from '@mui/material/LinearProgress';

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import CircularProgress, {
//   circularProgressClasses,
//   CircularProgressProps,
// } from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

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
      <MonthlyProfits />
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
      iconColor: "var(--purple)",
      performance: "up",
      type: "count",
      linePercent:70,
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "var(--orange)",
      performance: "down",
      type: "money",
      linePercent:60,
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "var(--green)",
      performance: "down",
      type: "money",
      linePercent:50,
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "var(--blue)",
      performance: "up",
      type: "money",
      linePercent:40,
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

const CustomLinearProgress = styled(LinearProgress)(({ theme , lineColor}) => ({
  height: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "hsl(221deg 36% 91%)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: lineColor,
  },
}));


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

  // const iconStyles = {color: data.iconColor};
  return (
    <div className="summary-box-container">
      <div className="summary-box-spec">
        <p className="summary-box-text">{data.text}</p>
        {/* <FontAwesomeIcon icon={faChartLine} /> */}
        {/* <FontAwesomeIcon style={{color:"deepskyblue"}} icon={faChartLine} /> */}

        {/* <FontAwesomeIcon style={iconStyles} icon={data.icon} /> */}
        {/* why we put double {}, because we are declaring the object style. So the other {} denotes object  */}
        <FontAwesomeIcon style={{color: data.iconColor}} icon={data.icon} />
      </div>
      <h2 className="summary-box-number">
        {data.type === "money" ? "$" : null}
        {data.number}
        </h2>
        {/* <LinearProgress variant="determinate" value={progress} /> */}
        {/* <LinearProgress variant="determinate" value={50} /> */}
        <CustomLinearProgress 
          lineColor={ data.iconColor} 
          variant="determinate" 
          value={data.linePercent} 
        />
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

function PercentProgress({data}){
  // const data = {
  //   time: "This month",
  //   percent: 75,
  //   lineColor: "purple"
  // };
  return (
    <div>
      <div className="profit-box-time-container">
        <p>{data.time}</p>
        <p>{data.percent}%</p>
      </div>
      <CustomLinearProgress 
          lineColor={ data.lineColor} 
          variant="determinate" 
          value={data.percent} 
        />
    </div>
  );
}

function MonthlyProfits(){
  const profits = [
    {
      time: "This Month",
      percent: 75,
      lineColor: "var(--purple)"
    },
    {
      time: "Last Month",
      percent: 50,
      lineColor: "var(--green)"
    }
  ];
 return (
  <div className="profit-box-container">
    <h4 className="profit-box-heading">Monthly Profits</h4>
    <p className="profit-box-sub-text">Excepteur sint occaecat cupidatat non proident.</p>
    <h2 className="profit-box-number">$22,534</h2>
    <div className="percent-box-container">
      {profits.map((dt) => (
        <PercentProgress data={dt}/>
      ))}
    </div>
  </div>
 );
}

export default App;
