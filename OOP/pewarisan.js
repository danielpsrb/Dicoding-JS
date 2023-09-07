function MailService(sender) {
    this.sender = sender;
  }
   
  MailService.prototype.sendMessage = function (message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
   
  function WhatsAppService(sender) {
    MailService.call(this, sender);
  }
   
  // Prototype inheritance
  WhatsAppService.prototype = Object.create(MailService.prototype);
  WhatsAppService.prototype.constructor = WhatsAppService;
   
  WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
   
  function EmailService(sender) {
    MailService.call(this, sender);
  }
   
  // Prototype inheritance
  EmailService.prototype = Object.create(MailService.prototype);
  EmailService.prototype.constructor = EmailService;
   
  EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
   
  const whatsapp = new WhatsAppService('+6281234567890');
  const email = new EmailService('daniel@psrb.com');
  whatsapp.sendMessage('Hello', '+6289876543210');
  whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
  email.sendMessage('Hello', 'john@doe.com');
  email.sendDelayedMessage('Hello', 'dimas@dicoding.com', 3000);

  /*
  Output
  +6281234567890 sent Hello to +6289876543210
  +6281234567890 sent Hello to +6289876543210
  +6281234567890 sent Hello to +6282234567890
  daniel@psrb.com sent Hello to john@doe.com
  daniel@psrb.com sent Hello to dimas@dicoding.com
  */