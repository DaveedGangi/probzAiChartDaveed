import { useState } from 'react';

import { PieChart, Pie,ResponsiveContainer,  Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid,  Legend } from 'recharts';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { CiZoomOut ,CiZoomIn} from "react-icons/ci";
import { BiReset } from "react-icons/bi";

import "./index.css";



const dataStorage=[
    {"timestamp": "2023-01-01T00:00:00Z", "value": 10 },
    { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
    {"timestamp": "2023-01-03T00:00:00Z", "value": 17 },
 
    { "timestamp": "2023-01-07T00:00:00Z", "value": 14 },
    { "timestamp": "2023-01-08T00:00:00Z", "value": 9 },
    { "timestamp": "2023-01-09T00:00:00Z", "value": 22 },
    { "timestamp": "2023-01-10T00:00:00Z", "value": 18 },
    { "timestamp": "2023-02-11T00:00:00Z", "value": 10 },
    { "timestamp": "2023-02-12T00:00:00Z", "value": 15 },
    { "timestamp": "2023-02-13T00:00:00Z", "value": 10 },
    { "timestamp": "2023-02-14T00:00:00Z", "value": 25 },
    { "timestamp": "2023-03-15T00:00:00Z", "value": 40 },
    { "timestamp": "2023-03-16T00:00:00Z", "value": 10 },
    { "timestamp": "2023-03-17T00:00:00Z", "value": 25 },
    { "timestamp": "2023-03-18T00:00:00Z", "value": 30 },
    { "timestamp": "2023-03-19T00:00:00Z", "value": 20 }




]
function Home () {

  const [data, setData] = useState(dataStorage);
  const [timePeriod, setTimePeriod] = useState('yearly');
const changeToDaily=()=>{
      setData(dataStorage.filter(item=>new Date(item.timestamp).getDate()===new Date(dataStorage[0].timestamp).getDate()));
      setTimePeriod('daily');
}


const changeToWeekly=()=>{
  setData(dataStorage.filter(item=>new Date(item.timestamp).getDay()===new Date(dataStorage[0].timestamp).getDay()));
  setTimePeriod('weekly');

}

const changeToMonthly=()=>{
    setData(dataStorage.filter(item=>new Date(item.timestamp).getMonth()===new Date(dataStorage[0].timestamp).getMonth()));
  setTimePeriod('monthly');
}

const changeToYearly=()=>{
    setData(dataStorage.filter(item=>new Date(item.timestamp).getFullYear()===new Date(dataStorage[0].timestamp).getFullYear()));
  setTimePeriod('yearly');
}





    return (

        <div className='home-container'>
            <h1 className='chart-library'>Chart Library</h1>
            <h4 className='time-period'>{timePeriod}</h4>
            <div className='buttons'>
                <button onClick={changeToDaily} className='daily'>Daily</button>
                <button onClick={changeToWeekly} className='weekly'>Weekly</button>
                <button onClick={changeToMonthly} className='monthly'>Monthly</button>
                <button onClick={changeToYearly} className='yearly'>Yearly</button>
            </div>


<div className='flexing-container'>
  
   
        <ResponsiveContainer width={"100%"} height={300}>
          <h1 className='pie-chart-heading'>Pie Chart</h1>
        <PieChart margin={12} width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>


  <br/>
       
        <div className='smaller-screens'>
          <h1 className='bar-chart-heading'>Bar Chart</h1>
<ResponsiveContainer aspect={5.5} width={"100%"} height={300}>
<TransformWrapper>

    {({ zoomIn, zoomOut, resetTransform }) => (

      <div>
        <div className='buttons'>
         <button className='zoom-in' onClick={()=>{zoomIn()}} type="button">Zoom in <CiZoomIn /></button>
         <button className='zoom-out' type="button" onClick={()=>{zoomOut()}} >Zoom out <CiZoomOut /></button>
         <button className="reset" onClick={()=>resetTransform()} type="button">Reset <BiReset /></button>

        </div>
      <TransformComponent>

   
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis dataKey="timestamp" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
    
   

      </TransformComponent>
      </div>
        )}
</TransformWrapper>

</ResponsiveContainer>
        </div>
       

        <div className='bigger-screens'>
        <h1 className='bar-chart-heading'>Bar Chart</h1>
<ResponsiveContainer  width={"100%"} height={300}>
<TransformWrapper>


{({zoomIn,zoomOut,resetTransform}) => (

  <div>
    <div className='buttons'>
    <button className='zoom-in' onClick={()=>{zoomIn()}} type="button">Zoom in <CiZoomIn marginTop={12} size={22}/></button>
    <button className="zoom-out" type="button" onClick={()=>{zoomOut()}} >Zoom out <CiZoomOut size={22} /></button>
    <button className='reset' onClick={()=>resetTransform()} type="button">Reset <BiReset size={22} /></button>
    </div>

   
      <TransformComponent>

   
        <BarChart
          width={800}
          height={330}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis dataKey="timestamp" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
    <button onClick={zoomIn} type="button">Zoom in+</button>
   <button type="button" onClick={zoomOut} >Zoom out-</button>

    </TransformComponent>

 
    </div>
)}


</TransformWrapper>

</ResponsiveContainer>

        </div>


</div>



        </div>
    )
}


export default Home;