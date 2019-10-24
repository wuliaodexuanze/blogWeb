;
(function() {
	/**
	 * 顶部导航搜索左侧下拉框选择，点击时显示
	 * @param  {[type]} e 当前点击的元素
	 * @return {[type]}   [description]
	 */
	function headerSearchLeftShow(e) {
		$(e).addClass('active visible')
			.find('.menu ').removeClass('hidden').addClass('visible');
	}
	/**
	 * 顶部导航搜索左侧下拉框隐藏
	 * @param  {[type]} e 下拉框包裹元素
	 * @return {[type]}   [description]
	 */
	function headerSearchLeftHidden(e) {
		$(e).removeClass('active visible')
			.find('.menu ').addClass('hidden').removeClass('visible');
	}
	/**
	 * 点击顶部导航搜索左侧
	 * @param  {[type]} event) {		event.stopPropagation();		headerSearchLeftShow(this);	} [description]
	 * @return {[type]}        [description]
	 */
	$('#header-search-left').on('click', function(event) {
		event.stopPropagation();
		headerSearchLeftShow(this);
	});
	/**
	 * 点击导航列出选项
	 * @param  {[type]} event) {		event.stopPropagation();		var self [description]
	 * @return {[type]}        [description]
	 */
	$('#select-menu').on('click', function(event) {
		event.stopPropagation();
		var self = event.target;
		var val = $(self).data('value');
		var text = $(self).text();
		$('#header-select-text').text(text);
		$('#header-search-left-value').val(val);
		$(self).addClass('active selected').siblings().removeClass('active selected');
		headerSearchLeftHidden('#header-search-left');
	});
	/**
	 * 搜索提交
	 * @param  {[type]} event) {		event.preventDefault();		console.log(event);	} [description]
	 * @return {[type]}        [description]
	 */
	$('#header-search-form').submit(function(event) {
		event.preventDefault();
		console.log(event);
	})
})();