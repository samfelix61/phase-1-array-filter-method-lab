function findMatching(drivers, name){
    return drivers.filter(item => name.toLowerCase() === item.toLowerCase())
}

function fuzzyMatch(drivers, name){
    return drivers.filter(item => item.toLowerCase().indexOf(name.toLowerCase()) === 0)
}
function matchName(driver, names){
    return  driver.filter((record) => record.name === names);
}