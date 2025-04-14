let Activity = [
  "Go for a run",
  "Read a book",
  "Watch a documentary",
  "Cook a new recipe",
  "Try a new hobby",
  "Visit a museum",
  "Learn a new skill",
];

function addActivity() {
  const newActivity = document.getElementById("ActivityInput").value.trim();
  if (newActivity != "") Activity.push(newActivity);
  document.getElementById("ActivityInput").value = "";
}

function SelectrandomActivity() {
  const randomIndex = Math.floor(Math.random() * Activity.length);
  document.getElementById("result").innerHTML = Activity[randomIndex];
}
