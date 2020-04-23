'use strict';
let DomElement=function (selector, height, width, bg, fontSize) {
    

   selector=selector;

   height='200px'; 

    width='200px';

    bg= '#89EBF2'; 

   fontSize='16pt';

};

DomElement.prototype.ride=function (selector, height, width, bg, fontSize) {
  let newSel0=selector.charAt(0);
  console.log(newSel0);
    if( newSel0 ==='.'){
        let elem = document.createElement('div');
        elem.style.cssText= `
        width: ${width};
        height:  ${height};
        background: ${bg};
        fontSize: ${fontSize};
        `;
        elem.innerHTML=' это div';
      document.body.append(elem);
}
else{
if( newSel0 ==='#'){
  let elem = document.createElement('p');
  elem.id = selector;
  elem.style.cssText= `
  width: ${width};
  height:  ${height};
  background: ${bg};
  fontSize: ${fontSize};
  `;
  elem.innerHTML=' это параграф';
document.body.append(elem);
}

};
}



let newDiv = new DomElement();
newDiv.ride('#tt', '200px', '300px', 'gray', '20pt');


