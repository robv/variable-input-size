(function($) {

	$.fn.variable_input_size = function(params) {
		
		// merge default and user parameters
		params = $.extend( {default_size: 10}, params);
		
		// traverse all nodes
		this.each(function() {
		
			var $this = $(this);
			
			if ($this.attr('value').length == 0)
				$this.attr('size', params.default_size);
			else
				$this.attr('size', $this.attr('value').length);
			
			$this.focus(function() {
				$this.attr('size', params.default_size);
			}).blur(function() {
				if ($this.attr('value').length == 0)
					$this.attr('size', params.default_size);
				else
					$this.attr('size', $this.attr('value').length);
			});

		});

		// allow jQuery chaining
		return this;
	};

})(jQuery);