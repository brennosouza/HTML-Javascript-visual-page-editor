// const input = append(
//   createElement($.input, {
//     style: "font-family:'courier new';font-weight:bold",
//     type: "text",
//     className: "ok foo bar",
//     attributes: {
//       data: {
//         yep: "Nope",
//         well: "ehr",
//         foo: "bar"
//       },
//       list: "dataList",
//       placeholder: "select something",
//     },
//     id: "Hithere",
//     title: "input#Hithere",
//   })
// );

// function newElement(parentnode, nodetype){
	
// }

// function newbutton(){
	
// 	newdiv = document.createElement('button');   //create a div
// 	newdiv.id = 'newid';                      //add an id
// 	newdiv.name = "NOMETESTE"
// 	newdiv.innerHTML = "Botao"
	
// 	return newdiv

// }

// // Function to download data to a file
// function download(data, filename, type) {
//     var file = new Blob([data], {type: type});
//     if (window.navigator.msSaveOrOpenBlob) // IE10+
//         window.navigator.msSaveOrOpenBlob(file, filename);
//     else { // Others
//         var a = document.createElement("a"),
//                 url = URL.createObjectURL(file);
//         a.href = url;
//         a.download = filename;
//         document.body.appendChild(a);
//         a.click();
//         setTimeout(function() {
//             document.body.removeChild(a);
//             window.URL.revokeObjectURL(url);  
//         }, 0); 
//     }
// }

// function stuffchanged(){
// 	window.location.reload(false); 
// }

// function mudarClasses(){
// document.getElementById("MyElement").classList.add('MyClass');

// document.getElementById("MyElement").classList.remove('MyClass');

// if ( document.getElementById("MyElement").classList.contains('MyClass') )

// document.getElementById("MyElement").classList.toggle('MyClass');
// }



// function codeAddress() {
//   <!-- alert('ok'); -->
// var body = document.getElementsByTagName('body')[0],
// newdiv = document.createElement('div');   //create a div
// newdiv.id = 'newid';                      //add an id
// newdiv.name = "NOMETESTE"
// <!-- newdiv.className = "class"; -->
// newdiv.style.backgroundColor = "lightblue";
// newdiv.innerHTML = newdiv.name
// newdiv.classList.add('MyClass');
// body.appendChild(newdiv);                 //append to the doc.body

// var button = document.createElement('button')

// body.appendChild(newbutton())

// body.appendChild ( newbutton() )

// download(document.documentElement, page, html)

// <!-- document.getElementsByTagName('body')[0], -->

// <!-- body.insertBefore(newdiv,body.firstChild) //OR insert it -->
// }

var selectedtreenode = document.body;

var headerIDs = 0;

function getIframeDocument(){
  return document.getElementById("iframecontent").contentWindow.document
}


function addmetatagiframe(){
  let iframe = getIframeDocument();
  var meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1.0"
  iframe.head.appendChild(meta);
}

function designModeToggle() {
  // Get the checkbox
  var checkBox = document.getElementById("designmodecheckbox");

  var iframe = getIframeDocument();

  // If the checkbox is checked
  if (checkBox.checked == true){
    iframe.designMode = "on";
    // text.style.display = "block";
  } else {
    iframe.designMode = "off";
    // text.style.display = "none";
  }
}

function darkModeToggle(){
  // Get the checkbox
  var checkBox = document.getElementById("darkmodecheckbox");

  var iframe = getIframeDocument();

  if (checkBox.checked == true){
    document.body.classList.add("dark");
    // text.style.display = "block";
  } else {
    document.body.classList.remove("dark");
    // text.style.display = "none";
  }
}

function updateTreeList(){

}

function addtoTreeList(liname, referralid){
  var list = document.getElementById("bodyul");
  var item = document.createElement("li");
  item.referralid = referralid;
  
  

  // var span = document.createElement("span");
  // span.className = "caret";
  // span.textContent = "Span";
  // item.appendChild(span);

  // item.addEventListener("click", function() {console.log("hdalsf")} );
  item.addEventListener("click", function() {  } ); //treeListItemSelected(this);

  
  
  
  console.log(item.referralid);
  item.textContent = liname;
  // item.classList.add(referralid);

  list.appendChild(item);

}

function togglecolor(me){
  this.style.color='red';
}

function deleteSelectedNode(){
  var node = document.getElementById(selectedtreenode);
  document.removeChild(node)
}

function treeListItemSelected(stuff){
  // selectedtreenode=this; 
  console.log(selectedtreenode.DOCUMENT_NODE);
  selectedtreenode.style.color = 'white';
  seletectedtreenode = stuff;
  console.log(stuff);
  stuff.style.color = 'red';
  console.log(selectedtreenode);
  // selectedtreenode = this.referralid;
}

function newButton(){
  let iframe = getIframeDocument();
  var button = document.createElement('button')
  button.textContent = "Button";
  document.getElementById("iframecontent").contentWindow.document.body.appendChild(button);
  // alert('ok'); 
} 

function newHeader(){
  let iframe = getIframeDocument();
  var header = document.createElement("h1");
  var text = document.createTextNode("Text");

  header.id = "header" + headerIDs;
  console.log(header.id);
  headerIDs++;
  

  header.appendChild(text);
  iframe.body.appendChild(header);

  addtoTreeList("Header", header.id);

}

function treeNodeSelected(){
  this.parentElement.querySelector(".nested").classList.toggle("active");
  this.classList.toggle("caret-down");
}



