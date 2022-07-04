
document.addEventListener ('alpine:init', () => {
    Alpine.data('townWidget', function() {
      
      return { 
                reg: '',
                town: '',
                listMessage: '...',
    
                determine(){
                    this.listMessage = countAllFromTown(this.reg, this.town);
                    
    
                         
                  }
             }
        });
    })