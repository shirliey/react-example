import React from "react";
import { Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import menus from './router'

const { SubMenu } = Menu;

class BasicPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '1',
      title: 'admin',
      isPoptop: false,
    };
    this.topContainer = React.createRef();
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.windowClick();
  }
  // button点击事件
  handleClick(e) {
    e.preventDefault();
    this.setState({
      isPoptop: true
    });
  }
  // window点击事件
  windowClick() {
    window.addEventListener('click', this.handleOutsideClick);
  }
  windowOutsideClick() {
    window.removeEventListener('click', this.handleOutsideClick);
  }
  // button弹框关闭事件
  handleOutsideClick(e) {
    if(this.topContainer.current !== null && !this.topContainer.current.contains(e.target)){
      this.setState({
        isPoptop: false
      });
    }
  }
  render() {
    let menusArr= [];
    for(let i = 0; i < menus.length; i++) {
      let item = menus[i];
      if(item.children !== undefined){
        for(let j = 0; j < item.children.length; j++) {
          let subitem = item.children[j];
          menusArr.push(subitem);
        }
      }else{
        menusArr.push(item);
      }
    }
    return (
      <Router>
        <header className="header">
          <Menu className="nav-header" mode="horizontal" theme="dark">
            {menus.map((route, index) => {
              if(route.children === undefined) {
                return <Menu.Item key={index}>
                    <span className={route.icon}></span>
                    <Link to={route.path}>{route.title}</Link>
                  </Menu.Item>;
              }else{
                return <SubMenu key={index} title={route.title} icon={<span className={route.icon}></span>}>
                    {route.children.map((subroute, subindex) => (
                      <Menu.Item to={subroute.path} key={index+'-'+subindex}>
                        <span className={route.icon}></span>
                        <Link to={subroute.path}>{subroute.title}</Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>;
              }
              })}
          </Menu >
          <div className="btn-top re" ref={this.topContainer}>
            <div onClick={this.handleClick.bind(this)}>{this.state.title}</div>
            {this.state.isPoptop && 
              <ul className="pop-ul-top ab">
                <li>设置</li>
                <li>退出</li>
              </ul>
            }
          </div>
        </header>
        <Switch>
          {menusArr.map((route, index) => {
            return <RouteContent key={index} {...route}></RouteContent>;
          })}
        </Switch>
      </Router>
    );
  }
}
export default BasicPage;

// 一二级菜单显示route
function RouteContent(route) {
  return (
    <Route exact path={route.path} render={props => {
        document.title = route.title || 'React App';
        return <route.component {...props} />;
      }}
    />
  )
}
