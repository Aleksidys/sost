import React, { Component } from 'react';

const images = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  },
  {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  },
  {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }
];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'grid' // Состояние для вида отображения (сетка по умолчанию)
    };
  }

  toggleView = () => {
    this.setState({ view: this.state.view === 'grid' ? 'list' : 'grid' });
  };

  render() {
    const { view } = this.state;
    return (
      <div>
        <button onClick={this.toggleView}>
          {view === 'grid' ? 'List View' : 'Grid View'}
        </button>

        {view === 'grid' ? (
          <div className="grid-view">
            {/* Отображение в виде сетки */}
            <div className="image-gallery">
              {images.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.img} alt={image.name} />
                  <div className="image-info">
                    <p><strong>{image.name}</strong></p>
                    <p>{image.color}</p>
                    <p>${image.price}</p>
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="list-view">
            {/* Отображение в виде списка */}
            <ul className="image-list">
              {images.map((image, index) => (
                <li key={index} className="list-item">
                  <img src={image.img} alt={image.name} />
                  <div className="list-info">
                    <p><strong>{image.name}</strong></p>
                    <p>{image.color}</p>
                    <p>${image.price}</p>
                    <button>Add to Cart</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Portfolio;
