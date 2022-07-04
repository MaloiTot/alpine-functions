
document.addEventListener ('alpine:init', () => {
    Alpine.data('airtimeWidget', function() {
      
      return { 
                usage: '',
                airtime:'0.00',
                airtimeMessage: 'this is about airtime',
    
                calculate(){
                    this.airtimeMessage = enoughAirtime(this.usage, this.airtime);
                    
    
                         
                  }
             }
        });
    })

