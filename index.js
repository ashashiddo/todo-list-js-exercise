function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
  
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
  
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}
  
function logTaskState(taskIndex) {
  const task = tasks[taskIndex];
  task.logState();
}
  
function completeTask(taskIndex) {
  const task = tasks[taskIndex];
  task.markCompleted();
}
  
// DRIVER CODE BELOW
  
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
  
logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
  
