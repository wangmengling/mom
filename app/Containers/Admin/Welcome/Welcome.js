import React,{Component} from 'react';
import IconContentButton from '../../../Components/IconContentButton'
import {Bar,Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#bfc2cd',
      borderColor: '#bfc2cd',
      borderWidth: 1,
      radius: 50,
      hoverRadius:5,
      hoverBackgroundColor: '#FF6C60',
      hoverBorderColor: '#FF6C60',
      data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const dataLine = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


import './Welcome.scss'
export default class Welcome extends Component {
    render(){
        return(
            <div className='WelcomeContent'>
                <div className='ContentTop'>
                    <div>
                        <IconContentButton 
                            name="新增用户"
                            number='3124'
                            color='#6ccac9'
                        />
                    </div>
                    <div>
                        <IconContentButton 
                            name="New Order"
                            number='644'
                            color='#ff6c60'
                        />
                    </div>
                    <div>
                        <IconContentButton 
                            name="Sales"
                            number='328'
                            color='#f8d347'
                        />
                    </div>
                    <div>
                        <IconContentButton 
                            name="Total Orders"
                            number='64562'
                            color='#57c8f2'
                        />
                    </div>
                    
                </div>
                <div className='Chart'>
                    <div className='ChartLeft'>
                        <Bar
                            data={data}
                            width={30}
                            height={350}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}