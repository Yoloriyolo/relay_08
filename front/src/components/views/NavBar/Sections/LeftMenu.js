import React from "react";
import { Menu } from "antd";
import {Link} from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <Link to="/">Home</Link>
      </Menu.Item>
      {/* <Menu.Item key="mail">
        <a href="/list"></a>
      </Menu.Item> */}
      <SubMenu title={<Link to="/list">사연게시판</Link>}>
        {/* <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup> */}
      </SubMenu>
      <SubMenu title={<Link to="/faceSearch">사진 찾기</Link>}></SubMenu>
    </Menu>
  );
}

export default LeftMenu;
