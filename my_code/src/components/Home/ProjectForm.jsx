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


class CreateProjectForm extends Component {
  
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.state = {
      fields: { name: props.data?.projectName || '' }
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      fields: { ...this.state.fields, [name]: value },
    });
  }

  onSubmitForm(event) {
    event.preventDefault();

    if (this.state.fields.name.trim().length === 0) {
      this.props.addNotify({message: 'Минимальная длина поля - 1 символ'});
      
      return false;
    }
      
    this.props.onSubmit({name: this.state.fields.name, id: this.props.data?.projectId})
  }

  render() {
    return (
      <Card>
        <CardClose onClick={this.props.closePopup} />
        <CardTitle>{this.props.children}</CardTitle>
        
        <CardForm onSubmit={this.onSubmitForm}>
        <LineInput mixinClass="card__input" name="name" type="text" onChange={this.handleInputChange} value={this.state.fields.name} placeholder="Название проекта"/>
          <CardButtons>
            <MiniButton type="submit" onClick={this.props.onClick}>
              Добавить
            </MiniButton>
          </CardButtons>
        </CardForm>
      </Card>
    );
  }
}

export default CreateProjectForm;