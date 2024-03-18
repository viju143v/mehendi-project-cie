import React from 'react';
import './App.css';
import { IoFilterSharp } from 'react-icons/io5';
import { Tabs } from 'antd';
import { DatabaseFilled ,UserOutlined, EnvironmentOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;

const PastEvents = () => {
  return (

<div>
    <div className='past'>
      <h4 id="text">Past Events</h4>
      <div className="icon">
        <IoFilterSharp />
        Filters
      </div>
    </div>
    
    
    
      <div>
        <div className="content-box">
          <p className='AnyUpdate'>Any Update</p>
        </div>
        <div className='detail'>
        <div className='details'>
          <b>Competition Name</b>
    
        <div>
          <p> Lerem lpsum is simply dummy text of the printing and typesetting industry.Lorem lpsum has</p>
          <p> been the industry's standard</p>
          <div>
            <DatabaseFilled className='icon2'/>
            <b>Start Date:</b><p className='startdate1'>Start Date:Sat,19th March 22</p>
          </div>
          <div className='reg'>
            <UserOutlined className='icon2'/><b>Registrations:</b><p className='startdate2'>2323</p>
          </div>
        </div>
      </div>
      <div className='location'>
        <EnvironmentOutlined className='icon2'/>
        <b>Location:</b><p className='location1'>Location Address</p>
        <div className='button'><button type='text' className='button1'>Check Result</button></div>
        </div>
      </div>
    </div>




<div>
        <div className="content-box">
          <p className='AnyUpdate'>Any Update</p>
        </div>
        <div className='detail'>
        <div className='details'>
          <b>Competition Name</b>
    
        <div>
          <p> Lerem lpsum is simply dummy text of the printing and typesetting industry.Lorem lpsum has</p>
          <p> been the industry's standard</p>
          <div>
            <DatabaseFilled className='icon2'/>
            <b>Start Date:</b><p className='startdate1'>Start Date:Sat,19th March 22</p>
          </div>
          <div className='reg'>
            <UserOutlined className='icon2'/><b>Registrations:</b><p className='startdate2'>2323</p>
          </div>
        </div>
      </div>
      <div className='location'>
        <EnvironmentOutlined className='icon2'/>
        <b>Location:</b><p className='location1'>Location Address</p>
        <div className='button'><button type='text' className='button1'>Check Result</button></div>
        </div>
      </div>
    </div>



<div>
        <div className="content-box">
          <p className='AnyUpdate'>Any Update</p>
        </div>
        <div className='detail'>
        <div className='details'>
          <b>Competition Name</b>
    
        <div>
          <p> Lerem lpsum is simply dummy text of the printing and typesetting industry.Lorem lpsum has</p>
          <p> been the industry's standard</p>
          <div>
            <DatabaseFilled className='icon2'/>
            <b>Start Date:</b><p className='startdate1'>Start Date:Sat,19th March 22</p>
          </div>
          <div className='reg'>
            <UserOutlined className='icon2'/><b>Registrations:</b><p className='startdate2'>2323</p>
          </div>
        </div>
      </div>
      <div className='location'>
        <EnvironmentOutlined className='icon2'/>
        <b>Location:</b><p className='location1'>Location Address</p>
        <div className='button'><button type='text' className='button1'>Check Result</button></div>
        </div>
      </div>
    </div>
  </div>
  );
};

const App = () => (
  <Tabs defaultActiveKey="2" onChange={onChange}>
    <TabPane tab="Ongoing Events" key="1">
      Ongoing Events
    </TabPane>
    <TabPane tab="Past Events" key="2">
      {/* Removed space between component name and () */}
      <PastEvents />
    </TabPane>
    <TabPane tab="Results" key="3">
      Event
    </TabPane>
  </Tabs>
);

const onChange = (key) => {
  console.log(key);
};

export default App;