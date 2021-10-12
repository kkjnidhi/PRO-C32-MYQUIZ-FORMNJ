class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter Your Answer Here....");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.option1=createElement('h4')
    this.option2=createElement('h4')
    this.option3=createElement('h4')
    this.option4=createElement('h4')
    this.q =createElement('h3')
    this.greeting=createElement("h2")
    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    //Create html() and position() for each question, input and answers.
this.q.html("Question:-What starts and ends with the letter'E',but has only one letter?");
this.option1.html("1.Everyone") 
this.option2.html("2.Envelope") 
this.option3.html("3.Estimate") 
this.option4.html("4.Example") 




this.q.position(15, 40);
this.option1.position(50, 70);
this.option2.position(50, 100);
this.option3.position(50, 130);
this.option4.position(50, 160);
    this.input1.position(150, 230);
    this.button.position(350, 300);
    this.input2.position(450, 230);
    this.greeting.position(230, 100);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input1.hide()
      this.input2.hide()
      this.button.hide()
      this.option1.hide()
      this.option2.hide()
      this.option3.hide()
      this.option4.hide()
      this.q.hide()
      var message1 = `
    
       Thank You,Your answer has been submitted`;
          this.greeting.html(message1);
    
   
    })


  }
}
