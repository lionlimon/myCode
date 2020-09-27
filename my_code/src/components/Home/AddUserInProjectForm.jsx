import React, {Component} from 'react';
import { 
  Card,
  CardTitle,
  CardSubTitle,
  CardButtons,
  CardForm, 
  CardClose, 
} from '../UI/Card/Card';
import MiniButton from '../UI/MiniButton/MiniButton';
import LineInput from '../UI/LineInput/LineInput';


class AddUserInProjectForm extends Component {
  
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
      fields: { ...this.state.fields, [name]: value },
    });
  }

  onSubmitForm(event) {
    event.preventDefault();

    if (this.state.fields.email.trim().length === 0) {
      this.props.addNotify({message: 'Минимальная длина поля - 1 символ'});
      
      return false;
    }
      
    
    this.props.addUserInProject(this.state.fields.email, this.props.projectId);
    this.props.closePopup();
  }

  render() {
    return (
      <Card>
        <CardClose onClick={this.props.closePopup} />
        <CardTitle>Добавление пользователя в проект</CardTitle>
        
        <CardForm onSubmit={this.onSubmitForm}>
        <LineInput mixinClass="card__input" name="email" type="text" onChange={this.handleInputChange} placeholder="Email участника"/>
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

export default AddUserInProjectForm;