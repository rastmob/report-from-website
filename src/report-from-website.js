

import html2canvas from 'html2canvas'; 

class ReportFromWebsite {
  constructor(buttonSelector, logUrl = '/error/log') {
  
    this.button = document.querySelector(buttonSelector);
    

    this.logUrl = logUrl;

    if (this.button) {

      this.button.addEventListener('click', () => this.handleClick());
    } else {
      console.error('Button not found!');
    }
  }


  handleClick() {
    console.log('Sending report data...');
    
    const state = this.captureState();
    
 
    this.captureScreenshot().then(screenshotData => {
      state.screenshot = screenshotData;
      
     
      this.sendReportData(state)
        .then(response => {
          console.log('Report sent successfully:', response);
        })
        .catch(error => {
          console.error('Error sending report:', error);
        });
    });
  }


  captureState() {
    const state = {
      url: this.logUrl || window.location.href, 
      userAgent: navigator.userAgent,  
      timestamp: new Date().toISOString(),
    };
    return state;
  }


  async captureScreenshot() {
    try {
      const canvas = await html2canvas(document.body);
      return canvas.toDataURL(); 
    } catch (error) {
      console.error('Error capturing screenshot:', error);
      return null;
    }
  }


  async sendReportData(data) {
    try {
      const response = await fetch(this.logUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json(); 
    } catch (error) {
      console.error('Error sending report data:', error);
      throw error;  
    }
  }
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReportFromWebsite;  
} else {
  window.ReportFromWebsite = ReportFromWebsite; 
}
