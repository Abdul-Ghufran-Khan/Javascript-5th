     //Question 1
     var a = +prompt("Enter first number")
     var b = +prompt("Enter second number")
     var c = a + b
     document.write("Sum of "+a+" and "+b+" is "+c)
     //Question 2
     var d = a - b
     document.write("</br>"+"</br>"+"Sub of "+a+" and "+b+" is "+d)
     var e = a * b
     document.write("</br>"+"</br>"+"Product of "+a+" and "+b+" is "+e)
     var f = a / b
     document.write("</br>"+"</br>"+"Division of "+a+" and "+b+" is "+f)
     var g = a % b
     document.write("</br>"+"</br>"+"Modulus of "+a+" and "+b+" is "+g)
     // line
     document.write("</br>"+"<hr/>")
     //Question 3
     var variable
     document.write("Value after varaible declaration is "+variable)
     var variable = 5
     document.write("</br>"+"</br>"+"Initial value "+variable)
     document.write("</br>"+"</br>"+"Value after increament is : "+ ++variable)
     var sum = variable + 7
     document.write("</br>"+"</br>"+"Value after addition is : "+sum)
     document.write("</br>"+"</br>"+"Value after decreament is : "+ --sum)
     var div = sum % 3
     document.write("</br>"+"</br>"+"The remainder is : "+div)
     // line
     document.write("</br>"+"<hr/>")
     //Question 4
     for(let i=1; i<=10; i++)
     {
         document.write(`4 * ${i} = ${i*4} <br />`)
     }
