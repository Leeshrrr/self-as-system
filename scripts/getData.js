 var d = $.ajax({
     url: "../items.json", //json文件位置，文件名
     type: "GET", //请求方式为get
     dataType: "json", //返回数据格式为json
     async: false,
     success: function(data) { //请求成功完成后要执行的方法 
     }
 });
 var data = d.responseJSON;



 console.log(data);
 console.log(data[23]);