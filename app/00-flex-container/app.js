const styleContainer = document.querySelector('.css-container'),
	codeContainer = document.querySelector('.language-css'),
  initialCode = `
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   justify-content: flex-start;
   align-items: stretch;
   align-content: stretch; 
`;
  


const fdElement = document.querySelector('select[name=flexdirection]'),
	fwElement = document.querySelector('select[name=flexwrap]'),
  jcElement = document.querySelector('select[name=justifycontent]'),
  aiElement = document.querySelector('select[name=alignitems]'),
  acElement = document.querySelector('select[name=aligncontent]');

function getValues(){
	const flexDirection = fdElement.value,
  	flexWrap = fwElement.value,
  	justifyContent = jcElement.value,
  	alignItems = aiElement.value,
  	alignContent = acElement.value;
  return {
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent
  };
}


function changeStyle(){
	const styleObj = getValues();
	let code = `
   display: flex;
   flex-direction: ${styleObj.flexDirection};
   flex-wrap: ${styleObj.flexWrap};
   justify-content: ${styleObj.justifyContent};
   align-items: ${styleObj.alignItems};  
   align-content: ${styleObj.alignContent}; 
	`;
  setCode(code);
}


document.querySelectorAll('select').forEach(el => {
	el.addEventListener('change', () => {
  	changeStyle();
  })
})





function startCode(){
	try{
  	setCode(initialCode);
  }catch(e){
  	setTimeout(() => {
    	startCode();
    }, 100);
  }
}

startCode();

function setCode(code){
	code = `.container{
   ${code.replace(/^\s+|\s+$/g, '')}  
}`;
	styleContainer.innerText = code;
}


