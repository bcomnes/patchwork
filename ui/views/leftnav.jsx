'use babel'
import React from 'react'
import { Link } from 'react-router'
import u from '../lib/util'

class NavLink extends React.Component {
  render() {
    var selected = (this.props.to === this.props.location)
    return <div className={'leftnav-item '+(selected?'selected':'')}>
      <Link to={this.props.to}>{this.props.children}</Link>
    </div>
  }
}

export default class LeftNav extends React.Component {
  nameOf(id) {
    return this.props.names[id] || u.shortString(id||'', 6)
  }
  render() {
    return <div>
      <NavLink to="/" location={this.props.location}>Forum</NavLink>
      <NavLink to="/inbox" location={this.props.location}>Inbox</NavLink>
      <NavLink to="/starred" location={this.props.location}>Starred</NavLink>
      <NavLink to="/feed" location={this.props.location}>Data-Feed</NavLink>
      <NavLink to="/sync" location={this.props.location}>Sync</NavLink>
      <br/>
      <div>Friends</div>
      <NavLink to={'/profile/'+this.props.userid} location={this.props.location}>{this.nameOf(this.props.userid)}</NavLink>
      {this.props.friends.map((id) => {
        return <NavLink key={id} to={'/profile/'+id} location={this.props.location}>{this.nameOf(id)}</NavLink>
      })}
    </div>
  }
}