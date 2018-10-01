(function($)
{
	$.fn.fademenu = function(options)
	{
		var defaults = {
							fadeout : 300,
							fadein : 300,
							slideup : 300,
							slidedown : 300
						},
		settings = $.extend({}, defaults, options);
				
		this.each(function()
		{
			$("dd:not(dd#open)").hide();
			$("dt a").click(function()
			{
				var link = $(this).attr("href");
				if(link !== "#")
				{
					window.location = link;
					return false;
				}
				if ($.css(this, "display") !== "none" && $.css(this, "visibility") !== "hidden") 
				{			
					$("dd").fadeTo(settings.fadeout, 0);
					$("dd:visible").slideUp(settings.slideup);
					$(this).parent().next().slideDown(settings.slidedown);
					$(this).parent().next().fadeTo(settings.fadein, 1);							
				}
				return false;				
			});
		});
		return this;
	}
}
)(jQuery);
