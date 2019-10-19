image = JSON.parse(sessionStorage.getItem("image") || "[]")

console.log(image)




var canvas = new fabric.Canvas('c');

canvas.setBackgroundImage(image.webformatURL,
     canvas.renderAll.bind(canvas));
     
     $("#text").on("click", function(e) {
        text = new fabric.IText($("#text").val(),
         { 
             left: 300,
             top: 300 ,
             fill: 'Grey',
             hasRotatingPoint: false,
             
        });  
              canvas.add(text);
      })

        $("#rect").on("click", function(e) {
              rect = new fabric.Rect({
            left: 150,
            top: 150,
            width: 120,
            height: 120 ,      
            fill: 'transparent',
            stroke: 'blue',
            strokeWidth: 5,
            hasRotatingPoint: false,
            lockScalingX: false,
            lockScalingY: false,
                      });  
          canvas.add(rect);
        });
        
        $("#circ").on("click", function(e) {
              circ = new fabric.Circle({
            left: 40,
            top: 40,
            radius: 110,     
            fill: 'transparent',
            stroke: 'green',
            strokeWidth: 5,
            lockScalingX: false,
            lockScalingY: false,
            originX: 'left',
            originY: 'top',
            
             });  
          canvas.add(circ);
        });

        $("#tri").on("click", function(e) {
            tri = new fabric.Triangle({
          width: 100,
          height: 100,
          left: 50, 
          top: 300,        
          fill: 'transparent',
          stroke: 'green',
          strokeWidth: 5,
          lockScalingX: false,
          lockScalingY: false,
          originX: 'left',
          originY: 'top',
          
           });  
        canvas.add(tri);
      });
      
      $("#poly").on("click", function(e) {
            poly = new fabric.Polygon([
            {x: 200, y: 0},
            {x: 250, y: 50},
            {x: 250, y: 100},
            {x: 150, y: 100},
            {x: 150, y: 50} ], 
            {
            left: 250,
            top: 150,
            angle: 0,
            stroke: 'green',
            strokeWidth: 5,
            fill: 'transparent',
            lockScalingX: false,
            lockScalingY: false,
            originX: 'left',
            originY: 'top',
          
           });  
        canvas.add(poly);
      });
        
        $("#save").on("click", function(e) {
              $(".save").html(canvas.toSVG());
        });

        $("#down").click(function () {
            var link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = "mypainting.png";
            link.click();
        });