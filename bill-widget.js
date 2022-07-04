
document.addEventListener ('alpine:init', () => {
    Alpine.data('billWidget', function() {
      
      return { 
                phone: '',
                
                billMessage: 'bill displays here..',
    
                calculate(){
                    this.billMessage = totalPhoneBill(this.phone);
                    
    
                         
                  }
             }
        });
    })