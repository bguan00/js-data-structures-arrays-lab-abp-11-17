// Write your solution here!
const drivers=["Milo", "Otis","Garfield"]
function destructivelyAppendDriver (name) {drivers.push(name)}
function destructivelyPrependDriver (name) {drivers.unshift(name)}
function destructivelyRemoveLastDriver (name) {drivers.pop(name)}
function destructivelyRemoveFirstDriver (name) {drivers.shift(name)}
function appendDriver (name) {
  var newArray = drivers.slice();
  newArray.push(name)
  return newArray
}

function prependDriver (name) {var drivers2 = drivers.slice();
  drivers2.unshift(name);
  return drivers2)}
function removeLastDriver (name) {drivers.slice(0, drivers.length-1)}
function removeFirstDriver (name) {drivers.slice(1)}
