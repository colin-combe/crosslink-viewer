function TestController(){
	this.color = "blue";
};

TestController.prototype.talk = function() {
	console.log("I am talking");
}

function App(){
	var ctrl = new TestController();
	ctrl.talk();
	return ctrl;

}

module.exports = App;