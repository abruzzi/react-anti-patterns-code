interface Notification {
  send(message: string, type: string): void;
}

class EmailNotification implements Notification {
  send(message: string, type: string) {
    console.log(`Sending email with message: ${message}, type: ${type}`);
  }
}

class Application {
  private notifier: Notification;

  constructor(notifier: Notification) {
    this.notifier = notifier;
  }

  process() {
    // perform some actions to response user interaction
    this.notifier.send("Some event happened", "info");
  }
}

const app = new Application(new EmailNotification());
app.process();



class SMSNotification {
  send(message: string, type: string) {
    console.log(`Sending SMS with message: ${message}, type: ${type}`);
  }
}

export default Application;
