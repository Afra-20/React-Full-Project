import React, {Component} from 'react';
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

class Enigma extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  goto(event){
  	event.preventDefault();
  	console.log("help");
  	const add = {
  		name: this.name.value,
  		desc: this.desc.value,
  	}
  	console.log(add);
  }
  render() {
    return (
        
           <div className="animated fadeIn">
         <Row>
          <Col xs="12">
            <Card>
                <CardHeader>
                <i className="fa fa-edit"></i>Form Elements
                <div className="card-actions">
                  <a href="#" className="btn-setting"><i className="icon-settings"></i></a>
                  <Button className="btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></Button>
                  <a href="#" className="btn-close"><i className="icon-close"></i></a>
                </div>
              </CardHeader>
               <Collapse isOpen={this.state.collapse} id="collapseExample">
                <CardBody>
                <Form className="form-horizontal" onSubmit={(e) => this.goto(e)}>
                  <FormGroup>
                    <Label>Title</Label>
                    <div className="controls">
                        <Input ref={(Input) => this.name = Input} id="prependedInput" size="16" type="text"/>
                    </div>
                      <Label htmlFor="textarea-input">Textarea</Label>
                    <Col>
                      <Input ref={(Input) => this.desc = Input} type="textarea" name="textarea-input" id="textarea-input"  rows="5"
                             placeholder="Description..."/>
                    </Col>
                  </FormGroup>
                  <div className="form-actions">
                    <Button type="submit" color="primary">Submit</Button>
                    <Button color="secondary">Reset</Button>
                  </div>
                </Form>
              </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
       </div>    
    );
  }
}
export default Enigma;	
