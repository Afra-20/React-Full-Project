import React , {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

class Queries extends Component{
	render(){
	return(
       <div>
       <Label>From:</Label>
                    <div className="controls">
                        <Input ref={(Input) => this.name = Input} id="prependedInput" placeholder="Enter Your Email Id" type="text"/>
                    </div>
       <Label>To:</Label>
                    <div className="controls">
                        <Input ref={(Input) => this.name = Input} id="prependedInput" placeholder="" type="text"/>
                    </div>             
        <Label htmlFor="textarea-input">Query</Label>
                    <Col>
                      <Input ref={(Input) => this.desc = Input} type="textarea" name="textarea-input" id="textarea-input"  rows="5"
                             placeholder="Ask anything..."/>
                    </Col>
      </div>
		);   
      }
	}
export default Queries;	