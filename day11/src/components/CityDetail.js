export default function CityDetail(){
  this.$target = document.createElement('div');
  this.$target.className = 'city-detail';

  this.templete = () => {

  };

  this.render = () => {

  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}