function Speller([...name]) {
    if (!name.length) {
        return
    }
    console.log(name.splice(0, 1));
    console.log(name) //?
    Speller(name); //?
}

Speller("joe");