/*
 * / filename:  NavMenu.js
 * / Author:    Martin Rizada
 * / brief:     display the header or navigation of the website
 
 */
import React from 'react';
import { Layout } from 'antd';
import { UserOutlined, LogoutOutlined, UserSwitchOutlined } from '@ant-design/icons';
import './NavMenu.css';

const { Header } = Layout;

const NavMenu = () => (
    <Header className="app-header">
        <div className="logo">PEMS</div>
        <div className="header-icons">
            <div className="icon-container">
                <UserSwitchOutlined className="icon" />
                <div className="icon-text">Admin</div>
            </div>
            <div className="icon-container">
                <UserOutlined className="icon" />
                <div className="icon-text">Account</div>
            </div>
            <div className="icon-container">
                <LogoutOutlined className="icon" />
                <div className="icon-text">Logout</div>
            </div>
        </div>
    </Header>
);

export default NavMenu;