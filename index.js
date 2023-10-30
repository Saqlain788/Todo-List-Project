import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What do you want in your todo list?",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more todo?",
            default: false,
        },
    ]);
    const { todo, addMore } = answers;
    console.log(answers);
    loop = addMore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your todo list:");
    todos.forEach((todo) => {
        console.log(todo);
    });
}
else {
    console.log("No todos found in your list ");
}
