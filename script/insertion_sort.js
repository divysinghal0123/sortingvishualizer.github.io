function Insertion()
{
    c_delay = 0;
    //Declaring Variables
    var j;
    for(j=0;j<array_size;j++){
        div_update(divs[j],div_sizes[j],"yellow");

        var key = div_sizes[j];   
        var i = j - 1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"purple");         //Colour Update
            div_update(divs[i+1],div_sizes[i+1],"purple");     //Colour Update

            div_sizes[i+1] = div_sizes[i];                           //Swapping Being Performed

            div_update(divs[i],div_sizes[i],"purple");
            div_update(divs[i+1],div_sizes[i+1],"purple");

            div_update(divs[i],div_sizes[i],"pink");

            if(i==(j-1))                                       //if by change two same numbers are same
            { 
                div_update(divs[i+1],div_sizes[i+1],"red");
            }else{
                div_update(divs[i+1],div_sizes[i+1],"pink");
            }
            i-=1;
        }
        div_sizes[i+1]=key;
        
        var t;
        for(t=0;t<j;t++){
            div_update(divs[t],div_sizes[t],"green");
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");

    enable_buttons();
}