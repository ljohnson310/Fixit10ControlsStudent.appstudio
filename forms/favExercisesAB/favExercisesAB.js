var exercises = ["pullups","pushups","situps","jogging","planks","curls"]
var coreExercises = ["situps","planks"]



favExercises.onshow=function(){
}

selExercises.onfocusout=function(){
}



btnToMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}

btnSubmitEx.onclick=function(){
  if(selExcersices.text[0] === "situps" && selExcercises.text[1] === "planks") [
  NSB.MsgBox("You chose situps and planks")
} else {
  NSB.MsgBox("You did not choose a core excercise")
  }
