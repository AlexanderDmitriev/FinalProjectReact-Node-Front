import React, { Component } from 'react';

export class LibraryForm extends Component {
  state = {
    title: '',
    author: '',
    year: '',
    pages: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ title: '', author: '', years: '', pages: '' });
  };

  render() {
    return (
      <>
        <div
          style={{ width: 'auto', height: 100, backgroundColor: 'blue' }}
        ></div>

        <div style={{ width: 100, height: 20, backgroundColor: 'black' }}></div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Назва книги
            <br />
            <input
              style={{ width: 300, height: 40 }}
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              name="title"
              //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label htmlFor="">
            Автор книги
            <br />
            <input
              style={{ width: 300, height: 40 }}
              value={this.state.author}
              onChange={this.handleChange}
              type="text"
              name="author"
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <br />
            <label htmlFor="">
              Рік випуску
              <br />
              <input
                style={{ width: 300, height: 40 }}
                value={this.state.years}
                onChange={this.handleChange}
                type="text"
                name="years"
                //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <br />
            <label htmlFor="">
              Кількість сторінок
              <br />
              <input
                style={{ width: 300, height: 40 }}
                value={this.state.pages}
                onChange={this.handleChange}
                type="text"
                name="pages"
                //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <br />
            <button
              type="submit"
              style={{ width: 150, height: 60, marginTop: 50 }}
              className=""
            >
              Додати
            </button>
          </label>
        </form>
      </>
    );
  }
}
export default LibraryForm;
