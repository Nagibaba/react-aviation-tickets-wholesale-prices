import React, { Component } from 'react';
import './App.css';
import Recommendations from './Recommendations'

class App extends Component {
  constructor(){
    super()
    this.state = {
      from: '',
      to: '',
      goDate: '',
      returnDate: '',
      checked: '',
      recommendations: [],
      loading: false

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
  

    
  }


  handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
     
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({loading:true})
    const key = 'e6a233cf-16e4-4430-8da8-ff9d70660191'
    let url = `https://v2.api.tickets.ua/avia/search.json?key=${key}&destinations[0][departure]=${this.state.from}&destinations[0][arrival]=${this.state.to}&destinations[0][date]=${this.state.goDate}&adt=1&chd=0&order_by=price`
    if(this.state.checked){
      url += `&destinations[1][departure]=${this.state.to}&destinations[1][arrival]=${this.state.from}&destinations[1][date]=${this.state.returnDate}`
    }

    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson)=> {
      if(myJson.response){
        this.setState({recommendations: myJson.response.recommendations, loading: false})

      }else{
        alert('Xəta var')
      }
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src='http://digitalbrain.az/images/logo.png' className="App-logo" alt="logo" />
            <h1 className="App-title">Digital Brain visualizer</h1>
          </header>
          <form className="" onSubmit={this.handleSubmit}>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Başlanğıc</label>
                <input onChange={this.handleChange} type="text" className="form-control" name="from" placeholder="BAK" />
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Çatış</label>
                <input onChange={this.handleChange} type="text" className="form-control" name="to" placeholder="IST" />
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Gediş Tarixi</label>
                <input onChange={this.handleChange} type="text" className="form-control" name="goDate" placeholder="GG-AA-İİİİ" />
              </div>
            </div>

            <div className="col-md-3" style={{display: this.state.checked?'block':'none'}}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Qayıdış Tarixi</label>
                <input onChange={this.handleChange} type="text" className="form-control" name="returnDate" placeholder="GG-AA-İİİİ" />
                
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
              <div className="col-md-3">
                <div className="form-check">
                  <input onChange={this.handleChange} type="checkbox" id="exampleCheck1" className="form-check-input" name="checked"  />
                  <label className="form-check-label" htmlFor="exampleCheck1">Gediş qayıdış</label>
                  <button type="submit" className="btn btn-primary">Bax</button>
                </div>
                
              </div>
            </div>
            
          </form>
        </div>
        <hr />
        {this.state.loading?
          <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
          </div>:
          <Recommendations data={this.state.recommendations} />
        }
      </div>
    );
  }
}

export default App;
