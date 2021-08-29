

class Home{

 
    constructor(){   
      
       // this.menu.rect(1,1,width,50);

        this.input = createInput("Guest");
        this.input.style('font-size','50px');
        this.input.style('border-radius','90px');
        

        this.radio1 = createRadio();  
       
            this.radio1.option("EASY",);         
            this.radio1.option("MEDIUM");        
            this.radio1.option("HARD");

        this.radio1.style('font-size', '40px');
        this.radio1.value("1");  

        this.button4 = createButton("Play with AI");       
        this.button4.style('border-radius','90px');
        this.button4.style('font-size', '30px');   
        
        this.button2 = createButton("");
        
        
    }



      hide(){       
        this.input.hide();
        this.radio1.hide();
        this.button4.hide();
        
      }


    
      display(){         
          let width = windowWidth;
          let height = windowHeight;

      //Allign all obejcts to Center       
          // covnvet ths to below statement to constructor
                rect(1,1,width,50);
              
          // covnvet ths to below statement to constructor
                image(logo,width/2 - logo.width / 2 ,height * .05);
                
                this.input.position(width/2 - this.input.width * 2, height*.60);
               
                this.radio1.size(width*.40 ,height);
                this.radio1.position(width/2 - this.radio1.width / 2+100,height * .74);       
                                   
                this.button4.position(width / 2 - this.button4.width, height * .85);

                this.button4.mousePressed(()=>{

                this.hide();
                  player.name = this.input.value();
                  gameState = 'Go'                      

                });
    }
}
