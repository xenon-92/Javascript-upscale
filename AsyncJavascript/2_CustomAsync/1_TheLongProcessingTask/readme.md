# Long running task

> Try clicking the button |Calculate Pi| and then after the button |Add some value in dark card|
> we see that the values of the dark card are changed much after the value of pI is calculated 
> This is because the main thread is busy calculating the value of the pI and once it is finished the 
> the event from the event queue get pushed to the stack, where the value of the dark card is updated
