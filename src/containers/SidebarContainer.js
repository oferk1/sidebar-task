import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Container } from 'reactstrap';
import { map, get } from 'lodash';
import moment from 'moment';
import { loadSidebar } from '../actions'
import './SidebarContainer.css'


const loadData = ({ loadSidebar }) => {
  loadSidebar()
}

class SidebarContainer extends Component {
  static propTypes = {
	  loadSidebar: PropTypes.func.isRequired,
  }

  componentWillMount() {
    loadData(this.props)
  }

  renderItem = (item) => item &&
    <Row>
      <Col>
        <Row>{item.name}</Row>
        <Row>{item.type}<i className="material-icons">place</i>{item.location}</Row>
      </Col>
      <Col sm="5" >
        {moment.unix(item.updated).format("MMMM DD hh:mm A")}
      </Col>
    </Row>



  render() {
    const { sidebar } = this.props;
    if (!sidebar) {
      return <h1><i>Loading Sidebar</i></h1>
    }

    return (
        <div className="sidebar">
          {map(sidebar, this.renderItem)}
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ sidebar: get(state, 'sidebar.data', null) })


export default connect(mapStateToProps, {
  loadSidebar,
})(SidebarContainer)
