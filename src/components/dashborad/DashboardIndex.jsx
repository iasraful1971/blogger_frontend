import React from "react";
import Chart from "react-apexcharts";
import { BsFilePost, BsFillPeopleFill } from "react-icons/bs";
import {
  FaTag,
  FaUser
} from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const DashboardIndex = () => {
  const  chartOptions = {
    series :[
      {
        name: "Visitors",
        data:[
          55 , 120, 52,62,410, 152, 58, 78,984,301,10, 95.02
        ]
      }
    ],
    options:{
      color:["#181ee8", "181ee8"],
      chart:{
        background:'transparent'
      },
      dataLabels:{
        enabled:false,

      },
      stroke:{
        curve:'smooth'
      },
      xaxis:{
        categories:[
          'jan', 'feb','mars', 'aprils','may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'
        ]
      },
      legend:{
        position:"top"
      },
      grid:{
        show: 'false'
      }
    }
  }
  return (
    <div className="dashboard-main-content-elements">
      <div className="dashboard-elements">
        <div className="cards">
        <div className="single-card">
            <div className="card_icon">
              <BsFillPeopleFill />
            </div>
            <div className="card-info">
                <h2>456</h2>
                <span>Visitors</span>
            </div>
          </div>
        
          <Link to="/" className="single-card">
            <div className="card_icon">
            <BsFilePost/>
            </div>
            <div className="card-info">
                <h2>78</h2>
                <span>articles</span>
            </div>
          </Link>
          <Link to="/" className="single-card">
            <div className="card_icon">
              <RiArticleLine />
            </div>
            <div className="card-info">
                <h2>45</h2>
                <span>Categories</span>
            </div>
          </Link>
          <Link to="/" className="single-card">
            <div className="card_icon">
              <FaTag/>
            </div>
            <div className="card-info">
                <h2>96</h2>
                <span>Tags</span>
            </div>
          </Link>
          <Link to="/all-sub-admin" className="single-card">
            <div className="card_icon">
              <FaUser/>
            </div>
            <div className="card-info">
                <h2>2</h2>
                <span>Sub Admin</span>
            </div>
          </Link>
         
        </div>
        <div className="card-chart">
          <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height="100%"
          width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
