import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col , Button} from 'reactstrap';
import { map, get } from 'lodash';
import classNames from 'classnames';
import { loadSidebar, toggleSort } from '../actions'
import './Sidebar.css'


const loadData = ({ loadSidebar }) => {
  loadSidebar()
}

const sort = ({ toggleSort, sidebar }) => {
	toggleSort(sidebar)
}

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {visibility: 'visible'}
  }
  componentWillMount() {
    loadData(this.props)
  }

  renderItem = (item) => item &&
    <Row key={item.key}>
      <Col>
        <Row>{item.name}</Row>
        <Row>{item.type}
          <i className="material-icons">place</i>
          {item.location}
          </Row>
      </Col>
      <Col sm="5" >
        {item.updated}
      </Col>
    </Row>

  toggleVisibility = () => this.setState({visibility: this.state.visibility === 'hidden' ? 'visible': 'hidden'});

	isVisible = () => this.state.visibility === 'visible';

  toggleButton = () => <Button
    className="toggler"
    onClick={this.toggleVisibility}>
    {this.state.visibility === 'hidden' ?
      <i className="glyphicon glyphicon-ok"></i>:
      <i className="glyphicon glyphicon-remove"></i>}
    </Button>

	refreshButton = () => <Button
      className="refresh"
      onClick={() => loadData(this.props)}>
     <i className="glyphicon glyphicon-refresh"></i>
    </Button>

  sortButton = () => <Button
      className="toggle-sort"
      onClick={() => sort(this.props)}>
       <i className="glyphicon glyphicon-sort"></i>
      </Button>

  render(){
    const { sidebar, total } = this.props;
    if (!sidebar) return <h1><i>Loading Sidebar</i></h1>;
    const externalToggle = this.isVisible() ? null : this.toggleButton();

    return (
      <div>
        <div className="outer-toggler">{externalToggle}</div>
        <div className={classNames(['sidebar',  this.state.visibility])}>
          <div className="sidebar-title">
            Reports: {total}
	          {this.refreshButton()}
	          {this.toggleButton()}
          </div>
	        {this.sortButton()}
          <div className="sidebar-items">
            {map(sidebar, this.renderItem)}
          </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => (
  { sidebar: get(state, 'sidebar.data', null),
    total:  get(state, 'sidebar.total', null)
  })


export default connect(mapStateToProps, {
  loadSidebar,
  toggleSort,
})(Sidebar)
