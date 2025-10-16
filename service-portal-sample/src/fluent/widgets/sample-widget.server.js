(function () {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */

		data.incidents = new global.GlideQuery('incident')
			.where('opened_at', 'ON', 'last_12_months')
			.orderBy('opened_at')
			.select('opened_at')
			.map((inc) => new GlideDateTime(inc.opened_at).getMonthLocalTime() - 1)
			.reduce((acc, inc) =>  {
				acc[inc] += 1;
				return acc;
			} , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

})();
