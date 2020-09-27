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


class CreateComponentForm extends Component {
  
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
    this.props.createComponent({...this.state.fields, 'project_id': this.props.projectId});
    this.props.closePopup();
  }

  render() {
    return (
      <Card>
        <CardClose onClick={this.props.closePopup} />
        <CardTitle>Добавление Компонента</CardTitle>
        
        <CardForm onSubmit={this.onSubmitForm}>
        <LineInput mixinClass="card__input" name="component_name" type="text" onChange={this.handleInputChange} placeholder="Название Компонента"/>
        <LineInput mixinClass="card__input" name="category_name" type="text" onChange={this.handleInputChange} placeholder="Категория"/>
        
        
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

export default CreateComponentForm;