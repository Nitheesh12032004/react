import "./pay.css"

const Pay = () => {
    const fun=(()=> {

    let div = document.createElement("div");

div.innerHTML = `
  <h2>Your Order Summary:</h2>
  <p><strong>Product:</strong> Super Widget</p>
  <p><strong>Price:</strong> $19.99</p>
  <br>
  <p> your product deliverd on expect on December:05/2024
  <br>
  <p>Thank you for your purchase!</p>
`;
div.id="div"

document.body.appendChild(div);

} 
    )
const  dc=(()=> {


  var  a=document.createElement("div");
    a.innerHTML=` 
    <h3>Enter your Card details </h3> <br>
    <input type="number" placeholder="Enter your Debit card Number" >  <br>
    <h3>enter your Credit card Details <br>
        <input type="number" placeholder="Enter your Credit card Number"> <br>
        <button>Verify </button>`
        a.id="a";
        document.body.appendChild(a)
    
} 
)
const upi=(()=> { 

   var  b=document.createElement("div");
    b.innerHTML=` 
    <h2>Enter your UPI   </h2>
        <input type="password" placeholder="enter your UPI ID" > <br>
        <button>Verify </button>  
        <button> Get Otp </button> 

    ` 
    b.id="b"
    document.body.appendChild(b)
}  
)
 const  qr=(()=> { 
 
   var c=document.createElement("div");
    c.innerHTML=`
    <h1> Scan Me </h1>
    <img src="" alt="no" height="200" width="200"> <br>
    <button> Print your receipt </button>`  
    c.id="c"
    document.body.appendChild(c)
 } 
)

  return (
    <div>
       <div className="payment">
        <div className="section">
<h1> Select our payment way</h1>
</div>
<div className="method"> 

<button className="btn" onClick={fun} id="cod">cash on delivery </button>
<button className="btn" onClick={dc} id="debit"><p >Debitcard/ credit card</p> </button>
<button className="btn" onClick={upi}><p>UPI ID</p> </button>
<button className="btn" onClick={qr}><p > Scan ME</p> </button>

        </div>
    </div> 
    </div>
  )
}

export default Pay
