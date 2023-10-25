const {people} = require('../data.js')

getPeople = (req, res) => {
    res.status(200).json({success: true, data:people})
}

addPeople = (req, res) => {
    if (!req.body.name){
        return res.status(400).json({success: false, message: 'Please provide a name'})
    }
    people.push({id: Number(people.length + 1), name: req.body.name})
    res.status(201).json({success: true, name: req.body.name})
}

getPerson = (req, res) => {
    const { id } = req.params
    console.log(id)
    const person = people.find((person)=> person.id === Number(id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `no valid id`})
    }
    res.status(200).json({ success: true, data: person });

}

changePeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));
  
    if (!person) {
      return res.status(404).json({ success: false, msg: `No valid entry found with id ${id}` });
    }
    person.name = name;
    res.status(200).json({ success: true, data: person });
}

deletePeople = (req, res) => {
    const { id } = req.params;
    const updatedPeople = people.filter((person) => person.id !== Number(id));
  
    if (updatedPeople.length === people.length) {
      return res.status(404).json({ success: false, msg: `No valid entry found with id ${id}` });
    }
    people = updatedPeople;
    res.status(200).json({ success: true, data: {} });
  }

module.exports = {getPeople, addPeople, getPerson, changePeople, deletePeople}