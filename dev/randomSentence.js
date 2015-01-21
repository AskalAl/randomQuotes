/*!
 * randomSentence.js v1.1.1
 * Put a random sentence where you want in your website. Perfect for footer :)
 * MIT License
 * by Vincent Loy
 * http://vincent-loy.fr
 */
(function($)
{
    "use strict"; 
    
    $.fn.randomSentence=function(options)
    {
        
        var defauts=
        {
            "lang" : "fr"

        };  

        var parametres=$.extend(defauts, options);


        return this.each(function()
        {
           var sentence = "YO !"

            console.log(sentence);
            $(this).html(sentence);
        });
    };
})(jQuery);