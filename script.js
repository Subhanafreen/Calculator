
        const display = document.getElementById('display');
        function appendcharacter(char)
        {
            display.value += char;
        }
         function deletecharacter()
         {
            display.value= display.value.slice(0,-1);
         }
         function cleardisplay()
         {
            display.value=('');
         }
         function calculate()
         {
            let expression= display.value;
            let result;
            try
            {
                result=eval(expression);
                display.value=result;

            } 
            catch(error)
            {
                display.value='tevald';
            }
         }


       