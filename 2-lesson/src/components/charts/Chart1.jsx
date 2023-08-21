import React from 'react';
import piechart from '../../assets/images/piechart.jpg'

const Chart1 = () => {
    return (
        <div className="chart1-wrapper">
            <h2>Boshqaruv</h2>
            <div className="chart">
                <p>O’quvchilar oqimi</p>
                <img src={piechart} alt="" />
                <div className="absence">
                    <div className="absence-count">
                        <div className="rectangle"></div>
                        <p>Kelmaganlar</p>
                    </div>
                    <span>66 ta</span>
                </div>
                <div className="absence">
                    <div className="absence-count">
                        <div className="rectangle"></div>
                        <p>Kelganlar</p>
                    </div>
                    <span>129 ta</span>
                </div>
            </div>
        </div>
    )
}

export default Chart1