api.controller = function ($scope) {
    /* widget controller */
    var c = this;
		console.log(c.data);
    $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		$scope.data = [c.data.incidents];
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
}
