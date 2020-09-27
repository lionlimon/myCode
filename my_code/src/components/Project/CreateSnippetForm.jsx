import React, {Component} from 'react';
import { 
  Card,
  CardTitle,
  CardButtons,
  CardForm, 
  CardClose, 
} from '../UI/Card/Card';
import MiniButton from '../UI/MiniButton/MiniButton';

import LineInput from '../UI/LineInput/LineInput';


class CreateSnippetForm extends Component {
  
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.state = {
      fields: {}
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      fields: { ...this.state.fields, [name]: value.trim() },
    });
  }

  onSubmitForm(event) {
    event.preventDefault();
    console.log({...this.state.fields, 'component_id': this.props.componentId});
    this.props.createSnippet({...this.state.fields, 'component_id': this.props.componentId});
    this.props.closePopup();
  }

  render() {
    return ( 
      <Card>
        <CardClose onClick={this.props.closePopup} />
        <CardTitle>Добавление сниппета</CardTitle>
        
        <CardForm onSubmit={this.onSubmitForm}>
          <LineInput mixinClass="card__input" name="name" type="text" onChange={this.handleInputChange} placeholder="Название сниппета"/>
          <LineInput mixinClass="card__input" name="type" type="text" onChange={this.handleInputChange} placeholder="Тип сниппета"/>
        
        
          <CardButtons>
            <MiniButton wide blue type="submit" onClick={this.props.onClick}>
              Добавить
            </MiniButton>
          </CardButtons>
        </CardForm>
      </Card>
    );
  }
}

export default CreateSnippetForm;