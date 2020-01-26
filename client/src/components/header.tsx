import React from 'react';
import { Menu, Icon, Input, AutoComplete, Select } from 'antd';

const { SubMenu } = Menu;
const InputGroup = Input.Group;
const { Option } = Select; 

class Header extends React.Component {
  state = {
    current: 'mail',
    dataSource: []
  };

  handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  };

  handleChange = (value: any) => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
        ? []
        : [`${value}@gmail.com`, `${value}@yahoo.com`, `${value}@hotmail.com`, `${value}@me.com`]
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="appstore" />
          Quotes
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="mail" />
          Newsletter
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
        <Menu.Item>
        <InputGroup compact>
          <Select defaultValue="Sign Up">
            <Option value="Sign Up">Sign Up</Option>
          </Select>
          <AutoComplete 
            dataSource={this.state.dataSource}
            style={{ width: 200 }}  
            onChange={this.handleChange}
            placeholder="email"
          />
        </InputGroup>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;