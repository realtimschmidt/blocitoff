(function() {
  function HomeCtrl(Task) {
    this.tasks = Task.all;

    this.addTask = function () {
      if (this.title) {
        this.task.$add({
          title: this.title,
          description: this.description,
          createdAt: Date.now()
        });
        this.title = '';
      }
    };

    this.expiredTask = function (createdAt) {
      if (createdAt < Date.now() - 604800000) {
        return true;
      }
    }
  }

  angular
    .module('blocitoff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
