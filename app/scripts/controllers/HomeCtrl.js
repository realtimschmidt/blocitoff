(function() {
  function HomeCtrl(Task, $scope) {
    this.tasks = Task.all;
    this.taskStatus = function (task) {
      Task.completeTask(task);
    }

    this.hide = function(task) {
     return task.created < (moment().dayOfYear() - 7) || task.completed == true
    };

  /*  this.dayOfYearToDate = function(task){
      console.log(task)
      return Task.dayOfYearToDate(task.created)
    }*/

    this.addTask = function(messageTitle, messageDescription, taskPriority) {
      if (messageTitle) {
        var newTask = {
          title: messageTitle,
          description: messageDescription,
          priority: taskPriority,
          created: moment().dayOfYear(),
          completed: false
        };
        Task.addTask(newTask);
      }
      $scope.clearfunction = function(event){
        event.messageTitle = null;
        event.messageDescription = null;
        event.taskPriority = "3";
      }
    }

  }

  angular
    .module('blocitoff')
    .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
