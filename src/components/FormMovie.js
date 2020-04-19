import React from 'react';
import axios from 'axios';

class FormMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }
    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
    submitForm(e) {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
  .then(res => res.data)
  .then(res => {
    alert(`movie recorded!: ${res.id} !`);
  })
  .catch(e => {
    console.error(e);
    alert(`Erreur ton film on en veut pas : ${e.message}`);
  });

      }

    render() {
        return (
            <div className="FormMovie">
  <h1>Saisie d'un film</h1>

  <form onSubmit={this.submitForm}>
    <fieldset>
      <legend>Informations</legend>
      <div className="form-data">
        <label htmlFor="title">Nom du film</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div className="form-data">
        <label htmlFor="poster">Affiche du film: </label>
        <input
          type="text"
          id="poster"
          name="poster"
          onChange={this.onChange}
          value={this.state.poster}
          placeholder= "Balance le lien vers l'affiche"
        />
      </div>

      <div className="form-data">
        <label htmlFor="comment">Comments</label>
        <textarea
          type="text"
          id="comment"
          name="comment"
          onChange={this.onChange}
          value={this.state.comment}
          placeholder= 'Pourquoi tu kiffes ?'
        />
      </div>
      <hr />
      <div className="form-data">
        <input type="submit" value="Envoyer" />
      </div>
      <h3>Un indice?</h3>
      <img src= 'https://images-cdn.9gag.com/photo/aB0ZKEN_700b.jpg' alt= 'Gerard Darmon'/>
    </fieldset>
  </form>

  
  
</div>
        )
    }


} 

export default FormMovie;