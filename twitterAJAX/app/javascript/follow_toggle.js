import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    toggleButton.addEventListener('click', this.handleClick.bind(this));
  }

  async handleClick(event) {
    event.preventDefault();
    if (this.followState === 'Follow!') {
      this.render();
      
    } else {
      this.render();
      

    };
    
  }

  async follow() {
    // Your code here

    
  }

  async unfollow() {
    // Your code here
    this.toggleButton.innerText = 'Unfollow!'
  }

  render() {
    switch (this.followState) {
      // Your code here
      case 'Follow!':
        this.toggleButton.innerText = "Unfollow!";
        // this.toggleButton.dataset.data-follow-state = "Unfollow!";
        
        console.log(this.followState)
        break;
      case "Unfollow!":
        this.toggleButton.innerText = "Follow!"
        this.toggleButton.dataset = "Follow!"
        console.log(this.followState)
        break;
    }
  }

  // button labeled diff: date-follow-state

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}