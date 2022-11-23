const plus = document.querySelector(".incre"),
    minus = document.querySelector(".decre"),
    num = document.querySelector(".num");
    let a = 1;
    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? 0 + a : a;
      num.innerText = a;
    });

    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? 0 + a : a;
        num.innerText = a;
      }
    });

    

    var modalContent = document.querySelector(".modal-content");
   modalContent.innerHTML=`<div>
   <span class="close-button">&times;</span>
   <h1>ADDED TO CART!</h1>
   <img src="Rectangle 1.png" alt="" style="width:100px">
   <h6>RIBANE LS TOP - CHOCOLATE</h6>
   <h6>$38.20</h6>
   <h6>Color:brown</h6>
   <h6>Size:XS</h6>
   <h6>quantity:1</h6>
 </div>`;
