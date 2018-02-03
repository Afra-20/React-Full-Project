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
  CardBlock,
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

class Upload extends Component{
	render(){
	return(
       <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
  			<Card className="mx-4">
                <CardBlock className="card-body p-4">
      <FormGroup>
      <Label>Student/Institute Name:</Label>
                    <div className="controls">
                        <Input ref={(Input) => this.name = Input} id="prependedInput" placeholder="" type="text"/>
                    </div>
      <Label>Email Id:</Label>
                    <div className="controls">
                        <Input ref={(Input) => this.name = Input} id="prependedInput" placeholder="" type="text"/>
                    </div>
                    <FormGroup row>
                 <Col xs="9" md="6">
                   <Label htmlFor="file-input">File input</Label>
                  </Col>
                  <Col xs="12">
                    <Input type="file" id="file-input" name="file-input"/> 
                    </Col>
                  </FormGroup>
					<div className="form-actions">
                    <Button type="submit" color="primary">Upload</Button>
                    <Button color="secondary">Cancel</Button>
                  </div>
             </FormGroup>
             </CardBlock>
             </Card>
          </Row>
        </Container>
      </div>
      
		);   
      }
	}
export default Upload;	