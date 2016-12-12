// @flow
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Button, Row, Col, Table } from 'react-bootstrap';
import Sidebar from './SideBar';
import MaterialTitlePanel from './MaterialTitlePanel';
import SidebarContent from '../content/SideBarContent';

class Settings extends Component{
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    someSettings: PropTypes.bool.isRequired,
  };
  
  render() {
    const { isLoggedIn, someSettings, setSomeSettings } = this.props;
    const sideBarProps = {
      loggedIn: isLoggedIn,
      page: "SETTINGS",
    }
    const sidebar = <SidebarContent {...sideBarProps}/>;
    
    const contentHeader = (
      <span>
        <span> Decrediton - Settings</span>
      </span>);
    const sidebarProps = {
      sidebar: sidebar,
      docked: true,
      open: true,
      touch: false,
      shadow: false,
      pullRight: false,
      loggedIn: isLoggedIn,
      transitions: false,
      page: "SETTINGS",
    };

    /* View that will be seen when user has a set Client */
    const receiveView = (      
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div>
            <Row>
              <Col sm={12} >
                <h1>Settings Page</h1>
                <form>
                <FormGroup controlId={someSettingsValue}>
                  <Checkbox checked={someSettings} inline>
                    Some Setting
                  </Checkbox>
                </FormGroup>
                <Button 
                  bsStyle="primary"
                  disabled={someSettingsValue != someSettings}
                  onClick={() => this.props.setSomeSettings(someSettingsValue)}>
                  Save settings
                </Button>
                </form>
              </Col>
            </Row>
          </div>
        </MaterialTitlePanel>
      </Sidebar>);

    /* Check to see that client is not undefined */
    if (isLoggedIn) {
      if (client === undefined) {
        <p>Error occurred, should have client available</p>
      } else {
        return(settingsView);
      }
    } else {
      return(
        <div>
          <p>Error occurred, should be logged in</p>
        </div>
      );
    }
  }
};

export default Settings;
