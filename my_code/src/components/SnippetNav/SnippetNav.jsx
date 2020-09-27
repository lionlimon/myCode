import React, {Component, Fragment} from 'react';
import Tag from '../UI/Tag/Tag.js'
import { MiniBlock, MiniBlockTitle, MiniBlockForm, MiniBlockInput } from '../UI/MiniBlock/MiniBlock.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

import './SnippetNav.sass';


class SnippetNav extends Component {
  
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return(
      <nav className="top-content-nav">
        <ul className="top-list">
          <ReactCSSTransitionGroup transitionName="tli" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {this.props.snippets.map(snippet => 
              (<li className="top-list__item">
                <a className="top-list__link active" href="#">{snippet.type}</a>
              </li>))}
          </ReactCSSTransitionGroup>
                
          
          
          
          <li className="top-list__item">
            <a href="block:#add-snippet" className="top-list__button">+</a>

            <MiniBlock id="add-snippet" className="top-list__add-block">
              <MiniBlockTitle>Добавить сниппет</MiniBlockTitle>
              
              
              <div className="tags">
                {this.props.snippets.map(snippet => (
                  <Tag onClick={this.props.removeSnippet} key={snippet.id} id={snippet.id} text={snippet.type}/>
                ))} 
              </div>

              <MiniBlockForm onSubmit={this.props.addSnippet.bind(this)}>
                  <MiniBlockInput onChange={this.props.setNewSnippetType.bind(this)} type="text" placeholder="Тип"/>
              </MiniBlockForm>  
              
            </MiniBlock>
         
          </li>
        </ul>
      
      </nav>

    );
  }
}
export default SnippetNav;
