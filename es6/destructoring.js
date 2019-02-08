let manager = {  
    name: "Jurgen Klopps",
    club: "Liverpool"
  };

// before
name = manager.name;
club = manager.club;
// es5
let { name, club } = player
  
console.log(name)     
console.log(club)