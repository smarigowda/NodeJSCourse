module.exports = function(x,y,callback) {
  try {
    if (x < 0 || y < 0) {
        throw new Error(" l = "
                            + x + ", and b = " + y + "dimensions should be greater than zero");
    }
    else
         callback(null, {
            perimeter: function () { 
        		   return (2*(x+y)); // x and y are referred from closure
			},
            area:function () {
        		    return (x*y); // x and y are referred from closure
			}
    });
  }
  catch (error) {
        callback(error,null);
  }
}