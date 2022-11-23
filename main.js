let users = [
     { name: "Имя", number: "Телефон", id: "item1", src:'images/contacts.png' },

   ];
   users.map((item) => {

     const func1 = document.createElement("div");
     const Icon = document.createElement("span");
     const table1 = document.createElement("p1");
     const table2 = document.createElement("p1");
     const Item = document.createTextNode(`${item.name}`);
     const Item2 = document.createTextNode(`${item.number}`);
     const deleteicon = document.createTextNode(" ");
     const deletebtn = document.createElement("h5");
     const profileimg = document.createElement('img');

     div.appendChild(func1);
     func1.appendChild(profileimg);
     func1.appendChild(table1);
     func1.appendChild(table2);
     func1.appendChild(Icon);

     profileimg.setAttribute('src',`${item.src}`);
     profileimg.classList.add('proficon');
     table2.classList.add("prof1");
     table1.classList.add("prof2");
     func1.classList.add("prof0");

     table1.appendChild(Item);
     table2.appendChild(Item2);
     deletebtn.appendChild(deleteicon);
     func1.appendChild(deletebtn);
     




     document.querySelector("#DopButton").onclick = myClick;
     function myClick() {
       let NameValue = document.getElementById("Input1").value;
       let NumberValue = document.getElementById("Input2").value;
       if (NameValue | 
          NumberValue != "") {


         console.log(NameValue);
         const textname = document.createElement("p1");
         const textnum = document.createElement("p1");
         const func2 = document.createElement("div");
         const deleteicon = document.createTextNode("Удалить");
         const deletebtn = document.createElement("h5");
         const IconText = document.createElement("h1");
         const profileimg = document.createElement('img');




         profileimg.setAttribute('src',`${item.src}`);
         profileimg.classList.add('proficon');

         div.appendChild(func2);
         func2.appendChild(profileimg);
         func2.appendChild(textname);
         func2.appendChild(textnum);
         deletebtn.appendChild(deleteicon);
         func2.appendChild(deletebtn);

         textname.innerHTML = NameValue;
         textnum.innerHTML = NumberValue;

         deletebtn.classList.add("delbtn");
         textname.classList.add("prof2");
         textnum.classList.add("prof1");
         func2.classList.add("prof0");
         
     } else if (NameValue || NumberValue === "") {
          alert("Введите контакт");
          return false;
        }
     }
   




     const Input = document.querySelector("#search");
     Input.oninput = function () {
       if (val != " ") {
          userItems.forEach(function (elem) {
           if (elem.innerText.search(val) == -1) {
           }
         });
       } else {
          userItems.forEach(function (elem) {
           if (elem.innerText.search(val) == -1) {
           }
         });
       }
     };
   });
   




   document.onclick = function (event) {
     const Parent = event.target.parentNode;
     if (event.target.classList == "icons") {
     } else if (event.target.classList == "delbtn") {
          Parent.classList.add("hidden");
        } else {
        }
   };

   


   OpnBtn.onclick = function () {
     const setNewContact = document.querySelector(".tde");
     setNewContact.classList.toggle("hidden");
   };
   