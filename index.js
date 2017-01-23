// code solution here
class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name
    this.politicalParty = politicalParty
    this.yearsInOffice = yearsInOffice
    this.homeState = homeState
  }

  veto () {
    return 'NO!'
  }

  passBill () {
    return 'You can do that!'
  }

  doCharity () {
    return 'I like to help people.'
  }

  conductPressInterview () {
    return 'I am proud to be an American.'
  }

  sayHi () {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
  }
}

var george = new President('George Washington', 'Democrat', 10, 'DC' )
var abraham = new President('Abraham Lincoln', 'Democrat', 10, 'Illinois' )
var richard = new President('Richard Nixon', 'Republican', 10, 'Ohio')
var jimmy = new President('Jimmy Carter', 'Democrat', 10, 'Georgia')
