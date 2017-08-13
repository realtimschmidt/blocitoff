(function() {
  function HomeCtrl(Task, $scope) {
    this.tasks = Task.all;

    this.hide = function(task) {
     return task.created < (moment().dayOfYear() - 7) || task.completed == true
    };

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
        event.taskPriority = "Low";
      }
    }

  }

  angular
    .module('blocitoff')
    .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
