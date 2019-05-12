const orm = require('../config/orm');


class Burger {
    constructor(burger_name,devoured,id){
        this._burger_name = burger_name;
        this._devoured = devoured;
        this._id = id;
    }

    static getAll(){
        return orm.selectAll();
    }

    add(){
        return new Promise ((res,rej)=>{
            const burgerData = {
                burger_name:this._burger_name,
                devoured:this._devoured
            }
            orm.insertOne(burgerData).then(id=>{
                this._id = id;
                res(this._id);
            }).catch(err=>{
                rej(err);
            })
        })
        
    }

    devour(){
        //if burger didn't have an id(not in DB)), throw error
        console.log(this);
        if(!this._id){
            return Promise.reject("burger not added to DB yet!"); 
        }else{
            this._devoured = true;
            const burgerData = {
                devoured:this._devoured
            }
            return  orm.updateOne(burgerData,this._id);
        }
    }
}

module.exports = Burger;
//TEST:
// Burger.getAll().then(console.log);
// const burger = new Burger("The Varsity2",false,1);
// burger.add().then(console.log);
// burger.devour().then(console.log).catch(console.log);