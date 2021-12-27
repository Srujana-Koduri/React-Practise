const movies = [
    {
        id: 1,
        name: "Master",
        director: "suresh"
    },
    {
        id: 2,
        name: "sarkar",
        director: "Vijay"
    }
]

function Movie(id,name){
    this.id=id;
    this.name=name;
}

Movie.prototype.print=function printMovie(){
    console.log(this.id, this.name);
}

const m1 = new Movie(1,"Sarkar");
const m2 = new Movie(2,"Master")
const mlist=[m1,m2]
mlist.forEach(m => m.print());
    
mlist.map(m=>console.log(m.name))