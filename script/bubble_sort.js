
function Bubble()
{
    c_delay=0;
    var i;
    var j;
    for(i=0;i<array_size-1;i++){
        for(j=0;j<array_size-i-1;j++){

            div_update(divs[j],div_sizes[j],"cyan");
            if(div_sizes[j] > div_sizes[j+1]){
                div_update(divs[j],div_sizes[j],"pink");
                div_update(divs[j+1],div_sizes[j+1],"pink");

                //SWAP VARIABLES
                var temp = div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j],"pink");
                div_update(divs[j+1],div_sizes[j+1],"pink");
            }
            div_update(divs[j],div_sizes[j],"silver");
        }
        div_update(divs[j],div_sizes[j],"purple");
    }
    div_update(divs[0],div_sizes[0],"purple");

    enable_buttons();
}