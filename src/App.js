import React, { Component } from 'react';
import './App.css';
import TrickOrTreaters from './Components/TrickOrTreaters/TrickOrTreaters';
import Houses from './Components/Houses/Houses';

class App extends Component {
  constructor() {
      super();
      this.state = {
        children: [
          {
            name: 'Dustin',
            img: 'http://smilehappyortho.com/wp-content/uploads/2016/09/stranger_thingsdustin2.png',
            costume: 'Ghostbuster'
          },
          {
            name: 'Eleven',
            img: 'https://cdn1.thehunt.com/app/public/system/zine_images/10818452/original/d545834e70fc7dc17bb71ddc41855e64.jpeg',
            costume: 'Ghost'
          },
          {
            name: 'Lucas',
            img: 'http://vignette4.wikia.nocookie.net/strangerthings8338/images/f/ff/Lucas_Sinclair_001.png/revision/latest?cb=20160804154451',
            costume: 'Ghostbuster'
          },
          {
            name: 'Mike',
            img: 'https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/30915/1504738939-20585-3703/Mike_Wheeler.png',
            costume: 'Ghostbuster'
          }
        ],
        candy: ['Hershey\'s Kiss', ''],
        houses: [{
            img: 'https://i.pinimg.com/736x/d4/ef/fc/d4effc65721b18fa68b714e60cbfcd20--victorian-homes-exterior-victorian-houses.jpg',
            candy: 'Orange Peanut Marshmallow'
          },
          {
            img: 'https://beautifulnashvillehomes.files.wordpress.com/2012/01/chapel-ave.jpg',
            candy: 'Reese\'s'
          },
          {
            img: 'http://www.xsjjys.com/data/out/176/WHDQ-513144597.jpg',
            candy: 'MnM\'s'
          },
          {
            img: 'http://img15.deviantart.net/dcf9/i/2006/130/a/0/haunted_house_by_daaksm.jpg',
            candy: 'Ferrero Rocher'
          },
          {
            img: 'https://s-i.huffpost.com/gadgets/slideshows/378352/slide_378352_4465040_free.jpg',
            candy: 'Candy Corn'
          },
          {
            img: 'https://pbs.twimg.com/media/Cb2NxBLW4AAfaYI.jpg',
            candy: 'Twizzlers'
          },
          {
            img: 'https://blogjob.com/lifeandliving/files/2014/10/spooky-house.jpg',
            candy: '3 Musketeers'
          },
          {
            img: 'http://buybrinkhomes.com/wp-content/uploads/2017/08/comfortable-cute-home-best-20-cute-small-houses-ideas-on-pinterest.jpg',
            candy: 'Toothpaste'
          },
          {
            img: 'https://i.ytimg.com/vi/6JhCma1F2Bk/maxresdefault.jpg',
            candy: 'Bag of reese\'s, snickers, crunch bars, and chocolate coins'
          }
        ],
        house: {
                  img: 'http://6336-presscdn-26-82.pagely.netdna-cdn.com/wp-content/uploads/2012/10/hauntedhouse.jpg',
                  candy: 'King-Size Hershey Bars'
                }, 
        houseIndex: 0,
        canKeepGoing: false,
        done: false
      }
      
      this.changeHouse = this.changeHouse.bind(this);
      this.getCandy = this.getCandy.bind(this);
  }

  changeHouse(){
    this.setState({
        house: this.state.houses[this.state.houseIndex++],
        houseIndex: this.state.houseIndex++,
        done: this.state.houseIndex + 1 === this.state.houses.length + 3 ? true : false
    })
  }

  getCandy(candy){
    let x = [...this.state.candy]
    x.push(candy);
    this.setState({
        candy: x
    })
    this.changeHouse();
    
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Happy Halloween!</h1>
          <h3>Move from house to house, and choose whether or not to get candy with your group of kids!</h3>
          <h4>The data is all tracked in state of App. It passes the data along through props!</h4>
        </header>
        <Houses house={this.state.house} changeHouse={this.changeHouse} done={this.state.done} getCandy={this.getCandy}/>
        <TrickOrTreaters children={this.state.children} candy={this.state.candy} />
      </div>
    );
  }
}

export default App;
