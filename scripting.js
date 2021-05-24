var check=false;
let inputfile=document.querySelector("#input-file");
let gen=document.querySelector("#btn-generate");
let btn=document.querySelector("#buttonfor")
let hint=document.querySelector("#hint");
let img=document.querySelector("#img");
let down=document.querySelector("#downloads");
var refresh=down.querySelector("#refresh");
btn.addEventListener("click",()=>
{
	inputfile.click();
})
inputfile.addEventListener("change",(e)=>
{
	console.log("kk");
	var target=e.target;
	var file=target.files;
	console.log(file);
	if(file&&file.length)
	{
		var fr=new FileReader();
		
      hint.style.display="none";
      gen.style.display="inline-block";
        fr.onload=function()

        {
        	console.log(fr.result);
        	$("#img").attr("src",fr.result);
        }
        fr.readAsDataURL(file[0]);
        check=true;
	}
	
})
var main=document.querySelector("#main");

gen.addEventListener("click",()=>
{
	if(check==true)
	{
        html2canvas(main, {
      onrendered: function (canvas) {
              getCanvas = canvas;
              gen.style.display="none";
              console.log(down.style.display);
              console.log("ll");
              down.style.display="inline-block";
              console.log(down.style.display);
           }
      });
	}
	else 
	{
		alert("please upload your meme image");
	}
})
down.addEventListener("click",()=>
{
	var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#downloads").attr("download", "your_pic_name.png").attr("href", newData);
    $("#btn-preview").css("display","inline-block");
    $("#downloads").css("display","none");
    
})
refresh.addEventListener("click",function()
{
	console.log("jjjjjjjjjjjjjjjjj");
	location.reload();
})