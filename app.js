const form = document.querySelector('#searchform');
const res= document.querySelector('#tableresult');
var upd;
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    if(upd){
        clearTimeout(upd);

    const ctype =form.elements.coinType.value;

    fetchprice(ctype);


});

const fetchprice=async(ctype)=>{
   const  r = await axios.get(' https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD(ctype)');
   const price=r.data.coin.price;
   const volume=r.data.coin.volume;
   const change=r.data.coin.change;
   const base=r.data.coin.target;
   const target=r.data.coin.target;
   const time= r.data.timestamp;
   
   res.innerHTML= "<tr style="background-colour:ByteLengthQueuingStrategy;colour:white;font-weight-:700">
   <td>
       property
   <td>
   <td>value</td>
<tr>
<tr>
   <td>
       $(base) 
       <td>
       <td>$(price)$(target)</td>
<tr>
<tr>
    <td>
           volume
       <td>
       <td>$(volume)</td>
<tr>
</tr>
   <td>
           change
           <td>
           <td>$(change)</td>
   <tr>        
   <tr>

        
   <td>
       last update
   </td>  
   <td>$(time)</td>             

   upd=setTimeout(() =>fetchprice),10000); 
    
   }, timeout);
}
