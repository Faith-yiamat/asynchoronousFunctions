  // question1
async function logMessage(message , delay){
    await new Promise(resolve => setTimeout(resolve , delay));
    console.log(message);
}

logMessage("Hi people", 2000);

  // question2
  const users = [1, 2, 3, 4, 5];
  async function getUserid() {
    for (const id of users) {
      try {
        const userData = await userData(id);
        console.log(userData);
      } catch (error) {
        console.log(`The following users cannot be found ${id}: ${error}`);
      }
    }
  }
  getUserid();

// question3
async function performTask(){
    try{
        await performTask();
        console.log("Task completed successfully");
    }catch{
        console.log("Error occured during test.");
    }
}

performTask();

// question 4

function unstableTask(taskName , failureProbability){
    return new Promise((resolve , reject) => {
        const random = Math.random();
        if(random > failureProbability){
            resolve(`Task ${taskName} completed successfully.`)
        }
        else{
            reject(`Task ${taskName} failed.`)
        }
    })
}

console.log(unstableTask("LOvely Task" , 5));


function executeWithRetry(taskName,retries,failureProbability){
    for(let attempt = 0; attempt < retries; attempt++){
        try{
            if(Math.random > failureProbability){
                console.log("Failed");
            }
        }
        catch(error){
            console.warn(`Attempt ${taskName} succeeded after ${attempt +1}failed: ${error.message}`)
            if(attempt === retries -1){
                console.error(`Task ${taskName} failed after ${retries} attempts.`)
            }

        }
    }

}

// console.log(`Task ${taskName} succeeded after ${attempt} attempts`);
console.log(executeWithRetry("ourTask", 3, 0.5));
     