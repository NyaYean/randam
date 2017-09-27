// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());