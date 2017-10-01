/**
 * Created by aayusharora on 6/28/17.
 */


function b(url) {
    console.log("b runs");
    function main (data) {
        console.log(data)
    }
    setInterval(function() {ajax(url,main)},1000);
    console.log("After b");
}

function ajax(url, callback) {

   var k =  getResponse();
   if(k !== undefined) {
       callback(k);
   }

}

b("Hello");

function getResponse() {
  return "Hello World";
}



