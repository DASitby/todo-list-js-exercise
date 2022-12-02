// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    },
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", 'remove the poop, brother');
const task2 = newTask("Do Laundry", 'process the laundry brother, you must');
const tasks = [task1, task2];

task1.logTaskState();
task1.markCompleted();
task1.logTaskState();
console.log(tasks);
